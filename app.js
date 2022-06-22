const express = require("express");
const morgan = require("morgan");
const app = express();
const giftExchange = require("./routes/gift-exchange");
const errors = require('./utils/errors')

app.use(express.json());
app.use(morgan("tiny"));

app.post("/", (req, res) => {
  res.end();
});

app.get("/", (req, res) => {
  res.send({ ping: "pong" });
});

app.use("/gift-exchange", giftExchange);


app.use((req,res,next) => {
    return next(new errors.NotFoundError());
})

app.use((err,req,res,next) => {
    const status = err.status || 500;
    const message = err.message || "Something went wrong in the application"
    return res.status(err.status || 500).json({
        error: {message, status}
    });
})


module.exports = app;
