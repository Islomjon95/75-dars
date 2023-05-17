//Default params

// function coder (name="Shaxnoza"){
//     console.log(`${name} the best coder`)

// }

// coder("Odina")

// function addNumber (numb1=0, numb2=0){
//     console.log(numb1+numb2)
// }

// addNumber()
//________________________________
// "for of" array of students
// const students = [
//     {name: "Javohir", age: 16},
//     {name: "Aziz", age: 17},
//     {name: "Behruz", age: 16}
// ]

// for( let student of students){
//     console.log(`${student.name} yoshi ${student.age} da`)
// }



// ________________________________________
//Rest oprator
// function number (...num){
//     for(let numb of num){
//         // numb<30 ? console.log(numb) : console.log() trenary

//         if(numb<30){
//             console.log(numb)
//         }
//     }
// }

// number(45, 54, 21, 12)


// ________________________________________
// includes

// const arr = [21, 45, 897, 54, 98, 100, 12]

// console.log(arr.includes(100))

// const group8 = ["Aziz", "Bahodir", "Jahongir", "Farrux", "Behruz", "Shaxnoza", "Odina", "Diyorbek", "Javohir"]

// const name = "Odina"

// group8.includes(name) ? console.log(`${name} bugun darsga qatnashdi`) : console.log(`${name} bugun darsga qatnashmadi`)
// ________________________________________
// Class constructor

// class car {
//     constructor(model, year){
//         this.model = model,
//         this.year = year
//     }
// }

// const car1 = {
//     model: "Nexia 3",
//     year: 2020
// }

// const car2 = new car ("Captiva", 2017)

// console.log(car1, car2)

// __________________________________________

// Chart.JS

// setInterval(()=>{

//     let a = Math.floor(Math.random()*100)
//     let b = Math.floor(Math.random()*100)
//     let c = Math.floor(Math.random()*100)
//     let d = Math.floor(Math.random()*100)
//     let f = Math.floor(Math.random()*100)

//     numb(a,b,c,d,f)
// },1000)





const ctx = document.getElementById('myChart');

     play = setInterval(()=>{
        let a = Math.floor(Math.random()*100)
        let b = Math.floor(Math.random()*100)
        let c = Math.floor(Math.random()*100)
        let d = Math.floor(Math.random()*100)
        let f = Math.floor(Math.random()*100)
    
        arr = []
        arr.push(a,b,c,d,f)
        return arr
        
    },1000)





new Chart(ctx, {
    
  type: 'polarArea',
  data: {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
      label: '# of Votes',
      data: [...play],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});






