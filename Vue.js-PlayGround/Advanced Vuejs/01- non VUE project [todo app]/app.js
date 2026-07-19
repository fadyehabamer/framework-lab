const buttonEl = document.getElementById("btn"),
    input = document.getElementById("goal"),
    taskList = document.getElementById("task-list")

addGoal = () => {
    const task = document.createElement("li")
    task.textContent = input.value
    taskList.appendChild(task)
    input.value = ""
    input.blur()
}


buttonEl.addEventListener("click", addGoal)