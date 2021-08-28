// to import Employee constructor
const Employee1 = require('./Employee1');

class Engineer1 extends Employee1 {
    constructor (name, id, email, github) {
        super (name, id, email);
        this.github = github;
    }

    getGithub () {
        return this.github;
    }

    getRole () {
        return "Engineer1";
    }

}

module.exports = Engineer1;

