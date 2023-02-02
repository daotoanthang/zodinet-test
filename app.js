// Cau 1
const limit = 2;
const endpoint = `https://jsonplaceholder.typicode.com/posts?_page=${limit}`;
const postList = document.querySelector(".post-list");
const btncreate = document.querySelector(".btncreate");
let page = 1;

async function getData(page = 1) {
  const res = await fetch(`${endpoint}&_limit=${page}`);
  const data = await res.json();
  if (data.length > 0 && Array.isArray(data)) {
    data.forEach((item) => {
      renderItem(item);
    });
  }
}

function renderItem(item) {
  const template = `
    <div class="post">
        <p>userID: ${item.userId}</p>
        <p>Id: ${item.id}</p>
        <p>Title: ${item.title}</p>
        <p>Body: ${item.body}</p>
    </div>`;
  postList.insertAdjacentHTML("beforeend", template);
}

function handlerLoadMore() {
  page++;
  getData(page);
}

btncreate.addEventListener("click", handlerLoadMore);
getData();

// Cau 2
class Stack {
  constructor() {
    this.stack = [];
  }
  push(item) {
    return this.stack.push(item);
  }
  pop(item) {
    return this.stack.pop(item);
  }
  isEmpty(item) {
    return this.length === 0;
  }
  find(item) {
    return this.stack.find(item);
  }
  size(item) {
    return this.stack.size(item);
  }
}

// Cau 3
// function s(a, b) {
//   var x = 0;
//   for (var i = a; i <= b; i++) {
//     x = x + i;
//   }
//   return x;
// }
// console.log(s(6, 12));

// function calc(a, b, c) {
//   const res = s(a, b);
//   if (c == true) {
//     res = res * 2;
//   }
//   return res;
// }
// console.log(calc(6,12,13))

const calc = (a, b, c) => {
  var x = 0;
  for (var i = a; i <= b; i++) {
    x = x + i;
  }
  const res = x;
  if (c == true) {
    res = res * 2;
  }
  return res;
};
console.log(`calc`, calc(6, 12, 13));
