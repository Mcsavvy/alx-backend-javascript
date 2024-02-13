interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const s1 : Student = {
    firstName: "John",
    lastName: 'Doe',
    age: 15,
    location: 'San Francisco'
}
const s2 : Student = {
    firstName: "Jane",
    lastName: 'Mary',
    age: 17,
    location: 'Columbia'
}
const studentList : Student[] = [s1, s2]

const table = document.createElement('table')
const tablebody = document.createElement('tbody')
studentList.forEach((student) => {
  const row = document.createElement("tr");
  const firstNameCell = document.createElement("td");
  const locationCell = document.createElement("td");

  firstNameCell.textContent = student.firstName;
  locationCell.textContent = student.location;

  row.appendChild(firstNameCell);
  row.appendChild(locationCell);

  tablebody.appendChild(row);
});
table.append(tablebody)
document.body.append(table)
