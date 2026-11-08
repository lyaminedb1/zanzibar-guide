// ============================================================
// LIEN DE PAIEMENT WHOP
// Collez ici votre lien de paiement Whop (Dashboard > Checkout links),
// entre les guillemets. Exemple : "https://whop.com/checkout/plan_XXXX"
// Tant que ce champ est vide, les boutons affichent « Bientôt disponible ».
// ============================================================
const WHOP_CHECKOUT_URL = "https://whop.com/checkout/plan_gBcRqi0FP0OzR";

// ------------------------------------------------------------
// Boutons d'achat : les éléments avec la classe "buy" ET l'attribut data-buy
// (le bouton de téléchargement de merci.html n'est pas concerné)
// ------------------------------------------------------------
function setupBuyButtons() {
  const ready = WHOP_CHECKOUT_URL.trim().startsWith("https://");
  document.querySelectorAll(".buy[data-buy]").forEach((btn) => {
    if (ready) {
      btn.href = WHOP_CHECKOUT_URL.trim();
      btn.removeAttribute("aria-disabled");
      btn.classList.remove("is-disabled");
    } else {
      btn.removeAttribute("href");
      btn.setAttribute("aria-disabled", "true");
      btn.classList.add("is-disabled");
    }
  });
  document.querySelectorAll(".buy-soon").forEach((el) => {
    el.hidden = ready;
  });
  document.querySelectorAll(".buy-ready").forEach((el) => {
    el.hidden = !ready;
  });
}

// ------------------------------------------------------------
// Langue : FR par défaut, bouton FR / EN, choix mémorisé
// ------------------------------------------------------------
function setLang(lang) {
  document.documentElement.lang = lang;
  document.documentElement.dataset.lang = lang;
  document.querySelectorAll("[data-set-lang]").forEach((b) => {
    b.setAttribute("aria-pressed", String(b.dataset.setLang === lang));
  });
  try {
    localStorage.setItem("zg-lang", lang);
  } catch (e) {
    /* stockage indisponible : on garde le choix pour cette visite */
  }
}

function setupLang() {
  let saved = null;
  try {
    saved = localStorage.getItem("zg-lang");
  } catch (e) {
    saved = null;
  }
  setLang(saved === "en" ? "en" : "fr");
  document.querySelectorAll("[data-set-lang]").forEach((b) => {
    b.addEventListener("click", () => setLang(b.dataset.setLang));
  });
}

document.addEventListener("DOMContentLoaded", () => {
  setupBuyButtons();
  setupLang();
});
