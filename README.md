# Zanzibar : le guide complet 2026

Page de vente du guide de voyage Zanzibar de Get Lost DZ. Site statique (HTML, CSS, un peu de JavaScript), publié avec GitHub Pages.

## Brancher le lien de paiement Whop

1. Dans Whop : **Dashboard › Checkout links › + Create checkout link**, type **One-time**, prix **10 $**.
2. Dans **Advanced options › Redirect after checkout**, mettez l'adresse de `merci.html` (par exemple `https://lyaminedb1.github.io/zanzibar-guide/merci.html`).
3. Copiez le lien et collez-le dans `script.js`, ligne `WHOP_CHECKOUT_URL = "";`, entre les guillemets.

Les deux boutons « Acheter » (en haut et en bas de la page) utilisent ce même lien. Tant qu'il est vide, ils affichent « Bientôt disponible » et ne sont pas cliquables.

## Changer le prix

Le prix affiché sur la page est du texte : si vous changez le prix dans Whop, changez aussi `10 $` et `19,99 $` dans `index.html` (deux endroits : en haut et en bas).

## À compléter avant de lancer

Dans `cgv.html`, `remboursement.html` et `mentions-legales.html`, remplacez tous les champs entre crochets surlignés (nom, SIRET, adresse, e-mail, date, médiateur).

## Fichiers

- `index.html` : la page de vente (français et anglais)
- `script.js` : le lien Whop et le changement de langue
- `styles.css` : le design
- `merci.html` : la page après paiement
- `cgv.html`, `remboursement.html`, `mentions-legales.html` : pages légales
- `assets/` : les photos
