window.addEventListener('scroll',()=>{
    const name = document.querySelector('.site-name');
    const slogan = document.querySelector('.site-slogan');
    const link = document.querySelector('.site-link');
    let scrolling = window.pageYOffset;
    console.log(scrolling)

    name.style.transform = 'translateY('+ scrolling * 0.55 +'px)';
    slogan.style.transform = 'translateY('+ scrolling * 0.55 +'px)';
    link.style.transform = 'translateY('+ scrolling * 0.55 +'px)';
})