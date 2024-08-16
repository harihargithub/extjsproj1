// File: app/desktop/src/model/EmployeeModel.js
Ext.define('MyApp.model.EmployeeModel', {
  extend: 'Ext.data.Model',
  fields: [
    { name: 'id', type: 'int' },
    { name: 'name', type: 'string' },
    { name: 'position', type: 'string' },
    { name: 'department', type: 'string' },
  ],
});
