function newElement() {
    const li = document.createElement("li");
    const inputValue = document.getElementById("inp1").value;
    const crTextLi = document.createTextNode(inputValue);
    li.appendChild(crTextLi);
    document.getElementById("inp1").value = "";
    document.getElementById("listToDo").appendChild(li);
}