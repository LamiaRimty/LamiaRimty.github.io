// Show Hidden Menu

const navMenu=document.getElementById("nav-menu")
const navToggle=document.getElementById("nav-toggle")
const navClose=document.getElementById("nav-close")

// Show  Menu
if(navToggle){
    navToggle.addEventListener("click",()=>{
        navMenu.classList.add("show-menu")
    })
}

//Hide Menu

if(navClose){
    navClose.addEventListener("click",()=>{
        navMenu.classList.remove("show-menu");
    })
}

// Remove Menu Mobile

const navLink=document.querySelectorAll(".nav-link")

function linkAction(){
    const navMenu=document.getElementById("nav-menu");
    //jokhn protita class e click dibo menur list ta remove hoye jabe
    navMenu.classList.remove("show-menu");
}

navLink.forEach(n=>n.addEventListener("click",linkAction))


//Skills

const SkillsContent= document.getElementsByClassName("skills-content"),
skillsHeader = document.querySelectorAll(".skills-header")


function toggleSkills(){
    let skillClass=this.parentNode.className;

    for(i =0 ; i<SkillsContent.length; i++){
        SkillsContent[i].className="skills-content skills-close"
    }

    if(skillClass === "skills-content skills-close"){
        this.parentNode.className="skills-content skills-open"
    }
}

skillsHeader.forEach((e)=>{
    e.addEventListener("click",toggleSkills)
})


// Education-Qualification
// const tabs= document.querySelectorAll(["data-target"]),
// tabContents=document.querySelectorAll(["data-content"]);

// tabs.forEach(tab =>{
//     tab.addEventListener("click",()=>{
//         const target=document.querySelector(tab.dataset.target)

//         tabContents.forEach(tabContent =>{
//             tabContent.classList.remove("qualification-active")
//         })

//         target.classList.add("qualification-active")

//         tabs.forEach(tab=>{
//             tab.classList.remove("qualification-active")
//         })
//         tab.classList.add("qualification-active")
//     })
// })

// PORTFOLIO

 let swiper = new Swiper(".portfolio-container", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop:true,
       
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


// Scroll active link
  const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('')
        }else{
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)


// Background header change
function scrollHeader(){
    const nav = document.getElementById('header')
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

//Scroll up
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)




/*==================== DARK LIGHT THEME ====================*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})


// var icon = document.getElementById("icon");

// icon.onclick= function(){
//     document.body.classList.toggle("dark-theme");
//    if(document.body.classList.contains("dark-theme")){
//     icon.src = "images/sun.png";
//    }

//    else{
//     icon.src = "images/moon.png";
//    }
// }

// function myFunction() {
//     var element = document.body;
//     element.classList.toggle("dark-mode");
//  }



const scriptURL = "https://script.google.com/macros/s/AKfycbzg1JVicPJZe84CMSJft-7TrHGlNzii2rtw9YYHIKzkEMBmNceIwQ6Yaku3uAqQe289Zg/exec"
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById("msg")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => 
        { msg.innerHTML= "Message sent successfully!" 
        setTimeout(function(){
            msg.innerHTML=" "
        },5000)
        form.reset()
    
    }
        )
      .catch(error => console.error('Error!', error.message))
  })
