document.getElementById('close').addEventListener('click',()=>{
    document.getElementById('discount').style.display = 'none'
})
const menu = document.getElementById('menu_two')
let bool = true

document.getElementById('menu_button').addEventListener('click',()=>{
    if (bool){
        menu.style.transform = 'translate(0) scale(1.5)'
        bool = false
        menu.style.transition = '0.5s'
    }
    else if(!bool){
        menu.style.transform = 'translate(-200px) scale(1.5)'
        bool = true
    }
})