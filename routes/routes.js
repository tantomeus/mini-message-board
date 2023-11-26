const {Router} = require('express');
const router = new Router();
const {getAllHokku, addHokku} = require('../controllers/controllers');

router.get('/', getAllHokku);
router.post('/', addHokku);

module.exports = router;