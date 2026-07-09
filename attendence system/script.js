let input = document.querySelector("#insert");
let add = document.querySelector("#addrecord");
let container = document.querySelector(".container");
let dateinp = document.querySelector("#date");
let students = [];
let num = 1;


dateinp.addEventListener("change", function () {


    printdata();

})
function savedata() {
    let date = dateinp.value;
    if (date !== "") {
        sessionStorage.setItem(
            date,
            JSON.stringify(students)
        );
    }
}

function printdata() {
    document.querySelectorAll(".row").forEach(row => row.remove());
    let date = dateinp.value;
    let data = sessionStorage.getItem(date);
    if (!data) {
        students = [];
        num = 1;
        return;
    }

    students = JSON.parse(data);
    num = students.length + 1;
    students.forEach(student => {
        let newrow = document.createElement("div");
        newrow.className = "row";
        newrow.innerHTML = `
        <div class="firstcolumn">${student.roll}</div>
        <div class="secondcolumn">${student.name}</div>
        <div class="thirdcolumn">
            <h3 id="marking" style="margin-top:5px">${student.status}</h3>
        <div>
            <button class="mark">present</button>
            <button class="mark">absent</button>
            </div>
        </div>
        `;
        container.appendChild(newrow);

    })
}
add.addEventListener("click", function () {
    if (input.value !== "" && dateinp.value !== "") {
        let newrow = document.createElement("div");
        newrow.className = "row";

        let student = {
            roll: num,
            name: input.value,
            status: "not marked"

        };
        students.push(student)

        newrow.innerHTML = `
        <div class="firstcolumn">${num}</div>
        <div class="secondcolumn">${input.value}</div>
        <div class="thirdcolumn">
            <h3 id="marking" style="margin-top:5px">${student.status}</h3>
        <div>
            <button class="mark">present</button>
            <button class="mark">absent</button>
            </div>
        </div>

        `;

        container.appendChild(newrow);
        savedata();
        num++;
        input.value = "";
    }

});

container.addEventListener("click", function (event) {
    if (event.target.classList.contains("mark")) {
        let row = event.target.closest(".row");
        let heading = row.querySelector("#marking");

        let status = event.target.textContent;
        heading.textContent = status;

        let roll = Number(row.querySelector(".firstcolumn").textContent);

        let student = students.find(s => s.roll === roll);
        if (student) {
            student.status = status;
            savedata();
        }
    }
});






