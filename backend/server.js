require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const FinanceRoutes = require('./routes/financeRoutes');
const UserRoutes = require('./routes/userRoutes');

//Use the express json to parse the json
app.use(express.json());

//This logs the used routes, helpful to debug
app.use((req,res,next) => {
    console.log(req.path, req.method);
    next();
});

//Use the routes
app.use("/api/finance", FinanceRoutes);
app.use("/api/user", UserRoutes);

//connects to db 
mongoose.connect(process.env.DB_URI)
.then(() => {
    console.log('Connected to the database');
    app.listen(process.env.PORT, () => {
        console.log(`Listening on port ${process.env.PORT}`);
    });
})
.catch((err) => {console.log(err)});


