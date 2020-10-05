import { ctx, canvas } from "../app"

export default function handleImgInputChange(e) {
  const inputValue = e.target.value
  const base_image = new Image()
  base_image.src = inputValue
  base_image.onload = () => {
    const img = canvas.querySelector("#canvaImg")
    // img.style.display = "block"
    // img.src = inputValue
    canvas.style.backgroundImage = `url(${inputValue})`
  }
}