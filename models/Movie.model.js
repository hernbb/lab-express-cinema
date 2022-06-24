const mongoose = require("mongoose");

// aqui creamos el Schema
const moviesSchema = new mongoose.Schema({
  title: {
    type: String,
  },

  director: {
    type: String,
  },

  stars: {
    type: [String],
  },

  // como agregar arrays como propiedades.
  image: 
    {
      type: String,
    },
    description: {
        type: String
    },
    showtimes: {
     type: [String]
    }
  
});

// crear el Model
const Movie = mongoose.model("movie", moviesSchema);
// mongoose.model(nombreDelModelo, schemaDelModelo)
// "student" indica como se llamara nuestra colección => "students"

module.exports = Movie;