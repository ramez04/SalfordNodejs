const express = require('express')
const { register, login ,update , loginWithId} = require('../controllers/UserController')

const router = express.Router(

);
router.post('/register', register);
router.get('/login', login);
router.put('/update', update);
router.get('/loginWithId' , loginWithId);


module.exports = router;


//{
//     "name" : "ramiz",
//     "email": "ramizbaw@gmail.com",
//     "password": "password123"
// }