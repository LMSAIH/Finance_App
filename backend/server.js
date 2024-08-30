require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const FinanceRoutes = require('./routes/financeRoutes');

app.use(express.json());

app.use((req,res,next) => {
    console.log(req.path, req.method);
    next();
});

app.use("/api/finance", FinanceRoutes);

mongoose.connect(process.env.DB_URI)
.then(() => {
    console.log('Connected to the database');
    app.listen(process.env.PORT, () => {
        console.log(`Listening on port ${process.env.PORT}`);
    });
})
.catch((err) => {console.log(err)});


app.get('/api/finance', (req,res) => {
    res.send("Hello");
});

