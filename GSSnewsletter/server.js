const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https =require("https");

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));


app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
})

app.post("/", function(req,res){
const firstName=req.body.fName;
const lastName=req.body.lName;
const email = req.body.email;

// This is the information required by mailchimp API documentation

var data = {
    members:[
        {
            email_address:email,
            status:"subscribed",
            merge_fields:{
                FNAME:firstName,
                LNAME:lastName,
            }
        }
    ]
};

// This turns the data variable into a JSON string.
const jsonData = JSON.stringify(data);

const url = 'https://us10.api.mailchimp.com/3.0/lists/2997ca06f4'

// This is essentially the POST method as well as Authentication.
const options = {
    method:"POST",
    auth: "hollyIles:01d0bf2d7b62f33d134a397afc9c789b-us10"

}
// This basically requests the data back from Mailchimp and tells it where to store it.
const request = https.request(url, options, function(response){
response.on("data", function(data){
    
    console.log(JSON.parse(data));

    })
 })

request.write(jsonData);
request.end;
})



app.listen(3000, function(){ 
    console.log("Server started on port 3000"); 
})

// api Key 
// 01d0bf2d7b62f33d134a397afc9c789b-us10

// audience ID
// 2997ca06f4