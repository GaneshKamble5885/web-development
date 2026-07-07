let btns = document.querySelectorAll("button");
let input = document.querySelector("input");
let content = "";
btns.forEach(function (btn) {

    btn.addEventListener("click", function () {
        if (btn.textContent == "=") {
            let result = eval(content)
            input.value = result;
        }
        else if (btn.textContent == "AC") {
            content = ""
            input.value = "";
        }
        else {
            content += btn.textContent;
            input.value = content;
        }
    });

});






