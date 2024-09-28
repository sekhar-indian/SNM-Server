const express=require('express');
const app=express();
const sequelize=require('sequelize');

const cors=require('cors');

const admin=require('./routers/admin');
const user=require('./routers/user');

app.use(cors());

app.use(admin);
app.use(user);

app.listen(3000);