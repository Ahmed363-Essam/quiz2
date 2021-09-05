let rotate = document.getElementById("rotate");
let item4 = document.querySelector(".item4")

let x = 1;
rotate.onclick = function()
{


    if( x === 1)
    {
        item4.classList.add("add");
        x = 0;
    }
    else
    {
        item4.classList.remove("add");
        x = 1;  
    }

}
/******************************************/



/*********************************/
let img5 = document.getElementById("img5");

let pop2 = document.getElementById("pop2")

img5.onclick = function()
{
    pop2.classList.toggle("active")
}

/********* owl  */
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:1,
            nav:false
        },
        1000:{
            items:1,
            nav:true,
            loop:false
        }
    }
})

/****************************/

/********************* */

/***************************/

let vol = document.getElementById("vol");
let app  = document.getElementById("app")

vol.onclick = function()
{
    app.classList.toggle("app")
}
/*********************/

let sel = Array.from(document.querySelectorAll(".choose .sel"));

let but  = document.getElementById("butn");

let cor = document.getElementById("cor");

for(let i=0 ; i<sel.length;++i)
{
    sel[i].onclick=function()
    {
        removech();
        sel[i].classList.add("active");

        but.classList.add("co")
    }
}

function  removech()
{
    sel.forEach(function(sel)
    {
        sel.classList.remove("active");
    })
}
but.onclick = function()
{
    if(but.classList.contains("co"))
    {
        sel[2].classList.add("active");
        sel[3].classList.add("active");
        cor.style.opacity="1";


   
    }
    else
    {
        console.log("not answer")
    }
}

let closelabr = document.getElementById("closelabr");

let ok10 = document.getElementById("ok10");

let labr = document.getElementById("labr");

let glas = document.getElementById("glas")

closelabr.onclick = function()
{
    labr.style.display="none";
}

ok10.onclick = function()
{
    labr.style.display="none";
}
glas.onclick = function()
{
    labr.style.display="block";
}

let laboratiry = document.getElementById("laboratiry");

let lastpop = document.getElementById("lastpop");

let closelast = document.getElementById("closelast")

laboratiry.onclick = function()
{
    lastpop.style.display="block"
}

closelast.onclick = function()
{
    lastpop.style.display="none"
}