const express = require('express');
const bodyparser = require('body-parser');
const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017/worshipdb');
const path = require('path');
const app = express();
const AdminRouter = require('./routes/admin.routes');
const categoryRouter = require('./routes/category.routes.js');
const productRouter = require('./routes/product.routes');
const userRouter = require('./routes/user.routes');
const pristRouter = require('./routes/prist.router');
app.use(express.static(path.join(__dirname,'public')));


app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());

app.use("/api/admin",AdminRouter);
app.use("/api/category",categoryRouter);
app.use("/api/product",productRouter);
app.use("/api/user",userRouter);
app.use("/api/prist",pristRouter);


app.listen(3000,()=>{
    console.log("Server Is Running...");
});