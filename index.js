// Write your solution in this file!
const employee = {};

function beforeEach(employee) {
    for (const key in employee) {
      delete employee[key];
    }
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    var newemp = employee;
    newemp = { 
        "name": "Sam",
        "streetAddress": "11 Broadway",
    }
    return newemp;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key) {
    var employee = {};
    employee = { 
        "name": "Sam",
        "streetAddress": "11 Broadway",
    }
    var anotheremp = employee;
    delete anotheremp[key];
    return anotheremp;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    employee.key = undefined;
    return employee;
}