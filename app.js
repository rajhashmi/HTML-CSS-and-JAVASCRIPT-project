const num1 = Math.floor(Math.random() *9)+2
// console.log(num1);

const num2 = Math.floor(Math.random()*9)+2;
// console.log(num2);


const questionEl = document.getElementById("question");
const inputEl = document.getElementById("input");
const formEl = document.getElementById("form");
const scoreEl = document.getElementById("score");



let score =JSON.parse(localStorage.getItem("score"));

if(!score){
    score = 0;
}

scoreEl.innerText = `Score: ${score}`

questionEl.textContent = `What is ${num1} Multiply by ${num2}`


const correctAns = num1 * num2;

formEl.addEventListener("submit", ()=>{
    const userAns = +inputEl.value 
    if(userAns === correctAns){
        score++;
        updateLocalStorage()
    }else{
        score--;
        updateLocalStorage()
    }
})


  function updateLocalStorage(){
    localStorage.setItem("score", JSON.stringify(score))
  }


