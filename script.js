

const bocina =document.getElementById("bocina");
const audios = document.getElementById("myAudio");
const musica =new Audio('audio.mp3')

   // Reproducir audio al cargar la página
   window.onload = function() {
    musica.play();
  };

function abrirUbicacion() {
  window.open("https://maps.app.goo.gl/YGatjgVLtuZDrfao7", "_blank");
}

function Confirmar(){
  window.open("https://wa.me/8448922599?text=Gracias%20por%20la%20invitación%20, %20asisiré");
}

// Agrega un evento de clic al elemento de audio
function inicio() {
  if (musica.paused) {
    // Si la música está en pausa, la reproducimos
    musica.play().catch(error => {
      console.error("Error al reproducir el audio:", error);
    });
  } else {
    // Si la música se está reproduciendo, la pausamos
    musica.pause();
  }
}


/* function pauseAudio() {
  audio.pause();
}*/
