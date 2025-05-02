var express = require('express');
var router = express.Router();
const userController = require('../controllers/userController');
const upload = require("../middlewares/uploadFile")

/* GET users listing. */
// In your backend routes file (probably routes/userRoutes.js)
router.post('/addUserClient',userController.addUserClient);
router.post('/addUserAdmin',userController.addUserAdmin);
router.get('/getAllUsers',userController.getAllUsers);
router.get('/getUsersById/:id',userController.getUsersById);
router.delete('/deleteUserById/:id',userController.deleteUserById);
router.put('/updateuserById/:id',userController.updateuserById);

router.get('/getAllClient',userController.getAllClient);
router.get('/getAllAdmin',userController.getAllAdmin);



router.get('/getAllUsersSortByAge',userController.getAllUsersSortByAge);


router.post('/addUserClientWithImg',upload.single("user_image"),userController.addUserClientWithImg);







module.exports = router;
