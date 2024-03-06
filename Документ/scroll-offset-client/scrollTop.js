//Найти размер прокрутки снизу
/* let sh = elem.scrollHeight;
let st = elem.scrollTop;
let ch = elem.clientHeight;

let scrollBottom = sh - (st + ch);

console.log(scrollBottom); */

function scroll () {
  return elem.scrollHeight - (elem.scrollTop + elem.clientHeight)
}

console.log(scroll());