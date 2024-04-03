// Write your code here!
const mainE = document.getElementById("main");
mainE.remove();

const newHeader = document.createElement("h1");
newHeader.textContent = "Joy Kweyu is the champion";
newHeader.id = "victory";

document.body.append(newHeader);
