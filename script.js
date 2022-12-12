

function DataTable(config, data) {
  let tableHtml = `<table>
   <thead>
       <tr>
           <th >№</th>
           <th>${config.columns[0].title}</th>
           <th>${config.columns[1].title}</th>
           <th>${config.columns[2].title}</th>
       </tr>
   </thead>
   <tbody>`;

  for (let i = 0; i < data.length; i++) {
    tableHtml += `<tr>
        <td>${i + 1}</td>
         <td>${data[i].name}</td>
         <td>${data[i].surname}</td>
        <td>${data[i].age}</td>
     </tr>`;
  }

  tableHtml += `
   </tbody>
 </table>`;

  document.getElementById("usersTable").innerHTML = tableHtml;
  let a = document.querySelectorAll("td");
  for (let i = 0; i < a.length; i++) {
    a[i].style.outline = "2px solid grey";
    a[i].style.padding = "8px";
  }
}

const config1 = {
  parent: "#usersTable",
  columns: [
    { title: "Имя", value: "name" },
    { title: "Фамилия", value: "surname" },
    { title: "Возраст", value: "age" },
  ],
};

const users = [
  { id: 30050, name: "Вася", surname: "Петров", age: 12 },
  { id: 30051, name: "Вася", surname: "Васечкин", age: 15 },
];

DataTable(config1, users);







var table = new Tabulator("#example-table", {
  data: users,
  layout:"fitColumns",
  columns: [
    { title: "Name", field: "name"},
    { title: "Age", field: "age"},
    {title: "Surname", field: "surname"}],
});

