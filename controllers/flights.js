const FlightModel = require('../models/flight');

// 

 module.exports = {
    index,
    new: newFlights,
    create
    
}

function index(req, res) {
 // const flights =  FlightModel.find({});
 //  console.log(flights)
  res.render('flights/index.ejs', {title: 'All Flights', flights: FlightModel.getAll()});
}

function newFlights(req, res) {
  // We'll want to be able to render an  
  // errorMsg if the create action fails
  res.render('flights/new', { title: 'Add Flights', errorMsg: '' });
}

async function create(req, res) {

  console.log(req.body, "<_ contents of our form");
 


    await FlightModel.create(req.body);// the await is waiting for the FlightModel to go to MongoDB ATLAS (our db) a
    //and put the contents form in the db, and come to the express server

    // if you want to see what you put in the database on your server
    

    // Always redirect after CUDing data
    // We'll refactor to redirect to the movies index after we implement it
    res.redirect('/flights');  
  }// catch (err) {
    // Typically some sort of validation error
  // console.log(err);
    //res.render('flights/new', { errorMsg: err.message });
  //}
  
   