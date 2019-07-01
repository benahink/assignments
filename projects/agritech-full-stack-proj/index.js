const express = require("express");
require("dotenv").config();
const app = express();
const morgan = require("morgan");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 2112;
const expressJwt = require("express-jwt");
const secret = process.env.SECRET;

app.use(morgan("dev"));
app.use(bodyParser.json());

mongoose.set('useCreateIndex', true);
mongoose.connect("mongodb://localhost:27017/agritech-server",
    { useNewUrlParser: true },
    (err) => {
        if (err) throw err;
        console.log("Connected to the database");
    }
);

app.use("/auth", require("./routes/auth"));
app.use("/api", expressJwt({secret: secret}));
app.use("/api/recipe", require("./routes/recipe"));

app.use((err, request, response, next) => {
    console.error(err);
    if(err.name === 'UnauthorizedError') {
        return response.status(err.status);
    }
    return response.send({ message: err.message });
});

app.listen(PORT, () => {
    console.log(`[+] Starting server on port ${PORT}`);
});
