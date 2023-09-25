export default function createIteratorObject(report) {
  const departments = Object.values(report.allEmployees);

  let currentDepartmentIndex = 0;
  let currentEmployeeIndex = 0;

  return {
    next: function () {
      if (currentDepartmentIndex < departments.length) {
        const currentDepartment = departments[currentDepartmentIndex];
        if (currentEmployeeIndex < currentDepartment.length) {
          const employee = currentDepartment[currentEmployeeIndex];
          currentEmployeeIndex++;
          return { value: employee, done: false };
        } else {
          currentDepartmentIndex++;
          currentEmployeeIndex = 0;
          return this.next(); // Continue to the next department
        }
      } else {
        return { done: true };
      }
    },
  };
}
