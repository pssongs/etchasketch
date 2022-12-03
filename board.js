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
            grid.classList.add('black')
        })
})
}
function color(){
    const square = document.querySelectorAll('.gridsquare')
    square.forEach(grid => {
        grid.addEventListener('mouseover', function(){
        grid.classList.remove('black')
        grid.classList.add('color')
    })
})
}
function black(){
    const square = document.querySelectorAll('.gridsquare')
    square.forEach(grid => {
        grid.addEventListener('mouseover', function(){
        grid.classList.remove('color')
        grid.classList.add('black')
    })
})    

}
function remove(){
    const square = document.querySelectorAll('.gridsquare')
    const reset = document.querySelector('#reset')
    reset.addEventListener('click', function() {
    square.forEach(grid => {
        grid.classList.remove('color')
        grid.classList.remove('black')
        })
    const range = document.querySelector('#range')
    window.onload = generateDivs(range.value)   
} )
}


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


