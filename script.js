document.addEventListener('DOMContentLoaded', function () {

    document.getElementById('formules-button').addEventListener('click', function () {
      window.location.href = 'formules.html';
    });
  
    document.getElementById('entrees-button').addEventListener('click', function () {
      window.location.href = 'entrees.html';
    });
  
    document.getElementById('plats-button').addEventListener('click', function () {
      window.location.href = 'plats.html';
    });
  
    document.getElementById('desserts-button').addEventListener('click', function () {
      window.location.href = 'desserts.html';
    });
  
    document.getElementById('boissons-button').addEventListener('click', function () {
      window.location.href = 'boissons.html';
    });
  
    document.getElementById('chichas-button').addEventListener('click', function () {
      window.location.href = 'chichas.html';
    });
});
const instagramIcon = document.querySelector('.instagram-icon');

if (instagramIcon) {
    instagramIcon.addEventListener('click', function() {
        window.location.href = 'https://www.instagram.com/obaratie77/';
    });
}

function goToHome() {
    window.location.href = "home.html";
}

document.getElementById("logo").addEventListener("click", goToHome);
document.getElementById("menu-title").addEventListener("click", goToHome);
