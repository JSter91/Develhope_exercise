function calculateSalary(role) {
  let salary;

  switch (role) {
    case "ceo":
      salary = 2200;
      break;
    case "manager":
    case "cto":
      salary = 1800;
      break;
    case "developer":
      salary = 1500;
      break;
    default:
      salary = 1000;
  }

  return salary;
}

const ceoSalary = calculateSalary("ceo");
const managerSalary = calculateSalary("manager");
const ctoSalary = calculateSalary("cto");
const developerSalary = calculateSalary("developer");
const otherSalary = calculateSalary("other");

console.log(ceoSalary);
console.log(managerSalary);
console.log(ctoSalary);
console.log(developerSalary);
console.log(otherSalary);
