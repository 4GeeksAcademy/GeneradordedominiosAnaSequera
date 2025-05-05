import "bootstrap";
import "./style.css";

let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];
let extensions = ['.com', '.net', '.us', '.io'];

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
for (let p of pronoun) {
  for (let a of adj) {
    for (let n of noun) {
      for (let ext of extensions) {
        console.log(p + a + n + ext);
      }
    }
  }
}
}