let clock=1
let scroller=document.querySelector('#img')

async function prev(){
    clock--
    if(clock<=0){
        clock=5
    }
    scroller.src=`images/${clock}.jpeg`
}
async function next(){
    clock++
    if(clock>5){
        clock=1
    }
    scroller.src=`images/${clock}.jpeg` 
}
async function openImg(img){
    scroller.src=img
}
let plane=document.querySelector('#table')
let cursor=document.querySelector('#cursor')
console.log(plane)
plane.addEventListener("mousemove",function(pos){
    cursor.style.left=pos.x+"px"
    cursor.style.top=pos.y+"px"
    cursor.style.opacity=.7

})
plane.addEventListener('moveenter',function(){
    cursor.style.opacity=.7
})
plane.addEventListener('mouseleave',function(){
    cursor.style.opacity=0
})