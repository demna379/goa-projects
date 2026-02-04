const img = document.getElementById('img1')
let count1 = 0

const images = [
    '/images/image.png',
    '/images/image copy.png',
    '/images/image copy 2.png',
    '/images/image copy 3.png',
    '/images/image copy 4.png',
]


document.getElementById('arrow_back').addEventListener('click',()=>{
    count1++
    if (count1 == images.length){
        count1 = 0
    }
    img.src = images[count1]
    console.log(count1)
})

document.getElementById('arrow_forward').addEventListener('click',()=>{
    count1--
    if (count1 < 0){
        count1 = images.length-1
    }
    img.src = images[count1]
    console.log(count1)
})

let boolean = true
document.getElementById('menu').addEventListener('click', () => {
    if (boolean === true) {
        document.getElementById('box').style.transform = 'translate(40px)'
        document.getElementById('box').style.transition = '1s'
        document.getElementById('first_div').style.transform = 'translate(-70px)'
        document.getElementById('first_div').style.transition = '1s'
        document.getElementById('menu').style.transform = 'translate(-50px)'
        document.getElementById('menu').style.transition = '1s'
        boolean = false
    }
    else if (boolean === false) {
        document.getElementById('box').style.transform = 'translate(400px)'
        document.getElementById('box').style.transition = '1s'
        document.getElementById('first_div').style.transform = 'translate(0px)'
        document.getElementById('menu').style.transform = 'translate(0px)'
        boolean = true
        console.log('demna')
    }
})