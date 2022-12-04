function generateDivs(e){
    if(isNaN(e)){
        num=e.path[0].value
    } else {
        num = e
    }
    let value = document.querySelector('#rangeNumber')
    value.textContent = `${num}`
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
    remove()
    fill()
}
function fill(){
    const square = document.querySelectorAll('.gridsquare')
    square.forEach(grid => {
            grid.addEventListener('mouseover', function(){
            if(mode == 'black'){
                grid.style['background-color'] = `black`
            } else {
                var randomColor = Math.floor(Math.random()*16777215).toString(16);
                grid.style['background-color'] = `${randomColor}`
            }
            
        })
})
}
function color(){
    const square = document.querySelectorAll('.gridsquare')
    square.forEach(grid => {
        grid.addEventListener('mouseover', function(){
        var randomColor = Math.floor(Math.random()*16777215).toString(16);
        grid.style['background-color'] = `#${randomColor}`
        mode = 'color'
    })
})
}
function black(){
    const square = document.querySelectorAll('.gridsquare')
    square.forEach(grid => {
        grid.addEventListener('mouseover', function(){
        grid.style['background-color'] = 'black'
        mode = 'black'
    })
})    

}
function remove(){
    const square = document.querySelectorAll('.gridsquare')
    const reset = document.querySelector('#reset')
    reset.addEventListener('click', function() {
    square.forEach(grid => {
        grid.style['background-color'] = ''
        })
   
} )
}
var mode = 'black'

const range = document.querySelector('#range')
window.onload = generateDivs(range.value)
range.addEventListener('input', generateDivs)

const rgb = document.querySelector('#RGB')
rgb.addEventListener('click',function(){
    color()
})    

const blk = document.querySelector('#black')
blk.addEventListener('click',function(){
    black()
})

