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
        sel[0].classList.add("active");
        cor.style.opacity="1";


   
    }
    else
    {
        console.log("not answer")
    }
}

/*********************/
let photo = document.getElementById("photo");
let popimg = document.getElementById("popimg");

let closeimg = document.getElementById("closeimg")
photo.onclick = function()
{
    popimg.style.display="block"
}

closeimg.onclick = function()
{
    popimg.style.display="none";
}

/*********** poplab **********/

let ok4 = document.getElementById("ok4");

let closelab = document.getElementById("closelab");

let poplab = document.getElementById("poplab");


ok4.onclick = function()
{
    poplab.style.display="none"
}
closelab.onclick = function()
{
    poplab.style.display="none"
}

let laboratiry = document.getElementById("laboratiry");

laboratiry.onclick = function()
{
    poplab.style.display="block"
}
/******************************/

let ok9 = document.getElementById("ok9");

let invest4 = document.getElementById("invest4");
let closeinv = document.getElementById("closeinv")

ok9.onclick = function()
{
    invest4.style.display="none"
}

closeinv.onclick = function()
{
    invest4.style.display="none"
}
let glas = document.getElementById("glas");

glas.onclick= function()
{
    invest4.style.display="block"
}