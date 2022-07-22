/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let perp = ["the dog", "my grandma", "his turtle", "my bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "the keys", "the car"];
let when = [
  "before the class",
  "right on time",
  "when I finished",
  "during my lunch",
  "while I was praying"
];
window.onload = function() {
  //write your code here
  function excuseGen(perpArr, actionArr, whatArr, whenArr) {
    let randPerp = genRanNum(perpArr.length);
    let myPerp = perpArr[randPerp];
    console.log(myPerp);

    let randAction = genRanNum(actionArr.length);
    let myAction = actionArr[randAction];
    console.log(myAction);

    let randWhat = genRanNum(whatArr.length);
    let myWhat = whatArr[randWhat];
    console.log(myWhat);

    let randWhen = genRanNum(whenArr.length);
    let myWhen = whenArr[randWhen];
    console.log(myWhen);

    return `${myPerp} + ${myAction} + ${myWhat} + ${myWhen}`;
  }

  let myExcuse = excuseGen(perp, action, what, when);
  console.log(myExcuse);
};
function genRanNum(max) {
  return Math.floor(Math.random() * max);
}
