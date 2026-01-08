// ============================
// CARTES CLIQUABLES
// ============================

document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".card[data-link]");

    cards.forEach(card => {
        card.addEventListener("click", () => {
            const link = card.dataset.link;
            if (link) {
                window.open(link, "_blank"); // nouvel onglet
            }
        });

        // accessibilité : clic clavier (Entrée)
        card.setAttribute("tabindex", "0");
        card.addEventListener("keydown", (e) => {
            if (e.key === "Enter") {
                const link = card.dataset.link;
                if (link) {
                    window.open(link, "_blank");
                }
            }
        });
    });
});
