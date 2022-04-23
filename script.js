/*
const openBtn = document.querySelectorAll('.dropdowndefault');
const closeBtn = document.querySelectorAll('.dropdownDefault2');

const dropdown = document.querySelector('#dropdown');
const dropdown2 = document.querySelector('#dropdown2');

openBtn.forEach(button => 
    button.addEventListener('click',funtion(){
     dropdown.classList.remove("hidden");
        
    });


    console.log('cliccato');
  //  dropdown.classList.remove("hidden");
  //  openBtn.classList.add('hidden');
   // closeBtn.classList.remove('hidden');

}*/

const openBtn = document.querySelector('#dropdownDefault');
const closeBtn = document.querySelector('#dropdownDefault2');
const dropdown = document.querySelector('#dropdown');



openBtn.addEventListener('click', function(){

    dropdown.classList.remove("hidden");
    openBtn.classList.add('hidden');
    closeBtn.classList.remove('hidden');
});

   

closeBtn.addEventListener('click', function(){
   dropdown.classList.add("hidden");
   closeBtn.classList.add('hidden');
   openBtn.classList.remove('hidden');
})

const openBtn2 = document.querySelector('#dropdownDefault3');
const closeBtn2 = document.querySelector('#dropdownDefault4');
const dropdown2 = document.querySelector('#dropdown2');



openBtn2.addEventListener('click', function(){

    dropdown2.classList.remove("hidden");
    openBtn2.classList.add('hidden');
    closeBtn2.classList.remove('hidden');
});

   

closeBtn2.addEventListener('click', function(){
   dropdown2.classList.add("hidden");
   closeBtn2.classList.add('hidden');
   openBtn2.classList.remove('hidden');
})


const OpenMenuBtn = document.querySelector('#icon-menu');

OpenMenuBtn.addEventListener('click',function(){

    console.log('ok');
})
 