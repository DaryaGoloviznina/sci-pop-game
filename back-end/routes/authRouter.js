const router = require('express').Router();
const { createUserAndSession, destroySession, checkUserAndCreateSession, checkAuth } = require('../controllers/authController');


router.post('/signup', createUserAndSession);
router.get('/out', destroySession);
router.post('/signin', checkUserAndCreateSession);
router.get('/isAuth', checkAuth);

module.exports = router;
