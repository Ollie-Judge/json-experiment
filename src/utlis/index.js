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
    const list = JSON.parse(movieList);
    console.log(list);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { addMovie, listMovies };
