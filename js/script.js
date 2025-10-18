document.getElementById("monForm").addEventListener("submit", function(e) {
    e.preventDefault(); // empêche l’envoi automatique du formulaire

    // Récupérer tous les champs obligatoires
    let champsObligatoires = this.querySelectorAll("[required]");
    let toutRempli = true;

    champsObligatoires.forEach(champ => {
      if (!champ.value.trim()) { // si vide
        toutRempli = false;
      }
    });

    if (toutRempli) {
      alert("Votre candidature à bien été envoyé !");
      // Ici, vous pouvez soumettre le formulaire si besoin :
      this.submit();
    } else {
      alert("⚠️ Merci de remplir tous les champs obligatoires.");
    }
});


document.getElementById("monForm2").addEventListener("submit", function(e) {
    e.preventDefault(); // empêche l’envoi automatique du formulaire

    // Récupérer tous les champs obligatoires
    let champsObligatoires = this.querySelectorAll("[required]");
    let toutRempli = true;

    champsObligatoires.forEach(champ => {
      if (!champ.value.trim()) { // si vide
        toutRempli = false;
      }
    });

    if (toutRempli) {
      alert("Votre message à bien été envoyé !");
      // Ici, vous pouvez soumettre le formulaire si besoin :
      this.submit();
    } else {
      alert("⚠️ Merci de remplir tous les champs obligatoires.");
    }
});