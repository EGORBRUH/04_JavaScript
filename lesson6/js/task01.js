'use strict'



const allStudents = ['Иванов', 'Петров', "Сидоров", "Кузнецов", "Смиронов", "Попов", "Соколов"];
const failedStudents = ['Сидоров', "Смирнов", "Попов"];


const stu = (allStudents, failedStudents) => {
  const tryStudents = allStudents.filter((stu) => !failedStudents.includes(stu));
  return tryStudents;
}

console.log(stu(allStudents, failedStudents));
