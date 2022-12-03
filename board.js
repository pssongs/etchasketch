function generateDivs(e){
    if(isNaN(e)){
        num=e.path[0].value
    } else {
        num = e
    }
    var container = document.querySelector('#container')
    container.innerHTML = ''
    for (let i = 0; i < num; i++){
        let row = document.createElement('div')
        row.className = 'row'
        for (let x = 1; x <= num; x++){
            var cell = document.createElement('div')
            cell.className = 'gridsquare'
            let length = (600/num)
            cell.style.height = `${length}px`
            cell.style.width = `${length}px`
            row.appendChild(cell)
        }
        container.appendChild(row)
    }
    let value = document.querySelector('#rangeNumber')
    value.textContent = `${num}`
    fill()
}
function fill(){
    const square = document.querySelectorAll('.gridsquare')
    square.forEach(grid => {
            grid.addEventListener('mouseover', function(){
            grid.classList.add('black')
        })
})
}
// const buttons = document.querySelectorAll('.button')
// buttons.forEach(button => {
//     button.addEventListener('click', generateDivs)
// },false)


const range = document.querySelector('#range')
window.onload = generateDivs(25)
range.addEventListener('input', generateDivs)

console.log(range)