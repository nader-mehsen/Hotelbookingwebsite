const toggel= document.querySelector(".toggel");
const items = document.querySelector(".items");
const activv =  document.querySelector(".activv");
toggel.addEventListener('click', ()=>{
    if(items.classList=="items" ){
        items.classList.add("active") 
        activv.classList.add("activ")
        toggel.innerHTML=`<i class="fa-solid fa-xmark" style="color: #24ab70;"></i>`

    } else{ 
        activv.innerHTML=``
         items.classList.remove("active") 
         activv.classList.remove("activ")
    toggel.innerHTML=`<i class="fa-solid fa-bars" style="color: #24ab70;">ئ`

    }

})