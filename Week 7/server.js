// 1. setup a node app with command: npm init
// 2. install express with command: npm install express
// 3. create a file named server.js and add the following code

const express = require("express");
const app = express();
const port = 3000;

// https://www.npmjs.com/package/express-handlebars is a Handlebars view engine for Express which provides a way to render dynamic HTML pages using Handlebars templates. It allows you to separate your HTML structure from your application logic, making it easier to manage and maintain your views. With express-handlebars, you can create reusable templates, partials, and layouts, which can help you build more complex and dynamic web applications efficiently.
const hbs = require("express-handlebars");

app.engine("handlebars", hbs.engine());
app.set("view engine", "handlebars");
//app.set("views", path.join(__dirname, "views"));
// the path module is used to work with file and directory paths
const path = require("path");


// set up 
// getting-started.js
const mongoose = require('mongoose');

const destinationSchema = new mongoose.Schema({
  page: String,
  name: String,
  description: String,
  image: String
});
const Destination = mongoose.model('destinations', destinationSchema);

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/travelsites');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
main().catch(err => console.log(err));

// Serving static files
// express.static is a built-in middleware function in Express. It serves static files and is based on serve-static.
// The function takes a root directory from which to serve static assets. In this case, we are serving files from the "static" directory.
// review middleware in express under week 7 in black board
app.use(express.static(path.join(__dirname, "static")));

app.use(express.urlencoded({extended: true}));


//data


// generate routes
app.get("/", (req, res) => {
  // homepage
  res.render("home",{title : "welcome to travel site"})
  ;
});
// generate route 
app.post("/destinations", async(req,res)=>{

  const{page,name,description,image} = req.body;
  console.log(req.body)
  const newDestination =  Destination({
    page,
    name,
    description,
    image
  });
  await newDestination.save();

  res.send("Destination added successfully");

});
app.get ("/destinations", async(req,res)=>{
  const destinations = await Destination.find().lean();
  res.render ("destinations", {"destinations": destinations, "title": "Destinations"});
});

// start the server
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
