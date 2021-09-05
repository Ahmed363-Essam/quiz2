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

let start = document.getElementById("start");
let pop1 = document.querySelector(".pop1")

start.onclick=function()
{
    pop1.style.display="none"
}

/*********************************/
let img5 = document.getElementById("img5");

let pop2 = document.getElementById("pop2")

img5.onclick = function()
{
    pop2.classList.toggle("active")
}

/********* owl  */
$(' .owl-carousel').owlCarousel({
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
let close3 = document.getElementById("close3");

let pop3 = document.querySelector(".pop3");

let laboratiry = document.getElementById("laboratiry");

close3.onclick = function()
{
    pop3.style.display="none"
}

laboratiry.onclick = function()
{
    pop3.style.display="block"
}

/********************* */

let close4 = document.getElementById("close4");
let pop4 = document.querySelector(".pop4");

let invest = document.getElementById("invest")

close4.onclick= function()
{
    pop4.style.display="none"
}
invest.onclick = function()
{
    pop4.style.display="block" 
}