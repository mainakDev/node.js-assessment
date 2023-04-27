const express = require('express');
const dotenv = require('dotenv').config();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const multer = require('multer');
const csv = require('csvtojson');
const connectDB = require('./config/db');
const User = require('./model/userModel');
const Agent = require('./model/agentModel');
const UserAccount = require('./model/userAccountModel')
const Policy = require('./model/policyModel')

const app = express()
const port = process.env.PORT || 4000

connectDB();
var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './public/uploads');
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
})

var uploads = multer({storage: storage});

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/fileUpload', require('./routes/mainRoutes'));

//uploading the CSV file
app.post('/', uploads.single('csv'), (req, res, next) => {
    csv().fromFile(req.file.path).then((jsonObj) => {
        console.log('Json Object:',jsonObj);
        for(var i = 0; i < jsonObj.length; i++){
            // console.log(jsonObj[i].agent);
            User.create({
                firstname: jsonObj[i].firstname,
                email: jsonObj[i].email,
                phone: jsonObj[i].phone,
                dob: jsonObj[i].dob,
                address: jsonObj[i].address,
                city: jsonObj[i].city,
                state: jsonObj[i].state,
                zip: jsonObj[i].zip
            });

            // Agent.create({
            //     agent: jsonObj[i].agent
            // })

            UserAccount.create({
                account_name: jsonObj[i].account_name,
                account_type: jsonObj[i].account_type
            })

            Policy.create({
                policy_mode: jsonObj[i].policy_mode,
                policy_number: jsonObj[i].policy_number,
                policy_type: jsonObj[i].policy_type,
                policy_start_date: jsonObj[i].policy_start_date,
                policy_end_date: jsonObj[i].policy_end_date,
            })

        }
        res.redirect('/fileUpload');
    })
})

app.listen(port, () => {
    console.log(`Started server at at ${port}`);
})

