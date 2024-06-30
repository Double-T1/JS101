// 程式碼寫這裡
document.addEventListener("DOMContentLoaded",() => {
    // two goals,
    // 1. add new task onto the todo list,
    // 2. delete finished task from the list 

    //goal 2
    function addEventClose(button) {
        button.addEventListener("click",function (e){
            e.target.parentNode.remove();
        })
    } 
    document.querySelectorAll(".closeBtn").forEach((button) => {
        addEventClose(button);   
    })

    // goal 1
    const baseNode = document.querySelector(".todo-item").cloneNode(true);
    const createLi = () => {
        const newLi = baseNode.cloneNode(true);
        addEventClose(newLi.childNodes[3]);
        return newLi;
    }

    const addButton = document.querySelector("#addBtn");
    addButton.addEventListener("click", () => {
        const newTask = document.querySelector("#taskInput");
        const list = document.querySelector(".todo-list");
        const li = createLi();
        li.childNodes[1].textContent = newTask.value
        list.insertAdjacentElement("afterbegin",li);
    })
})