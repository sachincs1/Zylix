var productcontainer = document.getElementById("products")
var search =document.getElementById("search")
var productlist = productcontainer.querySelectorAll("div")

search.addEventListener("keyup", function(){
    var enterdValue = event.target.value.toUpperCase()

    for(i=0;i<=productlist.length;i=i+1)
    {
        var productname = productlist[i].querySelector("p").textContent

        if(productname.toUpperCase().indexOf(enterdValue)<0)
        {
            productlist[i].style.display="none"
        }
        else
        {
            productlist[i].style.display="block"
        }
        
    }
})
var sidenav = document.querySelector(".side-navbar")


function showNavbar(){
sidenav.style.left="0"
}
function closeNavbar(){

sidenav.style.left="-60%"
}