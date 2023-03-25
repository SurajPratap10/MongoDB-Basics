// Type  node .\index.js  in the terminal to run this in the MongoDB Compass

const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/sample").then(() => {
    console.log("Connected to MongoDB");

}).catch((errs) => {
    console.log("error");
})

// student is the SCHEMA here
const student = new mongoose.Schema({
    name:String,
    height:Number

});

const Student = new mongoose.model("Student", student);

const adder = async () => {

    //for adding in database

// const ss = await Student.create({
//     name:"Sam",
//     height:5
// });

    // for showing datat in database
    // const ss = await Student.find();


    // Conditional Operators 
// const ss = await Student.find({height:{$eq:6}});   // $ use hota and eq means equal
    const ss = await Student.find({height:{$gte:6}}); // gte means >=
    console.log(ss);

}

adder();

