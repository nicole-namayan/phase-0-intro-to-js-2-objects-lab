function updateEmployeeWithKeyAndValue(employee, key, value) {
  return {
    ...employee,
    [key]: value,
  };
}
const employee = {
  name: 'nicole namayan',
  age: 20,
  jobTitle: 'Software Engineer',
};

const updatedEmployee = updateEmployeeWithKeyAndValue(employee, 'age', 21);

console.log(updatedEmployee)


function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee[key] = value;
  return employee;
}

function deleteFromEmployeeByKey(employee, key) {
  const newEmployee = { ...employee };
  delete newEmployee[key];
  return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
  delete employee[key];
  return employee;
}

