let score_player = 0;
let score_comp = 0;
let tentative = 3;
const resultdiv = document.querySelector('.result')

document.querySelector('.choice').style.display = "none"

setTimeout(() => {
  document.querySelector('#container').style.display = "none"
  document.querySelector('.choice').style.display = "block"
}, 2000);


 function Choix(player) {

   document.querySelector('#container').style.display = "none"
   document.querySelector('.choice').style.display = "block"

  let  choixArray =["pierre","papier","ciseaux"]
  let icon = ["fa-regular fa-hand-back-fist"," fa-regular fa-hand","fa-regular fa-hand-scissors"]
  let iconP = ["fa-regular fa-hand-back-fist"," fa-regular fa-hand","fa-regular fa-hand-scissors"]
  let choice = choixArray[Math.floor(Math.random() * choixArray.length)]


  

  
    if (player.value == "pierre" && choice == "papier" || player.value == "papier" && choice == "ciseaux" || player.value == "ciseaux" && choice == "pierre" ) {
      
      resultdiv.innerHTML = `<div style="color:red; text-shadow: 1px 1px 2px red, 0 0 1em blue, 0 0 0.2em blue">Vous avez Perdu</div>`
      score_comp++
    } else if(player.value == "pierre" && choice == "ciseaux" || player.value == "papier" && choice == "pierre"||player.value == "ciseaux" && choice == "papier") {
     
      resultdiv.innerHTML =  `<div style="color:green; text-shadow: 1px 1px 2px red, 0 0 1em blue, 0 0 0.2em blue">Vous avez Gagné</div>`
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
      text: `Choix d'ordinateur est ${choice}`,
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
    score.innerHTML = `<div class="score" style="color:lightblue;text-shadow: 1px 1px 2px red, 0 0 1em blue, 0 0 0.2em blue;"> <i class="${iconP}" style=" animation :shakePlayer 2s ease; font-size:56px;"></i> utilisateur ${score_player} - ${score_comp} ordinateur <i class="${icon}" style="animation :shakeComputer 2s ease; font-size:56px;"></i></div>`
 

 
   tentative--
   console.log(tentative);

   if (tentative == 0){
   
    document.querySelector('#container').style.display = "block"
    document.querySelector('.choice').style.display = "none"


    resultdiv.innerHTML = `
    <div style="margin-top:100px; color:lightblue;text-shadow: 1px 1px 2px red, 0 0 1em blue, 0 0 0.2em blue;"> <i class="${iconP}" style="animation :shakePlayer 2s ease;font-size:56px;"></i> utilisateur ${score_player} - ${score_comp} ordinateur <i class="${icon}"  style="animation :shakeComputer 2s ease; font-size:56px;"></i></div>
    <br/>
    <button class="NouvButton" onclick="reaload()" > Nouvelle Partie<div class="iconButton">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path fill="currentColor" d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"></path></svg>
    </div>
  </button>`
  
    score_comp = 0;
    score_player = 0;
    
   
   tentative = 3
 } 
  
  }


  function reaload() {
    document.querySelector('#container').style.display = "none"
    document.querySelector('.choice').style.display = "block"
    resultdiv.innerHTML = ''
  } 









