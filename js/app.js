const btn1 = document.querySelector('.btn-1')
const btn2 = document.querySelector('.btn-2')
const btn3 = document.querySelector('.btn-3')

const img1 = document.querySelector('.im-1')
const img2 = document.querySelector('.im-2')
const img3 = document.querySelector('.im-3')

let i = 0

btn1.addEventListener('click', (e) => {
    i = 0

    if(!btn1.classList.contains('active'))
        btn1.classList.add('active')

    if(btn2.classList.contains('active'))
        btn2.classList.remove('active')

    if(btn3.classList.contains('active'))
        btn3.classList.remove('active')
    
    img1.setAttribute('src', 'imgs/velok1.jpg')    
    img2.setAttribute('src', 'imgs/velok2.jpg')
    img3.setAttribute('src', 'imgs/velok3.jpg')
    
})

btn2.addEventListener('click', (e) => {
    i = 1

    if(btn1.classList.contains('active'))
        btn1.classList.remove('active')

    if(!btn2.classList.contains('active'))
        btn2.classList.add('active')

    if(btn3.classList.contains('active'))
        btn3.classList.remove('active')

    img1.setAttribute('src', 'imgs/veloa4.jpg')
    img2.setAttribute('src', 'imgs/veloa5.jpg')
    img3.setAttribute('src', 'imgs/velol1.jpg')

})

btn3.addEventListener('click', (e) => {
    i = 2

    if(btn1.classList.contains('active'))
        btn1.classList.remove('active')

    if(btn2.classList.contains('active'))
        btn2.classList.remove('active')

    if(!btn3.classList.contains('active'))
        btn3.classList.add('active')
    
    img1.setAttribute('src', 'imgs/veloa1.jpg')
    img2.setAttribute('src', 'imgs/veloa2.jpg')
    img3.setAttribute('src', 'imgs/veloa3.jpg')

})


setInterval(() => {
    // console.log('i :: ' + i);
    if(i == 0)
    {
        if(!btn1.classList.contains('active'))
            btn1.classList.add('active')
    
        if(btn2.classList.contains('active'))
            btn2.classList.remove('active')
    
        if(btn3.classList.contains('active'))
            btn3.classList.remove('active')

        img1.setAttribute('src', 'imgs/velok1.jpg')    
        img2.setAttribute('src', 'imgs/velok2.jpg')
        img3.setAttribute('src', 'imgs/velok3.jpg')
        i++
    }
    else if(i == 1)
    {
        if(btn1.classList.contains('active'))
            btn1.classList.remove('active')
    
        if(!btn2.classList.contains('active'))
            btn2.classList.add('active')
    
        if(btn3.classList.contains('active'))
            btn3.classList.remove('active')

        img1.setAttribute('src', 'imgs/veloa4.jpg')
        img2.setAttribute('src', 'imgs/veloa5.jpg')
        img3.setAttribute('src', 'imgs/velol1.jpg')
        i++
    }
    else if(i == 2)
    {
        if(btn1.classList.contains('active'))
            btn1.classList.remove('active')
    
        if(btn2.classList.contains('active'))
            btn2.classList.remove('active')
    
        if(!btn3.classList.contains('active'))
            btn3.classList.add('active')

        img1.setAttribute('src', 'imgs/veloa1.jpg')
        img2.setAttribute('src', 'imgs/veloa2.jpg')
        img3.setAttribute('src', 'imgs/veloa3.jpg')
        i -= 2
    }

}, 2200)