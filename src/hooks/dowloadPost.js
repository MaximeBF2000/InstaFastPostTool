import html2canvas from 'html2canvas'
import { canvas } from "../app"

export default function downloadPost(downloadButton) {
  html2canvas(canvas, { allowTaint: true })
    .then(canva => {
      const image = canva.toDataURL("image/jpg")
      downloadButton.href = image
    })
    .catch(err => console.log("Error => ", err))
}