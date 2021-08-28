// to import Employee constructor

const Employee1 = require('./Employee1');

class Intern1 extends Employee1 {
    constructor (name, id, email, university) {
        
        super (name, id, email);
        this.university = university; //school to university
    }

    getUniversity () {
        return this.university; //school to university
    }


    getRole () {
        return 'Intern1';
    }
}

module.exports = Intern1;