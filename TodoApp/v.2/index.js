// const item = document.querySelector('.actions');
const add = document.getElementById("add");


add.addEventListener('click', () => {
    let text = document.getElementById("input");

    if(text.value.length == 0){
        alert("you cant fill out a empty note");
    }
    else if(text.value.length>0){
    let template = 
    `<div class="item">
      <span class="theTodo">${text.value}</span>
      <div class="actions">
       <span onclick="handle(event)" class="delete"><i class="fa fa-remove"></i></span>
       <span onclick="handle(event)" class="paused"><i class="fa fa-pause"></i></span>
       <span onclick="handle(event)" class="done"><i class="fa fa-check"></i></span>
      </div>
     </div>`;
     let todos = document.getElementById('todos');
     console.log(todos);
     todos.parentElement.insertAdjacentHTML('afterbegin',template);
    }
    console.log(text.value);
    
})


function template (Thetext,state){
    if(state === 'Completed'){
    return `<div class="Complete"><span class="theTodo">${Thetext}</span></div>`;
    }
    else if (state === 'Paused'){
        return `<div class="item">
        <span class="theTodo">${Thetext}</span>
        <div class="actions">
         <span onclick="handle(event)" class="delete"><i class="fa fa-remove"></i></span>
         <span onclick="handle(event)" class="done"><i class="fa fa-check"></i></span>
        </div>
       </div>`;
    }  
}

function handle(event){
    const text = event.target.parentElement.parentElement.parentElement.children[0].innerText;
    if(event.target.className == "fa fa-check"){
        console.log("Completed")
        event.target.parentElement.parentElement.parentElement.parentElement.id;
        const todo = template(text, "Completed");
        document.getElementById('Completed').insertAdjacentHTML('beforeend', todo);
        event.target.parentElement.parentElement.parentElement.remove();
    }
    if(event.target.className == "fa fa-remove"){
       console.log("Delete"); 
       event.target.parentElement.parentElement.parentElement.parentElement.id;
       event.target.parentElement.parentElement.parentElement.remove();
    }
    if(event.target.className == "fa fa-pause"){
       console.log("Pause");
       event.target.parentElement.parentElement.parentElement.parentElement.id;
       const todo = template(text,"Paused");
       document.getElementById('DoLater').insertAdjacentHTML('beforeend', todo);
       event.target.parentElement.parentElement.parentElement.remove();
    }
    
}
