// Fonction générale pour valider un formulaire
function gererFormulaire(formId, messageSucces) {
    const form = document.getElementById(formId);
    if (!form) return; // Si le formulaire n'existe pas sur la page, on sort

    form.addEventListener("submit", function(e) {
        e.preventDefault(); // Empêche l'envoi automatique

        let toutRempli = true;

        // Vérification des champs obligatoires
        this.querySelectorAll("[required]").forEach(champ => {
            if (!champ.value.trim()) toutRempli = false;
        });

        if (toutRempli) {
            alert(messageSucces);
            this.submit(); // Décommenter si tu veux envoyer réellement le formulaire
        } else {
            alert("⚠️ Merci de remplir tous les champs obligatoires.");
        }
    });
}

// Formulaire candidature (monForm) – fichiers facultatifs
gererFormulaire("monForm", "Votre candidature a bien été envoyée !");

// Formulaire contact/message (monForm2)
gererFormulaire("monForm2", "Votre message a bien été envoyé !");
