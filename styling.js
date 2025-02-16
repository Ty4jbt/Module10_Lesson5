
// Task 1
document.addEventListener("DOMContentLoaded", function () {
    let box1 = document.getElementById("box1");

    let box2 = document.getElementById("box2");

    let box3 = document.getElementById("box3");

    let box4 = document.getElementById("box4");

    let box5 = document.getElementById("box5");

    // Array of all boxes
    const boxes = [box1, box2, box3, box4, box5];

    // Task 2
    // Add event listeners to each box
    boxes.forEach(box => {
        box.addEventListener("click", function () {
            let colors = ["red", "blue", "green", "purple", "orange"];
            let randomColor = colors[Math.floor(Math.random() * colors.length)];
            box.style.backgroundColor = randomColor;
        });

        // Task 3
        box.addEventListener("mouseover", function () {
            box.style.transform = "scale(1.1)";
        });

        box.addEventListener("mouseout", function () {
            box.style.transform = "scale(1)";
        });
    });
});
