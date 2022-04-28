
const openBtn = document.querySelector('.openBtnDropdown1');
const closeBtn = document.querySelector('.closeBtnDropdown1');
const dropdown1 = document.querySelector('#dropdown1');

openBtn.addEventListener('click',function(){

    dropdown1.classList.remove("hide");
    openBtn.classList.add('hide');
    closeBtn.classList.remove('hide');
    

})

closeBtn.addEventListener('click',function(){
    dropdown1.classList.add("hide");
    closeBtn.classList.add('hide');
    openBtn.classList.remove('hide');


})


const openBtn2 = document.querySelector('.openBtnDropdown2');
const closeBtn2 = document.querySelector('.closeBtnDropdown2');
const dropdown2 = document.querySelector('#dropdown2');

openBtn2.addEventListener('click',function(){

    dropdown2.classList.remove("hide");
    openBtn2.classList.add('hide');
    closeBtn2.classList.remove('hide');
    

})

closeBtn2.addEventListener('click',function(){
    dropdown2.classList.add("hide");
    closeBtn2.classList.add('hide');
    openBtn2.classList.remove('hide');


})

const openBtn3 = document.querySelector('.openBtnDropdown3');
const closeBtn3 = document.querySelector('.closeBtnDropdown3');
const dropdown3 = document.querySelector('#dropdown3');

openBtn3.addEventListener('click',function(){

    dropdown3.classList.remove("hide");
    openBtn3.classList.add('hide');
    closeBtn3.classList.remove('hide');
    

})

closeBtn3.addEventListener('click',function(){
    dropdown3.classList.add("hide");
    closeBtn3.classList.add('hide');
    openBtn3.classList.remove('hide');


})


const openBtn4 = document.querySelector('.openBtnDropdown4');
const closeBtn4 = document.querySelector('.closeBtnDropdown4');
const dropdown4 = document.querySelector('#dropdown4');

openBtn4.addEventListener('click',function(){

    dropdown4.classList.remove("hide");
    openBtn4.classList.add('hide');
    closeBtn4.classList.remove('hide');
    

})

closeBtn4.addEventListener('click',function(){
    dropdown4.classList.add("hide");
    closeBtn4.classList.add('hide');
    openBtn4.classList.remove('hide');


})
















/* 
const openBtn = document.querySelectorAll('.openBtnDropdown');
const closeBtn = document.querySelectorAll('.closeBtnDropdown');
const dropdowns = document.querySelectorAll('.dropdown-content');

openBtn.forEach(function(btn) {
    btn.addEventListener('click', function() {
        dropdowns.forEach(function(dd){
            var currentdd = document.getElementsByClassName("hidden");
            currentdd[0].classList = currentdd[0].classList.add("visible");
            this.classList += "visible";

          //  this.btn.classList.add('hide');
        });
    });
  });

  


// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

second try
 --------------------------
      dropdowns.forEach(function(dd){
          dd.classList.remove('hide');
      });
      btn.nextElementSibling.classList.remove('hide');
     --------------------------------------

// Set your events up in JavaScript, not with HTML event attributes
document.addEventListener("click", function(event) {
  // Loop over all the menus
  dropdown.forEach(function(dd){
    dd.classList.remove("hide"); // Hide the menu
  });
     // If the clicked element was a button
   if (event.target.classList.contains('.openBtnDropdown')) {
    // Show just the menu that corresponds to the clicked button
    event.target.nextElementSibling.classList.add("show");
  } 
 
});
     

*/






//menu laterale con tasto close
const closeMenu = document.querySelector('#icon-close-menu');
const sidebar = document.querySelector('#secondNav');

closeMenu.addEventListener('click',function(){
    sidebar.classList.add('hidden');
})

//menu laterale open



const OpenMenuBtn = document.querySelector('#icon-menu');

OpenMenuBtn.addEventListener('click',function(){
    
    sidebar.classList.remove('hidden');
    sidebar.classList.add('show');

});
