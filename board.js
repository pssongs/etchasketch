function generateDivs(e){
    num = e.path[0].id
    var container = document.querySelector('#container')
    container.innerHTML = ''
    for (let i = 0; i < num; i++){
        let row = document.createElement('div')
        row.className = 'row'
        for (let x = 1; x <= num; x++){
            var cell = document.createElement('div')
            cell.className = 'gridsquare'
            row.appendChild(cell)
        }
        container.appendChild(row)
    }
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
const buttons = document.querySelectorAll('.button')
buttons.forEach(button => {
    button.addEventListener('click', generateDivs)
},false)

