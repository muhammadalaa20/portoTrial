const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controls');
const sectBtn = document.querySelectorAll('.control');
const mainBody = document.querySelector('.main-content');

//page transition
 function pageTransition () {
    for(let i=0; i < sectBtn.length ; i++){
        sectBtn[i].addEventListener('click', function () {
            let currentBtn= document.querySelector('.active-btn');
            if (currentBtn !== null) {
                currentBtn.classList.remove("active-btn");
              }
            this.classList += ' active-btn'
        })
    }

    mainBody.addEventListener('click', (e)=>{
        const id = e.target.dataset.id;
        if (id) {
            //the btn animation
            /*
            sectBtns.forEach((btn)=>{
                btn.classList.remove('act')
            })
            e.target.classList.add('act')
            */
            sections.forEach((section)=>{
                section.classList.remove('act')
            })
            const element = document.getElementById(id);
            element.classList.add('act');
        }
    })
}

pageTransition(); 


//get the button by the id btnUp
let btnUp = document.getElementById("btnUp")
//showing the btnUp after passing a threshold
window.onscroll = function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        btnUp.style.display = "block";
    } else {
        btnUp.style.display = "none";
    }
}
//calling the function from the html onclick
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0
}


//About ME
const value= document.querySelectorAll('.prog-text');

 for (let J = 0; J <= value.length; J++) {

     //getting the div nxt to the Paragraph
     const percentage = value[J].nextElementSibling;
     //changing the value according to the html value
     percentage.innerHTML = `<div class="prog"><span class="skill" style="width:${value[J].innerHTML};"></span></div>`     
}