const inputbox =document.querySelector("#input-box");
const listconatiner = document.querySelector("#list-container");

function addTask(){
    if(inputbox.value === ""){
        alert("First add item");
    }
    else{
        let li = document.createElement('li');
        li.innerHTML = inputbox.value;
        listconatiner.appendChild(li);
        li.style.fontSize = "1.5rem";
        li.style.lineHeight = "19px"

        let span = document.createElement('span');
        span.innerHTML = '\u00d7'
        li.appendChild(span);
        span.style.marginLeft = "16rem";
        span.style.fontSize = "2rem";
        span.style.cursor = "pointer";
        span.style.color = "red";

    }
    inputbox.value = "";
    setdata();
}

document.querySelector('#button').addEventListener('click' , function(){
    addTask();
    
})

listconatiner.addEventListener('click' , function(e){
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked');
        setdata();
    }
    else if(e.target.tagName === 'SPAN'){
      e.target.parentElement.remove();
      setdata();

    }
})

function setdata(){
    localStorage.setItem('data',listconatiner.innerHTML);
}

function getdata(){
    listconatiner.innerHTML= localStorage.getItem('data');
}

getdata();