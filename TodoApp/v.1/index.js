const add = document.querySelector('.add');
const input = document.querySelector('#inn');
const todoList = document.querySelector(".theTodo");
const todos = new Map();
let index = 0;

const template = (todo, state) => {
   if(state === 'new'){
    return `<li class="item ">
    ${todo}
    <div class="btns">
        <button class="done" onclick="actions(event,'checked')"><i class="fa fa-check" ></i></button>
        <button class="delete" onclick="actions(event,'delete')"><i class="fa fa-remove" ></i></button>
    </div>
</li>`
   }
   else if(state === 'completed'){
    return `<li class="item">${todo}</li>`;
   }
   else if(state === 'later'){
    return `<li class="item ">
    ${todo}
    <div class="btns">
        <button class="done"><i class="fa fa-check"></i></button>
        <button class="delete"><i class="fa fa-remove"></i></button>
    </div>
</li>`; 
   }
};

// const handle = (action, id) => {
//     if(action == "check"){
//     }
//     else if(action == "delete"){
//       console.log("remove btn");   
//         //     todos.delete(id)
//     //     for(obj of todos){
//     //         todoList.insertAdjacentHTML('beforeend',template(obj[1],obj[0],"new"));                       
//     //    }
//     }
// }

add.addEventListener('click', () => {
   console.log('btn clicked');
    if(input.value.length<=0){
        alert("You have to write something")
    } 
    else if (input.value.length>0){
        todos.set(index,input.value);
        index++;
        todoList.insertAdjacentHTML('beforeend',template(input.value,'new'));
    } 

    // listTodos();
});

function actions(event, action){
    if(action === "checked"){
        console.log('checked');
        event.target.parentElement.parentElement.parentElement.classList.toggle('checked');
    }
    else if(action === "delete"){
        console.log("delete");
        event.target.parentElement.parentElement.parentElement.style.display="none";
    }
}