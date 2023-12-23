function myFunc(){
    window.open("http://127.0.0.1:3000/index1.html");
  }
function myfunc1(){
    window.open("http://127.0.0.1:3000/index2.html");
  }
  const btn = document.getElementById('btn');

btn.addEventListener('click', function onClick(event) {
  // 👇️ change background color
  event.target.style.backgroundColor = 'salmon';

  // 👇️ optionally change text color
  // event.target.style.color = 'white';
});
function myfunc2(){
    window.open("http://127.0.0.1:3000/index3.html");
  }
  
