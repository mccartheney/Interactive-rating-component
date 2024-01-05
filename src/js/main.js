var allGrades = document.querySelectorAll(".grade");
var selectedGrade = undefined;

allGrades.forEach (grade => {
    grade.addEventListener("click", () => {
        selectedGrade = grade.childNodes[1].innerHTML;
        allGrades.forEach (turnOff => {
            turnOff.classList.remove("active")
        })
        grade.classList.toggle('active');
    })
})

document.querySelector(".submitGrade").addEventListener("click", () => {
    if (selectedGrade != undefined) {
        console.log(selectedGrade);
        document.querySelector(".spanRate").textContent = selectedGrade
        document.querySelector(".submitGrade").parentElement.style.display ="none"
        document.querySelector(".rating").classList.toggle("invisible");
    }else {
        alert("Please give as your opinion")
    }
})