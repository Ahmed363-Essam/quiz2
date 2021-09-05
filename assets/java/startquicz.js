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

