var submit = document.getElementById('submit');
submit.onclick = function()
    {
      var firstNumber = document.getElementById("firstNumber").value;
      var secondNumber = document.getElementById("secondNumber").value;
      if (isNaN(firstNumber) || isNaN(secondNumber))
      //si firstNumberet/secondNumber affich NaN 
      //-> remplacer le resultat par "saisie invalide" 
      { 
      alert("saisie invalide");
      return false;
      //"return false;"permet d'annuler l'effet par défaut produit.
      }
      result = firstNumber % secondNumber
      alert("Résultat:" + result);
    }
//% = modulo
//NaN=(not a number) est un nombre