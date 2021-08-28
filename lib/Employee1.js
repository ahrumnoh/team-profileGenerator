//Parent class, employee starts

class Employee1 {
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email
    }

    
    getName () {
        return this.name;
    }

    getId() {
        return this.id;
    }


    getEmail () {
        return this.email;
    }

    getRole () {
        return 'Employee1';
    }
};

module.exports = Employee1;