//navigation
const toggleBtn = document.querySelector('.toggle_btn')
const toggleBtnIcon = document.querySelector('.toggle_btn i')
const dropDownMenu = document.querySelector('.dropdown_menu')

toggleBtn.onclick = function () {
    dropDownMenu.classList.toggle('open')
    const isOpen = dropDownMenu.classList.contains('open')

    toggleBtnIcon.classList = isOpen
    ? 'fa-solid fa-xmark'
    : 'fa-solid fa-bars'
}

//typing
var typed = new Typed(".multiple-text",{
    strings: ["Frontend Developer", "Backend Developer", "UI/UX Designer", "Software Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
})

/*nav*/
window.addEventListener('scroll', function() {
    var header = document.querySelector('header');
    var scrollPosition = window.scrollY;

    if (scrollPosition > 0) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

/*grow*/
document.querySelectorAll('#about > div').forEach(div => {
    div.style.opacity = '0';
    div.style.visibility = 'hidden';
});

window.addEventListener('scroll', function() {
    const growingSection = document.querySelector('#about');
    const scrollPosition = window.scrollY;

    let newWidth = 50 + scrollPosition * 1.5; 
    let newHeight = 50 + scrollPosition * 1.5;

    newWidth = Math.min(newWidth, 1371);
    newHeight = Math.min(newHeight, 1300);

    growingSection.style.width = `${newWidth}px`;
    growingSection.style.height = `${newHeight}px`;

    if (newWidth >= 1371 && newHeight >= 1300) {
        growingSection.style.borderRadius = '0';
       
    } else {
        growingSection.style.borderRadius = '50%';
        
    }

    if (scrollPosition >= 600) {
        document.querySelectorAll('#about > div').forEach(div => {
            div.style.opacity = '1';
            div.style.visibility = 'visible';
        });
    } else {
        document.querySelectorAll('#about > div').forEach(div => {
            div.style.opacity = '0';
            div.style.visibility = 'hidden';
        });
    }
});

window.addEventListener('scroll', reveal);

        function reveal(){
            var reveals = document.querySelectorAll('.reveal');

            for(var i = 0; i < reveals.length; i++){
                var windowheight = window.innerHeight;
                var revealtop = reveals[i].getBoundingClientRect().top;
                var revealpoint = 100;

                if(revealtop < windowheight - revealpoint){
                    reveals[i].classList.add('active');
                }
                else {
                    reveals[i].classList.remove('active');
                }
            }
        }


        window.addEventListener('scroll', reveal);

        function reveal(){
            var reveals = document.querySelectorAll('#reveal2');

            for(var i = 0; i < reveals.length; i++){
                var windowheight = window.innerHeight;
                var revealtop = reveals[i].getBoundingClientRect().top;
                var revealpoint = 100;

                if(revealtop < windowheight - revealpoint){
                    reveals[i].classList.add('active');
                }
                else {
                    reveals[i].classList.remove('active');
                }
            }
        }
//GALLERY SLIDER
var counter = 1;
setInterval(function(){
    document.getElementById('radio' + counter).checked = true;
    counter++;
    
    if(counter > 4) {
        counter = 1;
    }
}, 3000);

//SCROLL
window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY;

    var navLinks = document.querySelectorAll('a');

    navLinks.forEach(function(link) {
        var sectionId = link.getAttribute('href').substring(1); 
        var section = document.getElementById(sectionId); 
        var sectionTop = section.offsetTop; 

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + section.offsetHeight) {
            link.classList.add('active-link');
        } else {
            link.classList.remove('active-link');
        }
    });
});

function highlightLink(link) {
    // Kunin lahat ng mga link sa navigation
    var navLinks = document.querySelectorAll('a');

    // Alisin ang klase ng lahat ng link
    navLinks.forEach(function(navLink) {
        navLink.classList.remove('active-link');
    });

    // I-highlight ang aktibong link
    link.classList.add('active-link');
}
