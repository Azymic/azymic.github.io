// Referenced from: https://stackoverflow.com/questions/37242754/how-do-i-change-the-background-image-every-x-seconds
// asynchronous, closure funtions. Grabs strings from "identity" array
const identity = [
  " student", "engineer", "artist"
]

const node = document.getElementById("identity-text");

const cycleText = (text, container, step) => {
	text.forEach((text, index) => (
  	setTimeout(() => {
	    container.innerHTML = text
    }, step * (index + 1))
  ))
  setTimeout(() => cycleText(text, container, step), step * text.length)
}


cycleText(identity, node, 1500)
