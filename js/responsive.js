const burger = document.querySelector('.burger')
const b1 = document.querySelector('.burger > div:nth-child(1)')
const b2 = document.querySelector('.burger > div:nth-child(2)')
const b3 = document.querySelector('.burger > div:nth-child(3)')

const nav = document.querySelector('.topbar ul')

burger.addEventListener('click', () => {
    if(!burger.classList.contains('b-active'))
    {
        burger.classList.add('b-active')
        b1.style.top = '20px'
        b1.style.transform = 'rotate(140deg)'
        b2.style.display = 'none'
        b3.style.top = '20px'
        b3.style.transform = 'rotate(-140deg)'
        nav.classList.add('menu-mobile')
    }
    else
    {
        burger.classList.remove('b-active')
        nav.classList.remove('menu-mobile')
        b1.style.top = '10px'        
        b1.style.transform = 'none'
        b2.style.display = 'block'
        b3.style.top = '30px'
        b3.style.transform = 'none'
    }
    
    
})

