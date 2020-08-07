// function 더하기(a, b) {
//   console.log(a + "더하기" + b + "은" + "6 입니다");
// }

// 더하기(1, 5);
// 더하기(2, 4);

// function month(dday) {
//   return 30 - dday;
// }

// var 오늘 = month(9);
// console.log(오늘);

document.getElementById("main-title").style.color = "red";

const li = document.createElement("li");
li.className = "collection-item";
li.id = "new-item";
li.setAttribute("title", "New Item");
li.appendChild(document.createTextNode("yo"));
document.querySelector("ul.collection").appendChild(li);
