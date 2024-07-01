const express = require("express");
const app = express();
const port = 3000;

// ages/sort-ascending
let ages = [18, 22, 25, 27, 30];
function sortAgesAscending(age1, age2) {
  return age1 - age2;
}
app.get("/ages/sort-ascending", (req, res) => {
  let ageCopy = ages.slice();
  ageCopy.sort(sortAgesAscending);
  res.json(ageCopy);
});

// ages/sort-descending
function sortAgesDescending(age1, age2) {
  return age2 - age1;
}

app.get("/ages/sort-descending", (req, res) => {
  let ageCopy = ages.slice();
  ageCopy.sort(sortAgesDescending);
  res.json(ageCopy);
});

// students/sort-by-marks-descending
let students = [
  { name: "Raj", marks: 80, rollNo: 101 },
  { name: "Vijay", marks: 95, rollNo: 102 },
  { name: "Ajay", marks: 60, rollNo: 103 },
  { name: "Ram", marks: 70, rollNo: 104 },
  { name: "Rahul", marks: 85, rollNo: 105 },
];

function sortStudentsByMarksDescending(student1, student2) {
  return student2.marks - student1.marks;
}

app.get("/students/sort-by-marks-descending", (req, res) => {
  let sortedStudents = students.slice();
  sortedStudents.sort(sortStudentsByMarksDescending);
  res.json(sortedStudents);
});

// cars/sort-by-mileage-descending
let cars = [
  { make: "Ford", model: "Fiesta", mileage: 23000 },
  { make: "Honda", model: "Civic", mileage: 42000 },
  { make: "Toyota", model: "Corolla", mileage: 35000 },
  { make: "Ford", model: "Focus", mileage: 18000 },
  { make: "Honda", model: "Accord", mileage: 50000 },
];
function sortCarsByMileageDescending(car1, car2) {
  return car2.mileage - car1.mileage;
}
app.get("/cars/sort-by-mileage-descending", (req, res) => {
  let sortedCars = cars.slice();
  sortedCars.sort(sortCarsByMileageDescending);
  res.json(sortedCars);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
