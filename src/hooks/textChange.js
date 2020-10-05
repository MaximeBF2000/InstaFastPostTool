import { d, canvas } from "../app"

export default function handleTextInputChange(e) {
  const colorInput = d.querySelector(".sidebar__colorInput")
  const fontsizeInput = d.querySelector(".sidebar__fontsizeInput")


  // Remove old text 👇
  d.querySelectorAll(".text").forEach(el => el.remove())


  // Create new text 👇
  const inputValue = e.target.value
  const p = d.createElement("p")
  p.classList.add("text")
  p.style.color = colorInput.value
  p.style.fontSize = fontsizeInput.value + "px"
  p.textContent = inputValue


  // Change fontsize, family and color on input changes 👇
  colorInput.addEventListener("input", e => p.style.color = e.target.value)
  fontsizeInput.addEventListener("input", e => p.style.fontSize = e.target.value + "px")

  
  canvas.appendChild(p)
}