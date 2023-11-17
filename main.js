let menu = document.querySelector('#menu-but'), nav = document.querySelector('nav'), home = 
    document.querySelector('#home');


window.addEventListener('scroll', () => {
    document.querySelector('header').classList.toggle('active', window.scrollY > 10);
});
window.onscroll = () => {
    menu.classList.remove('fa-times');
    nav.classList.remove('active');
}

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    nav.classList.toggle('active');
}

document.querySelector('#log-but').onclick = () => {
    document.querySelector('.log-form').classList.add('active');
    menu.classList.remove('fa-times');
    nav.classList.remove('active');
}
document.querySelector('#log-close').onclick = () => {
    document.querySelector('.log-form').classList.remove('active');
}

home.onmousemove = (e) => {
    document.querySelectorAll('.home-move').forEach(ele => {
        let speed = ele.getAttribute('data-speed'), x = (window.innerWidth - e.pageX * speed) / 90, y = 
            (window.innerHeight - e.pageY * speed) / 90;
        ele.style.transform = `translate(${y}px, ${x}px)`;
    });
}
home.onmouseleave = () => {
    document.querySelectorAll('.home-move').forEach(ele => {
        ele.style.transform = `translate(0px, 0px)`;
    });
}

var swiper = new Swiper(".vehicles-slider", {
    spaceBetween: 20,
    loop: true,
    grabCursor: true,
    centeredSlides: true,
    autoplay: {
        delay: 6000,
        disableOnInteraction: false
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        991: {
            slidesPerView: 3,
        }
    }
});

var swiper = new Swiper(".featured-slider", {
    spaceBetween: 20,
    loop: true,
    grabCursor: true,
    centeredSlides: true,
    autoplay: {
        delay: 6000,
        disableOnInteraction: false
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        991: {
            slidesPerView: 3,
        }
    }
});

var swiper = new Swiper(".reviews-slider", {
    spaceBetween: 20,
    loop: true,
    grabCursor: true,
    centeredSlides: true,
    autoplay: {
        delay: 6000,
        disableOnInteraction: false
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        991: {
            slidesPerView: 3,
        }
    }
});