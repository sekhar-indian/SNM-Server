const express=require('express');
const router=express.Router();
const authentication=require('../controllers/authentication')

router.post('/user-login',authentication.userLogin);
router.post('/user-register',authentication.userRegister);

router.get('/products',);
router.get('/products:filter',)