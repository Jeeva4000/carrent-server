// const express = require("express");
// const app = express();
// const cors = require('cors')

// // app.use(express.json());
// app.use(cors());

// const dbconnection = require('./db');

// //const PORT = process.env.PORT || 6000;
// app.use(express.json());

// app.use("/cars", require('./routes/carRoute'));
// app.use("/users", require('./routes/usersRoute'));
// app.use("/bookings", require('/routes/bookingRoute'))

// app.get("/", (req, res) => {
//     res.send("Hello😎😎");
// });

// app.listen(5000, () => console.log(`Server running on localhost:5000`));
const express = require("express");
const app = express();
const cors = require('cors');
const dotenv = require('dotenv')

dotenv.config()

app.use(cors());

const dbconnection = require('./db');

app.use(express.json());

app.use("/cars", require('./routes/carRoute'));
app.use("/users", require('./routes/usersRoute'));
app.use("/bookings", require('./routes/bookingRoute'));

app.get("/", (req, res) => {
    res.send("Hello😎😎");
});

app.listen(5000, () => console.log(`Server running on localhost:5000`));
