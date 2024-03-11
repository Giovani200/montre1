'use strict'
const deg = 6
const grandeaiguille = document.querySelector(".grandeaiguille")
const petiteaiguille = document.querySelector(".petiteaiguille")
const trotteuse = document.querySelector(".trotteuse")

setInterval(() => {
  let date = new Date()
  // console.log(date)
  let h = date.getHours()
  let m = date.getMinutes()
  let s = date.getSeconds()
  // horloge1

  grandeaiguille.style.transform = `rotateZ(${ (h * 30) + (m / 2) }deg)`
  petiteaiguille.style.transform = `rotateZ(${(m * deg)}deg)`
  trotteuse.style.transform = `rotateZ(${(s * deg) + (m/12)}deg)` //avec le s * 30) + (m/12)} deg il tourne toutes les 30s
  // Numérique 2 
 
})