//to import Empoyee constructor

const Employee1 = require('./Employee1');

class Manager1 extends Employee1 {
    constructor (name, id, email, officeNumber) {
        super (name, id, email);
        this.officeNumber = officeNumber;
    }

    getRole () {
        return 'Manager1';
    }
}


module.exports = Manager1;