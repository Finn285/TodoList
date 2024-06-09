let arrayToDo = [];

function showTodo() {
    const todo = document.getElementById("listToDo");
    todo.innerHTML = "";
    for(let i=0; i < arrayToDo.length; i++) {
        const li = document.createElement("li");
        const img = document.createElement("img")
        img.src = "icons/trash.png";
        img.className = "trash";
        li.className = "listStyle";
        li.textContent = arrayToDo[i];
        li.appendChild(img);
        todo.appendChild(li);
        img.onclick = function() {arrayToDo.splice(i, 1); showTodo()};
        li.addEventListener("click", function(){li.classList.toggle("complete")});
    }
}

function newElement() {
    const inputValue = document.getElementById("inp1").value;
    if (inputValue.trim() == "") {
        Swal.fire({
                    title: 'You have to write something!',
                    icon: 'warning',
                    confirmButtonText: 'OK'
                });
    }
    else {
        arrayToDo.push(inputValue);
        document.getElementById("inp1").value = "";
        showTodo();
    }
}
showTodo();
