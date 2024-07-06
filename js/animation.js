const menuHome = document.querySelector('.menuHome')
const menuCollection = document.querySelector('.menuCollection')
const menuAbout = document.querySelector('.menuAbout')
const menuContact = document.querySelector('.menuContact')


let enTete = document.querySelector('.en-tete')
let collection = document.querySelector('.mes-collection')
let about = document.querySelector('#about')
let contact = document.querySelector('.contact')

window.addEventListener('scroll', (e) => {
    /* console.log(boxV1.offsetTop); */
    // console.log(':: ' + scrollY);    
    
    // partie animation
    let boxV1 = document.querySelector('.box-velo1')
    let boxV2 = document.querySelector('.box-velo2')
    let boxV3 = document.querySelector('.bx3')

    //partie menu active
    if(scrollY < 353)
    {
        menuHome.classList.add('menu-active')
        menuCollection.classList.remove('menu-active')
        menuAbout.classList.remove('menu-active')
        menuContact.classList.remove('menu-active')
    }    
    else if(scrollY < 1964)
    {
        menuHome.classList.remove('menu-active')
        menuCollection.classList.add('menu-active')
        menuAbout.classList.remove('menu-active')
        menuContact.classList.remove('menu-active')
    }
    else if(scrollY < 2754) {
        menuHome.classList.remove('menu-active')
        menuCollection.classList.remove('menu-active')
        menuAbout.classList.add('menu-active')
        menuContact.classList.remove('menu-active')
    }
    else 
    {
        menuHome.classList.remove('menu-active')
        menuCollection.classList.remove('menu-active')
        menuAbout.classList.remove('menu-active')
        menuContact.classList.add('menu-active')
    }

    //partie animation
    if(scrollY > 378)
    {
        boxV1.classList.add('anime-bv1')
    }
    else
    {
        boxV1.classList.remove('anime-bv1')
    }

    if(scrollY > 803)
    {
        boxV2.classList.add('anime-bv2')
    }
    else
    {
        boxV2.classList.remove('anime-bv2')
    }

    if(scrollY > 1238)
    {
        boxV3.classList.add('anime-bv1')
    }
    else
    {
        boxV3.classList.remove('anime-bv1')
    }

    if(scrollY > 1772)
    {
        document.querySelector('.about').classList.add('anime-contact')
        document.querySelector('.img-slide').classList.add('anime-contact')
    }
    else
    {
        document.querySelector('.about').classList.remove('anime-contact')
        document.querySelector('.img-slide').classList.remove('anime-contact')
    }

    if(scrollY > 2688)
    {
        contact.classList.add('anime-contact')
    }
    else
    {
        contact.classList.remove('anime-contact')
    }
})

