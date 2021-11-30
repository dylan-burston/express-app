module.exports = {
    index,
    show,
    addForm,
    createSkill,
    editForm,
    delete: deleteSkill,
    update: updateSkill,
}

let Skill = require('../models/skill');

function index(req, res, next) {
    let skills = Skill.getAll()
    res.render('skills', { skills });
}

function show(req, res, next) {
    let skill = Skill.getOne(req.params.id);
    res.render('skill', { skill })
}

function addForm(req, res, next) {
    res.render('addForm');
}

function createSkill(req, res, next) {
    let addedSkill = req.body;
    addedSkill.id =  Math.floor(Math.random()*10000000);
    Skill.getAll().push(addedSkill);
    res.redirect('/skills');
}

function editForm(req, res, next) {
    let skill = Skill.getOne(req.params.id);
    res.render('editForm', { skill });
}

function deleteSkill(req, res, next) {
    Skill.deleteSkill(req.params.id);
    res.redirect('/skills');
}

function editForm(req, res, next) {
    let skill = Skill.getOne(req.params.id);
    res.render('editForm', { skill });
}

function updateSkill(req, res, next) {
    let skill = Skill.getOne(req.params.id);
    skill.name = req.body.name;
    skill.experience = req.body.experience;
    res.redirect(`/skills/${skill.id}`);
}