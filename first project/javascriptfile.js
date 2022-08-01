burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
rightNav = document.querySelector('.right_nav')
navList = document.querySelector('.nav_list')


burger.addEventListener('click', ()=>{
    
    rightNav.classList.toggle('visi-class');
    navList.classList.toggle('visi-class');
    navbar.classList.toggle('height-nav');

})

