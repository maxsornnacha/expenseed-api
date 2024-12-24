const express = require("express")
const { configureMiddleware } = require("./middlewares/middlewares"); // Adjust the path as necessary
const app = express();
const path = require("path")
require('dotenv').config();
configureMiddleware(app);

//import routers
const usersRouter = require("./routes/users.router");


//use routers
app.use("/api/users", usersRouter);

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});  

// Start the server
const port = process.env.PORT || 3006;
app.listen(port, () => {
  console.log(`Server is running in ${process.env.NODE_ENV} mode on port: ${port}`);
  console.log(`Access origin : *`)
});

