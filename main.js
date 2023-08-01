let plus = document.getElementById('plus')
let count = document.getElementById('count')
let minus = document.getElementById('minus')
let reset = document.getElementById('reset')






let num = 0
count.innerText = num
const increment = () => {
    count.innerText = num +=1
}
const  decrement = () => {
    count.innerText = num -=1
}
const  resetall = () => {
    count.innerText = num =0
}