//var express = require('express'),
//    app = express(),
//    port,
//    helper = require('./helper.js');
//
//    const cors = require("cors");
//
//    var corsOptions = {
//      origin: "http://localhost:58225"
//    };
//    app.use(cors(corsOptions));
//
//    // parse requests of content-type - application/json
//    app.use(express.json());
//    // parse requests of content-type - application/x-www-form-urlencoded
//    app.use(express.urlencoded({ extended: true }));
//
//
////app.set('json spaces', 2);
//
//
//function unhandledRequest(req, response, next){
//  response.status(400)
//    .json({ error: "unhandled request"})
//    .end();
//}
//
//
//function requestHandlerPopularMovies(request, response, next) {
//  
//  var outboundPayload = {
//        message: "pouplar",
//        time: (new Date()).toISOString(),
//        value: helper.getPopularMovies()
//      };
//      console.dir(outboundPayload)
//    response.status(200).json(outboundPayload)
//}
//
//function requestHandlerDetail(request, response, next) {
//
//  
//
//  var outboundPayload = {
//        message: "detail",
//        time: (new Date()).toISOString(),
//        value: helper.getMovieDetail()
//      };
//  response.status(200)
//    .json(outboundPayload)
//    .end();
//}
//
//
//
//app.get('/', requestHandlerPopularMovies);
//
//app.get('/detail', requestHandlerDetail);
//
//
//app.use(unhandledRequest);
//
//
//port = process.env.PORT || 8080;
//app.listen(port, function() {
//  console.log('Echo Listening on ' + port);
//});


var express = require('express'),
    app = express(),
    port,
    helper = require('./helper.js');

const { json } = require('body-parser');
const cors = require("cors");

var corsOptions = {
  origin: "http://localhost:58225"
};

app.use(cors(corsOptions));



function unhandledRequest(req, response, next){
  response.status(400)
    .json({ error: "unhandled request"})
    .end();
}


app.get('/movies', async (req, res, next)=>{
  try {
      const {page} = req.query;
      const data = await helper.fetchMovies(page);

      return res.status(200).json({
        status:200,
        message: `${data.length} movies found`, 
        data
      })
    } catch (err) {
      return next(err);
    }
})


app.get('/movie_detail', async (req, res, next)=>{
  try {
      const id = req.query.id;
      console.log("REQUEST !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
      console.dir(req.query);
      console.log("END REQUESTS !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
      const data = await helper.fetchMovieDetail(id);

      return res.status(200).json({
        status:200,
        message:'movie found!!!', 
        data
      })
    } catch (err) {
      return next(err);
    }
})

app.use(unhandledRequest);


port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log('MovieDB server listening on ' + port);
});