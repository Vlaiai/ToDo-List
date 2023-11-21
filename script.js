import refs from "./refs.js"
const {bar, text, button,input,inptbutton}= refs;

const todoLIst = [];   

    let total = Number(localStorage.getItem("total")) || 0;
    const goalHours = 250;
    
   

   

    text.textContent = `${total} / ${goalHours}`;


    button.addEventListener('click',addProgress)

    bar.style.width = `${localStorage.getItem('percent') || 0}%`;
    
    function addProgress(e){
        total +=1;
        localStorage.setItem('total',total)
        updateProgress(bar,total) 
    }

    function updateProgress(progressBar, value){
        value = Math.round(value)
        let progress = (value / goalHours) * 100;
        localStorage.setItem('percent',progress);
        
        progressBar.style.width = `${progress}%`;

        text.textContent = `${value} / ${goalHours}`;
    }

     


    inptbutton.addEventListener('click',addTodo)

    function addTodo(){
      const inputText =  input.value;
      todoLIst.push(inputText);
      console.log(todoLIst);
      input.value=''
    }