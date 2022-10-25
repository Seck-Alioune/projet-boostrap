//level 1//

let min=1;
 let max = 10;
 let random = parseInt((Math.random() * (max - min)) + min);
 
     var nbre_essaie = 0;
     do {
      var generer= prompt("saisissez un nombre compris entre 0 et 10");
      if(generer==random){
       alert("Vous avez trouver la bonne réponse,félicitation!");
      }
      if (nbre_essaie == 5) {
    alert("Désolé, c'est fini. Le nombre correct était : " + random);}
        else if(generer<random){
          alert("Votre nombre est trop petit" );
         }
         else{
          alert("Votre nombre est trop grand");}
    nbre_essaie ++ ;
     } 
     while (generer != random){
       alert("vous avez trouvé en " + nbre_essaie +"essaie");
     }