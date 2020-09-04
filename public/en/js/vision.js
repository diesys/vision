function toggleLang() {
   var elementsIT = document.getElementsByClassName("desc_it");
   var elementsEN = document.getElementsByClassName("desc_en");
   var elementsLN = document.getElementsByClassName("lang_select");
   stateIT = elementsIT[0].style.display;

   for (var i = 0; i < elementsIT.length; i++) {
     if (stateIT == "none") {
       elementsLN[i].className = "lang_select en";
       elementsIT[i].style.display = "block";
       elementsEN[i].style.display = "none";
     }
     else {
       elementsLN[i].className = "lang_select it";
       elementsIT[i].style.display = "none";
       elementsEN[i].style.display = "block ";
     }
   }
}
