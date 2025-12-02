function gererFormulaire(formId, messageSucces) {
    const form = document.getElementById(formId);
    if (!form) return;

    form.addEventListener("submit", async function(e) {
        e.preventDefault(); // On gère tout manuellement

        let toutRempli = true;

        // Vérification des champs obligatoires
        this.querySelectorAll("[required]").forEach(champ => {
            if (!champ.value.trim()) toutRempli = false;
        });

        if (!toutRempli) {
            alert("⚠️ Merci de remplir tous les champs obligatoires.");
            return;
        }

        // Affiche ton message
        alert(messageSucces);

        // Envoi du formulaire vers Formspree
        const data = new FormData(this);

        await fetch(this.action, {
            method: "POST",
            body: data,
            headers: { "Accept": "application/json" }
        });

        // Redirection manuelle GRATUITE
        window.location.href = "https://www.palama-depotage.re/pages/merci.html";
    });
}

gererFormulaire("monForm", "Votre candidature a bien été envoyée !");
gererFormulaire("monForm2", "Votre message a bien été envoyé !");
