export default function createReportObject(employeesList) {
  const getNumberOfDepartments = () => {
    return Object.keys(employeesList).length;
  };

  return {
    allEmployees: { ...employeesList },
    getNumberOfDepartments,
  };
}
