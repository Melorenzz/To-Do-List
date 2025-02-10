// Добавить дату создания элемента. ✅
// Добавить дату закрытия таски.



let tasks = document.getElementById("tasks");
let createTask = document.getElementById("createTask");
let getUserTask = document.getElementById("getUserTask");

createTask.addEventListener("click", function () {
    if(getUserTask.value === '') {
        alert("Please enter your task");
    }else{



        const newElement = document.createElement("div");
        newElement.classList.add("element");


        const elementTask = document.createElement("div");
        elementTask.classList.add("element_task"); // исправил ошибку

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";

        const userTask = document.createElement("p");

        const dateCreate = document.createElement("div");
        dateCreate.classList.add("date_create");

        const deleteButton = document.createElement("button");

        const img = document.createElement("img");
        img.src = "img/crosslinear_106242.svg";

        deleteButton.appendChild(img); // добавил картинку в кнопку

        // Делаю HTML-структуру
        elementTask.appendChild(checkbox);
        elementTask.appendChild(userTask);
        elementTask.appendChild(dateCreate);
        newElement.appendChild(elementTask);
        newElement.appendChild(deleteButton);

        // Добавляем новый элемент в контейнер задач
        tasks.appendChild(newElement);

        let now = new Date();
        dateCreate.style.color = 'rgb(209, 216, 227)';
        let taskCreated = now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
        dateCreate.innerHTML = taskCreated;

        userTask.innerHTML = getUserTask.value;
        getUserTask.value = "";

        // Удаление таски
        deleteButton.addEventListener("click", function () {
            newElement.remove();
        });
        checkbox.addEventListener("change", function (event) {
            if (checkbox.checked) {
                elementTask.style.backgroundColor = "rgb(97, 126, 140)";
                elementTask.style.boxShadow = "none";
                userTask.style.color = "rgb(209, 216, 227)";
                userTask.style.textDecoration = "line-through";
                now = new Date();
            }else{
                elementTask.style.backgroundColor = "rgb(34, 131, 242)";
                userTask.style.color = "white";
                userTask.style.textDecoration = "none";
            }
        })
    }
});
