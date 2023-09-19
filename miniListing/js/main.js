let btn = document.querySelector('button');
let getInputBox = document.querySelector('input');
let getListUl = document.querySelector('.list-container');
// let AddTask =  function () {
//     if (getInputBox.value === ""){
//         alert('Please write something');
//     }
// }

// btn.onclick = AddTask;

btn.addEventListener("click", function(){
    if (getInputBox.value === ""){
         alert('Please write something');
         setTask();
    }else{
        let li = document.createElement('li') 
        li.innerHTML = getInputBox.value;
        let span = document.createElement('span');
        span.innerHTML = '\u0078';
        li.appendChild(span);
        getListUl.appendChild(li);
        setTask();
    }
    getInputBox.value = '';
});


getListUl.addEventListener("click", function(e){
    if (e.target.tagName === "LI"){
        e.target.classList.toggle('checked');
        setTask();
    }else if (e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        setTask();
    }

});


let setTask =  function(){
    localStorage.setItem('data', getListUl.innerHTML);
}

let getTask = function(){
    getListUl.innerHTML = localStorage.getItem('data');
}
getTask();


