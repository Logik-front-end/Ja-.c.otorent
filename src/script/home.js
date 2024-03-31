let carousel_track = document.querySelector(".carousel__track")
let carousel_dotsLi = document.querySelectorAll(".carousel__dots li")

carousel_dotsLi.forEach((li, index) => {
	li.addEventListener("click", () => {
		removeActiveClass(carousel_dotsLi, "active")
		carousel_track.style.left = `-${index * 100}vw`
		li.classList.add("active")
	})
})

function removeActiveClass(selectors, activeClass) {
	selectors.forEach(el => el.classList.remove(activeClass))
}


let hero_controllLi = document.querySelectorAll(".hero__controll li")
let hero_game_items = document.querySelectorAll(".hero__images-item")

hero_controllLi.forEach((li, index) => {
	li.addEventListener("click", () => {
		removeActiveClass(hero_controllLi, "active")
		removeActiveClass(hero_game_items, "active")
		li.classList.add("active")
		hero_game_items[index].classList.add("active")
	})
})
