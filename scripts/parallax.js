const btn_scroll = document.getElementById('btn-scroll');

window.addEventListener('scroll',()=>{
    const name = document.querySelector('.site-name');
    const slogan = document.querySelector('.site-slogan');
    const link = document.querySelector('.site-link');
    let scrolling = window.pageYOffset;

    name.style.transform = 'translateY('+ scrolling * 0.55 +'px)';
    slogan.style.transform = 'translateY('+ scrolling * 0.55 +'px)';
    link.style.transform = 'translateY('+ scrolling * 0.55 +'px)';

    if(scrolling == 0) {
        btn_scroll.style.display = 'none';
    }else {
        btn_scroll.style.display = 'flex'
    }
})

btn_scroll.addEventListener('click', ()=> {
    scrollToTop();
})

function scrollToTop (){
    let s = document.documentElement.scrollTop;
    if(s > 0) {
        window.requestAnimationFrame(scrollToTop);
        window.scrollTo(0, s - s / 16);
    }
}