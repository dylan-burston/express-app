module.exports = {
    getAll,
    getOne,
    deleteSkill,
}

let skills = [
    {id: 1, name: 'HTML', experience: '1'},
    {id: 2, name: 'JS', experience: '1'},
    {id: 3, name: 'CSS', experience: '1'}
]

function getAll() {
    return skills;
}

function getOne(id) {
    return skills.find(skill => skill.id === parseInt(id));
}

function deleteSkill(id) {
    skills = skills.filter(skill => skill.id !== parseInt(id));
}
