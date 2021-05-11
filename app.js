// important, Angula Yu's Udemy course taught us to use body-parser. however, at the moment, express.js is at 4.17 version, body-parser has been deprecated since 4.16 version!!! therefore, the tutorial doesn't work, and it's annoying to try to update the process by myself. therefore, I had to install 4.15 version in order to smoothly follow the tutorial
const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https");

const app = express();

app.use(express.static(__dirname + "/public")); //notice here's different from Angela Yu's tutorial
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/signup.html");
});

// in order to fire a post request to happen, we first have to specify the method as POST and the action="/" in the <form> in html
app.post("/", function (req, res) {
  const firstName = req.body.fName;
  const lastName = req.body.lName;
  const email = req.body.email;

  const data = {
    // https://mailchimp.com/developer/marketing/api/lists/batch-subscribe-or-unsubscribe/
    //Body Parameters

    members: [
      {
        email_address: email,
        status: "subscribed",
        // https://us4.admin.mailchimp.com/lists/settings/merge-tags?id=367877
        merge_fields: {
          FNAME: firstName,
          LNAME: lastName,
        },
      },
    ],
  };
  //turn the const data into a flat pack JSON

  const jsonData = JSON.stringify(data); //this is what we'll send to mailchimp
  // make request

  // https://nodejs.org/api/https.html#https_https_request_url_options_callback
  // https.request(url[, options][, callback])
  //the callback function(response) which is going to give us a response from the mailchimp server
  const url = "https://us4.api.mailchimp.com/3.0/lists/4dc8cb4e30";
  //create options, method option is the most important

  /* check https://mailchimp.com/developer/marketing/docs/fundamentals/
  HTTP Basic Authentication:

  Basic HTTP Authentication
  BASH
  curl --request GET \
  --url 'https://<dc>.api.mailchimp.com/3.0/' \
  --user 'anystring:TOKEN
  
  */
  const options = {
    method: "POST",
    auth: "plw01:25b0580639f6f8b89e5fc0abab90e7fc-us4",
  };

  const request = https.request(url, options, function (response) {
    if (response.statusCode === 200) {
      res.sendFile(__dirname + "/success.html");
    } else {
      res.sendFile(__dirname + "/failure.html");
    }
    // to beautify the page, go to https://getbootstrap.com/docs/4.4/components/jumbotron/

    response.on("data", function (data) {
      console.log(JSON.parse(data));
    });
  });

  request.write(jsonData); //pass the jsonData to the mailchimp server
  request.end(); //to specify that we're done with the request
});

// add a "/failure" route so the button works
app.post("/failure", function (req, res) {
  res.redirect("/");
});

// Heroku step 1. install via terminal
// Heroku step 2. when using Heroku, change the port 4000 to process.env.PORT || 3000
// Heroku step 3. Define a Procfile
app.listen(process.env.PORT || 4000, function () {
  console.log("Newsletter server is running on localhost 4000");
});

// Mailchimp API key:
// 25b0580639f6f8b89e5fc0abab90e7fc-us4

// get the unique list ID
// from https://us4.admin.mailchimp.com/lists/settings?id=367877
//4dc8cb4e30

