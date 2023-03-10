const Employee = require("./Employee");

// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
class Manager extends Employee {
    constructor(name,id,email,officeNumber) {
        super(name,id,email)
        this.name = name;
        this.id = id;
        this.email = email;
        this.officeNumber = officeNumber;
        this.getOfficeNumber = () => {
            return this.officeNumber;
        }
        this.getRole = () => {
            return "Manager";
        }
    }
}

module.exports = Manager;