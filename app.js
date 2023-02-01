const express = require("express");
const app = express();

app.get("/date", (request, response) => {
  let date = new date();
  response.send(
    `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()} `
  );
});

module.exports = app;

//DD - MM - YYYY;
