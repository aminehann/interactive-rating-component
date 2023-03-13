const submitBtn = document.querySelector(".submit")
const container1 = document.querySelector(".container1")
const container2 = document.querySelector(".container2")
const rating = document.querySelector(".rating")
const rates = document.querySelectorAll(".btn")

submitBtn.addEventListener("click", () => {
    container2.classList.remove("hidden")
    container1.classList.add("hidden")
})

rates.forEach((x) => {
    x.addEventListener("click", () => {
        rating.innerHTML = x.innerHTML
    })

})
    