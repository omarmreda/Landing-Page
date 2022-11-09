const navBarList=document.getElementById("navbar__list");
const sections=[...document.querySelectorAll("section")];
const navIcon=document.querySelector("button");

// Dynamically adding added section to navigation menu.
for (let i=0;i<sections.length;i++){
    let list=document.createElement("li");
    list.innerHTML= `<a href="#${sections[i].id}" class="menu__link">${sections[i].id}</a>`;
    navBarList.appendChild(list);
}

  

//Making Smooth Scroll to each section in the landing page.
const links=[...document.querySelectorAll("li a")];
links.forEach(function(link){
link.addEventListener("click",function(event){
    event.preventDefault();
    let secId=event.target.attributes.href.value;
    let sec=document.querySelector(`${secId}`)
sec.scrollIntoView({
    behavior:"smooth"
})
})
});
   

//Indicate the position of the section.
//Function using getBoundingClientRect() to indicate top and height of the section.
function inViewPort(ele){
    let secTop=ele.getBoundingClientRect().top;
    let secHeight=ele.getBoundingClientRect().height;
    return (
        secTop >= 0 &&
        secTop <= (secHeight-10) 
    );
}
//add event listiner to the scroll and adding active class if the section is in the viewport.
window.addEventListener("scroll",function(){
sections.forEach(sec =>{
links.forEach(link=>{
    if (inViewPort(sec)){
sec.classList.add("your-active-class");
//Adding active class to the corresponding section in the navigation bar.
link.innerHTML == sec.id ? link.classList.add("active") : link.classList.remove("active") 
    }else{
        sec.classList.remove("your-active-class");  
    }
})
})
});
  


// Making the toggle menu clickable and responsive navigation menu.
        navIcon.addEventListener("click",function(){
         navBarList.classList.toggle("open")
});



