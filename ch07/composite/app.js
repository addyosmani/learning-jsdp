class Task {
    constructor(name) {
        this.name = name;
        this.completed = false;
    }

    toggle() {
        this.completed = !this.completed;
    }

    getProgress() {
        return this.completed ? 1 : 0;
    }

    render() {
        const li = document.createElement("li");
        const label = document.createElement("label");
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = this.completed;
        checkbox.addEventListener("change", () => {
            this.toggle();
            this.updateProgress();
        });

        label.appendChild(checkbox);
        label.appendChild(document.createTextNode(this.name));
        li.appendChild(label);

        return li;
    }
}

class TaskGroup {
    constructor(name) {
        this.name = name;
        this.tasks = [];
    }

    add(task) {
        this.tasks.push(task);
    }

    toggle() {
        this.tasks.forEach(task => task.toggle());
    }

    getProgress() {
        return this.tasks.reduce((acc, task) => acc + task.getProgress(), 0) / this.tasks.length;
    }

    render() {
        const li = document.createElement("li");
        const label = document.createElement("label");
        const ul = document.createElement("ul");

        this.tasks.forEach(task => {
            ul.appendChild(task.render());
        });

        label.appendChild(document.createTextNode(this.name));
        li.appendChild(label);
        li.appendChild(ul);

        return li;
    }
}

// Example tasks
const mainTask = new TaskGroup("Main Task");

const subTask1 = new Task("Subtask 1");
const subTask2 = new Task("Subtask 2");
const subTask3 = new TaskGroup("Subtask 3");

subTask3.add(subSubTask1);
subTask3.add(subSubTask2);
mainTask.add(subTask3);

const subSubTask1 = new Task("Sub-subtask 1");
const subSubTask2 = new Task("Sub-subtask 2");

subTask3.add(subSubTask1);
subTask3.add(subSubTask2);

// Render tasks
const app = document.getElementById("app");
app.appendChild(mainTask.render());

// Progress update
const progress = document.createElement("p");
app.appendChild(progress);

function updateProgress() {
    progress.textContent = `Progress: ${(mainTask.getProgress() * 100).toFixed(2)}%`;
}

updateProgress();
mainTask.tasks.forEach(task => {
    if (task instanceof TaskGroup) {
      task.tasks.forEach(subtask => subtask.updateProgress = updateProgress);
    }
    task.updateProgress = updateProgress;
  });
  