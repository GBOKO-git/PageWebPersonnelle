function afficherSaisie() {
  let name = document.getElementById("monInput").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;

  alert(
    `Bienvenue ${name}, \n nous avons recu votre messange! \n Nous vous reviendrons bientot !`
  );
}
