/*                                                                         Contador                                                                                   */

document.addEventListener("DOMContentLoaded", function () {
    const weddingDate = new Date("2023-11-12T13:00:00").getTime();

    const countdown = setInterval(function () {
      const now = new Date().getTime();
      const timeRemaining = weddingDate - now;
  
      if (timeRemaining <= 0) {
        clearInterval(countdown);
        document.getElementById("dias").innerHTML = "00";
        document.getElementById("horas").innerHTML = "00";
        document.getElementById("minutos").innerHTML = "00";
        document.getElementById("segundos").innerHTML = "00";
      } else {
        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
  
        document.getElementById("dias").innerHTML = days.toString().padStart(2, "0");
        document.getElementById("horas").innerHTML = hours.toString().padStart(2, "0");
        document.getElementById("minutos").innerHTML = minutes.toString().padStart(2, "0");
        document.getElementById("segundos").innerHTML = seconds.toString().padStart(2, "0");
      }
    }, 1000);
  });

/*                                                                         Maps                                                                                   */
  
function iniciarMap(){
    var coord = {lat:-34.5682722, lng:-58.5913008};
    var map = new google.maps.Map(document.getElementById('map'),{
        zoom: 10,
        center: coord
    });
    var marker = new google.maps.Marker({
        position: coord,
        map: map
    })
}