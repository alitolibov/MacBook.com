let img = document.querySelector('.img-block')
let white = document.querySelector('.white')
let silver = document.querySelector('.silver')
let text = document.querySelector('.center-top2')
silver.onclick = () => {
    img.classList.add('img2')
    white.classList.add('active')
    silver.style.backgroundColor = '#0071E3'
    silver.style.color = '#FFFFFF'
    text.innerHTML = 'Space Gray'
}
white.onclick = () => {
    img.classList.remove('img2')
    white.classList.remove('active')
    silver.style.backgroundColor = '#CFE7FF'
    silver.style.color = '#797979'
    text.innerHTML = 'White'
}
let levelOne = document.querySelector('.level-1')
let levelTwo = document.querySelector('.level-2')
let levelThree = document.querySelector('.level-3')
let levelFour = document.querySelector('.level-4')
let price = document.querySelector('.price')
levelOne.onclick = () => {
    levelOne.style.border = '2px solid #007FFF'
    levelTwo.classList.remove('level-active')
    levelThree.classList.remove('level-active')
    levelFour.classList.remove('level-active')
    price.innerHTML = '$1,999'
}
levelTwo.onclick = () => {
    levelOne.style.border = '2px solid #CFE7FF'
    levelTwo.classList.add('level-active')
    levelThree.classList.remove('level-active')
    levelFour.classList.remove('level-active')
    price.innerHTML = '$2,199'
}
levelThree.onclick = () => {
    levelOne.style.border = '2px solid #CFE7FF'
    levelTwo.classList.remove('level-active')
    levelThree.classList.add('level-active')
    levelFour.classList.remove('level-active')
    price.innerHTML = '$2,599'
}
levelFour.onclick = () => {
    levelOne.style.border = '2px solid #CFE7FF'
    levelTwo.classList.remove('level-active')
    levelThree.classList.remove('level-active')
    levelFour.classList.add('level-active')
    price.innerHTML = '$3,199'
}