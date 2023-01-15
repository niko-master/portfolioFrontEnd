/*******MENU*******/
((d) =>{
    const $btnMenu = d.querySelector(".menu-btn"),
    $menu = d.querySelector(".menu");

    $btnMenu.addEventListener("click",(e) => {
        $btnMenu.firstElementChild.classList.toggle("none");
        $btnMenu.lastElementChild.classList.toggle("none");
        $menu.classList.toggle("is-active");
    });

    d.addEventListener("click", (e) => {
        if(!e.target.matches(".menu a")) return false;
        $btnMenu.firstElementChild.classList.remove("none");
        $btnMenu.lastElementChild.classList.add("none");
        $menu.classList.remove("is-active");
    });

window.onscroll = function() {
      scrollFunction()
  };
  
  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20)  {
      document.getElementById("navbar").classList.remove("none-full-lg-screen");
    } else {
      document.getElementById("navbar").classList.add("none-full-lg-screen");
    }
  }

  
 function tohome(){
   document.location.href = "index.html#";
 }
  
 const $tothetop = document.getElementById("tothetop");

 $tothetop.onclick = tohome;

})(document);
