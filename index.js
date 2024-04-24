const school = {
    name: "XYZ School",
    establishYear: 1990,
    departments: {
      math: { teachers: 5, students: 150 },
      science: { teachers: 4, students: 120 },
      history: { teachers: 3, students: 100 },
      english: { teachers: 4, students: 130 },
    },
    courses: ["math", "science", "history", "english"],
    students: [
      {
        name: "Alice",
        className: "Grade 5",
        scores: { math: 95, science: 88, history: 85, english: 92 },
      },
      {
        name: "Bob",
        className: "Grade 4",
        scores: { math: 80, science: 78, history: 92, english: 85 },
      },
      {
        name: "Charlie",
        className: "Grade 5",
        scores: { math: 88, science: 90, history: 78, english: 88 },
      },
      {
        name: "Diana",
        className: "Grade 4",
        scores: { math: 92, science: 85, history: 88, english: 90 },
      },
    ],
  };
  


  function countCalculation(departments){
    let mathTeachersCount  = math.teachers
    let historyTeachersCount = history.teachers
    let mathStudentsCount =  math.students
    let historyStudentsCount = history.students

    let obj = {
      mathTeachersCount ,
      historyTeachersCount,
      mathStudentsCount,
      historyStudentsCount
    }
    
    return obj

  }
  console.log(countCalculation(school))


  // -----------------------------------------------

function findTopStudent(obj , courses ){
    let max = obj.students[0]
    obj.students.forEach((el , i)=>{
        if(el.scores.math > max.scores.math){
          max = el
        }
    })
    return max
}

console.log(findTopStudent(school , 'math'))

// --------


function addNewDept(obj , newDept){
  obj.departments = {...obj , newDept}
   return obj
}

console.log(addNewDept(school , {arts : {teachers : 5 , students:50}}))

// --------------


function highestStudentCountDepartment(obj){
 console.log(obj)
}
console.log(highestStudentCountDepartment(school));


// -----------------

function generateGreeting(name, lang){

  lang = "spanish";
   if(lang == "english"){
       return(`Hello , ${name}`)
   }else if(lang === "spanish"){
      return (`Holo , ${name}`)
   }else if(lang === "french"){
       return (`Namste , ${name}`)
   }
}

console.log(generateGreeting("Akash"))






 
