// Hooks
import handleImgInputChange from "./hooks/imgChange"
import handleTextInputChange from "./hooks/textChange"
import downloadPost from "./hooks/dowloadPost"

export const d = document
export const w = window


// DOM select
export const canvas = d.querySelector("#canvasBox")
const imgInput = d.querySelector("#imgInput")
const sentenceInput = d.querySelector("#sentenceInput")
const dowloadBtn = d.querySelector(".sidebar__dowloadBtn")


// Events
imgInput.addEventListener("change", handleImgInputChange)
sentenceInput.addEventListener("input", handleTextInputChange)
dowloadBtn.addEventListener("click", e => downloadPost(e.target))