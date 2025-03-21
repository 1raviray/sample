document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".changed");
    const menuItems = document.querySelectorAll(".menu-item");
    const div1 = document.querySelectorAll(".div1");
    const menuItems1 = document.querySelectorAll(".menu-item1");
    const div12 = document.querySelectorAll(".div12");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    menuItems.forEach((item) => item.classList.remove("active1"));
                    div1.forEach((item) => item.classList.remove("active2"));
                    const activeItem = document.querySelector(
                        `.menu-item[data-target="${entry.target.id}"]`
                    );
                    activeItem.classList.add("active1");
                    const activeItem1 = document.querySelector(
                        `.div1[data-target="${entry.target.id}"]`
                    );
                    if (activeItem1) {
                        activeItem1.classList.add("active2");
                    }
                }
            });
        },
        {
            root: null, // viewport
            threshold: 0.5, // Trigger when 50% of section is visible
        }
    );

    sections.forEach((section) => observer.observe(section));

    const observer1 = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    menuItems1.forEach((item) => item.classList.remove("active1"));
                    div12.forEach((item) => item.classList.remove("active2"));
                    const activeItem = document.querySelector(
                        `.menu-item1[data-target="${entry.target.id}"]`
                    );
                    activeItem.classList.add("active1");
                    const activeItem1 = document.querySelector(
                        `.div12[data-target="${entry.target.id}"]`
                    );
                    if (activeItem1) {
                        activeItem1.classList.add("active2");
                    }
                }
            });
        },
        {
            root: null, // viewport
            threshold: .9, // Trigger when 50% of section is visible
        }
    );

    sections.forEach((section) => observer1.observe(section));

    const lastSection = document.querySelector("#section4");
    const menuContainer = document.querySelector(".menu-container2");
    
    // function checkStickyStop() {
    //     const rect = lastSection.getBoundingClientRect();
    //     if (rect.bottom <= window.innerHeight - 10) {
    //         menuContainer.style.position = "relative";
    //     } else {
    //         menuContainer.style.position = "sticky";
    //         menuContainer.style.top = "0px"; // Adjust as needed
    //     }
    // }

    // window.addEventListener("scroll", checkStickyStop);
    // Scroll to section on menu click
    menuItems1.forEach((item) => {
        item.addEventListener("click", function () {
            const targetSection = document.getElementById(this.getAttribute("data-target"));
            window.scrollTo({
                top: targetSection.offsetTop - 300,
                behavior: "smooth"
            });
        });
    });

});

/*-------Modal----------*/

const open=document.querySelector('#open')
const close=document.querySelector('#close')
const modalContainer=document.querySelector('#modalContainer')

open.addEventListener("click",()=>{
    modalContainer.classList.add("show")
})
close.onclick=()=>{
    modalContainer.classList.remove("show")
}
window.onclick=(e)=>{
    if(e.target == modalContainer){
        modalContainer.classList.remove("show")
    }
}



const moveTop = document.querySelector(".moveTop");

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 100) {
    moveTop.classList.add("top");
  } else {
    moveTop.classList.remove("top");
  }
});
