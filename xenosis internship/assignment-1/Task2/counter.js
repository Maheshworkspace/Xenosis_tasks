const maintitle = document.querySelector('#title');
let currentValue =0;
const btndecrement = document.querySelector('#decrement');
const btnreset = document.querySelector('#reset');
const btnincrement = document.querySelector('#increment');
btnincrement.addEventListener('click',()=>{
    currentValue ++
    maintitle.textContent=currentValue;
});
btndecrement.addEventListener('click',()=>{
    currentValue --
    maintitle.textContent=currentValue;
});
btnreset.addEventListener('click',()=>{
    currentValue = 0;
    maintitle.textContent=currentValue;
});