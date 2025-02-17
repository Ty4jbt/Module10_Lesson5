
document.addEventListener("DOMContentLoaded", function () {
        let boxes = document.querySelectorAll(".box");
        
        boxes.forEach(box => {
            box.addEventListener("click", function () {
                let colors = ["red", "blue", "green", "purple", "orange", "yellow", "pink", "brown", "black", "white", "gray"];
                let randomColor = colors[Math.floor(Math.random() * colors.length)];
                box.style.backgroundColor = randomColor;
            });

            box.addEventListener("mouseover", function () {
                box.style.transform = "scale(1.1)";
            });

            box.addEventListener("mouseout", function () {
                box.style.transform = "scale(1)";
            });
        });
    });