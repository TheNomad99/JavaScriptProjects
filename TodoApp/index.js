const items = document.querySelectorAll(".item");

items.forEach( (e) =>{
        e.addEventListener('click', () => console.log(event.target.className))
})
