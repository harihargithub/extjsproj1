Ext.define('MyApp.view.employee.EmployeeView', {
  xtype: 'employeeview',
  cls: 'employeeview',
  controller: { type: 'employeeviewcontroller' },
  viewModel: { type: 'employeeviewmodel' },
  requires: [],
  extend: 'Ext.panel.Panel',
  layout: 'fit',
  // html: '<div style="font-size:24px;">employeeview</div>'

  items: [
    {
      xtype: 'grid',
      title: 'Employee List',
      store: {
        type: 'employeestore',
      },
      columns: [
        { text: 'ID', dataIndex: 'id', flex: 1 },
        { text: 'Name', dataIndex: 'name', flex: 2 },
        { text: 'Position', dataIndex: 'position', flex: 2 },
        { text: 'Department', dataIndex: 'department', flex: 2 },
      ],
    },
  ],
});
