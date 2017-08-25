function toggleLang() {
   var elementsIT = document.getElementsByClassName("desc_it");
   var elementsEN = document.getElementsByClassName("desc_en");
   lan_sel = document.getElementById("lang_select");
   stateIT = elementsIT[0].style.display;

   for (var i = 0; i < elementsIT.length; i++) {
     if (stateIT == "none") {
       elementsIT[i].style.display = "block";
       elementsEN[i].style.display = "none";
     }
     else {
       elementsIT[i].style.display = "none";
       elementsEN[i].style.display = "block ";
     }
   }

   if (stateIT == "none")
     lan_sel.style.backgroundImage = 'url(../img/flaguk.png)';
   else
     lan_sel.style.backgroundImage = 'url(../img/flagit.png)';
}
