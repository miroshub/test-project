
function addTask() {
  var taskInput = document.getElementById("taskInput");
  var taskText = taskInput.value.trim();
  
  if (taskText !== "") {
      var li = document.createElement("li");
      li.textContent = taskText;
      
      var removeButton = document.createElement("button");
      removeButton.textContent = "Remove";
      removeButton.onclick = function() {
          li.remove();
      };
      
      li.appendChild(removeButton);
      document.getElementById("taskList").appendChild(li);
      taskInput.value = "";
  }
}