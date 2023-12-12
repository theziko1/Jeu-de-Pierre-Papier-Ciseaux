let score_player = 0;
let score_comp = 0;


 function Choix(player) {
 
  let  choixArray =["pierre","papier","ciseaux"]
  let icon = ["fa-regular fa-hand-back-fist"," fa-regular fa-hand","fa-regular fa-hand-scissors"]
  let iconP = ["fa-regular fa-hand-back-fist"," fa-regular fa-hand","fa-regular fa-hand-scissors"]
  let choice = choixArray[Math.floor(Math.random() * choixArray.length)]


  const resultdiv = document.querySelector('.result')

  
    if (player.value == "pierre" && choice == "papier" || player.value == "papier" && choice == "ciseaux" || player.value == "ciseaux" && choice == "pierre" ) {
      
      resultdiv.innerHTML = `<div style="color:red">Vous avez Perdu</div>`
      score_comp++
    } else if(player.value == "pierre" && choice == "ciseaux" || player.value == "papier" && choice == "pierre"||player.value == "ciseaux" && choice == "papier") {
     
      resultdiv.innerHTML =  `<div style="color:green">Vous avez Gagné</div>`
      score_player++
    }
    else if(player.value == "ciseaux" && choice == "ciseaux" || player.value == "papier" && choice == "papier" || player.value == "pierre" && choice == "pierre") {
      
      resultdiv.innerText = "égalité"
    }
    
    switch (choice) {
      case "pierre":
         icon = "fa-regular fa-hand-back-fist"
        break;
        case "papier":
         icon = "fa-regular fa-hand"
        break; 
        case "ciseaux":
         icon = "fa-regular fa-hand-scissors"
        break;  
  
    }
    switch (player.value) {
      case "pierre":
         iconP = "fa-regular fa-hand-back-fist"
        break;
        case "papier":
         iconP = "fa-regular fa-hand"
        break; 
        case "ciseaux":
         iconP = "fa-regular fa-hand-scissors"
        break;  
    
    }

    Toastify({
      text: `Choix de Joueur est ${player.value}`,
      duration: 3000,
      newWindow: true,
      close: false,
      gravity: "top", // `top` or `bottom`
      position: "left", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        color: "#6581c3",
        fontFamily : "Inter",
        fontWeight : 900,
        background : "#fff",
      },
      onClick: function(){} // Callback after click
    }).showToast(); 
      Toastify({
      text: `Choix d'Ordinateur est ${choice}`,
      duration: 3000,
      newWindow: true,
      close: false,
      gravity: "top", // `top` or `bottom`
      position: "right", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        color: "#6581c3",
        fontFamily : "Inter",
        fontWeight : 900,
        background : "#fff",
      },
      onClick: function(){} // Callback after click
    }).showToast();   
    let score = document.createElement('p')
    resultdiv.appendChild(score)
    score.innerHTML = `<div style="color:lightblue"> <i class="${iconP}" style="font-size:56px;"></i> utilisateur ${score_player} - ${score_comp} ordinateur <i class="${icon}" style="font-size:56px;"></i></div>`
 
    while (score_comp == 10 || score_player == 10) {
      

      resultdiv.innerHTML = `<button style="background:#fff;border:1px solid #000 color:green;"  onclick="Choix(pierre)">Nouvelle Partie</button>`
      score_comp = 0;
      score_player = 0;
      resultdiv.removeChild(score)
   }
 
 
  }






