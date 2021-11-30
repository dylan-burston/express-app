var express = require('express');
var router = express.Router();
let skillsCtrl = require('../controllers/skills');

/* GET home page. */
router.get('/', skillsCtrl.index);
router.get('/new', skillsCtrl.addForm);
router.post('/', skillsCtrl.addSkill);
router.get('/:id/edit', skillsCtrl.editForm);
router.put('/:id', skillsCtrl.update);
router.delete('/:id', skillsCtrl.delete);
router.get('/:id', skillsCtrl.show);

module.exports = router;
