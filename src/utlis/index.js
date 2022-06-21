const fs = require("fs");
const { builtinModules } = require("module");

const addMovie = (movieObj) => {
  try {
    const stringObj = JSON.stringify(movieObj);
    fs.writeFileSync("./storage.json", stringObj);
  } catch (error) {
    console.log(error);
  }
};

const listMovies = () => {
  try {
    const movieList = fs.readFileSync("./storage.json");
    console.timeLog(movieList);
  } catch (error) {
    console.log(error);
  }
};

modules.exports = { addMovie, listMovies };
