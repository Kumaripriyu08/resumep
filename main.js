// active navber
let anv = document.querySelector(".navigation-wrap");
window.onscroll = function (){
    if(document.documentElement.scrollTop >20){
        nav.classList.add("scroll-on");
    } else {
        nav.classList.add("scroll-on");
            }
}


// nav hide

let navBar  = document.querySelectorAll('.nav-link');
let navCollapse = document.querySelector('.navbar-collapse.collapse');
navBar.forEach(function(a){
    a.addEventListener("click", function(){
        navCollapse.classList.remove("show");
    })
})



 /*------Engineer-------*/
    const words = ["ngineer"];
    let i = 0; // word index
    let j = 0; // letter index
    let currentWord = "";
    const textElement = document.getElementById("text");

    function type() {
      if (j < words[i].length) {
        currentWord += words[i][j];
        textElement.textContent = currentWord;
        j++;
        setTimeout(type, 200); // typing speed
      } else {
        setTimeout(erase, 1000); // wait before erasing
      }
    }

    function erase() {
      if (j > 0) {
        currentWord = currentWord.slice(0, -1);
        textElement.textContent = currentWord;
        j--;
        setTimeout(erase, 100); // erasing speed
      } else {
        i = (i + 1) % words.length; // move to next word (loop)
        setTimeout(type, 500); // small delay before typing next word
      }
    }

    type();

    // Automate Increse Order One to Five one by one

    let count = 1;
    const counter = document.getElementById("counter");

    function increaseNumber() {
      if (count <= 5) {
        counter.textContent = count;
        count++;
        setTimeout(increaseNumber, 1000); // 1 second gap
      }
    }

    increaseNumber();

    // For Nav-Link-active
    const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      navLinks.forEach(l => l.classList.remove('active')); // remove active from all
      this.classList.add('active'); // add to clicked one
    });
  });
  //For Animation of Section
  