const form = document.querySelector('form');

const ul = document.querySelector('#list');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const task = form.elements.task.value.trim();//removes whitespace

    if (task === "") {
        alert("Please enter a task before submitting.");
        return;
    }

    const newLI = document.createElement("li");
    newLI.innerText = task;

    //for fading out on click
    newLI.addEventListener('click', function () {
        newLI.classList.add('fade-out');
        setTimeout(() => {
            newLI.remove();
        }, 500);
    });

    ul.append(newLI);
    form.reset();
});