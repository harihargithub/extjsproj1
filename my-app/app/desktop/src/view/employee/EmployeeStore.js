Ext.define('MyApp.store.EmployeeStore', {
  extend: 'Ext.data.Store',
  alias: 'store.employeestore',
  model: 'MyApp.model.EmployeeModel',
  data: [
    { id: 1, name: 'John Doe', position: 'Developer', department: 'IT' },
    { id: 2, name: 'Jane Smith', position: 'Manager', department: 'HR' },
    { id: 3, name: 'Sam Johnson', position: 'Analyst', department: 'Finance' },
  ],
});
