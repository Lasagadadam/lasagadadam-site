/* Contenu du site : modifie ici, pas dans le HTML.
   Les chiffres sont à mettre à jour à la main (ou demande-moi). */
window.SITE = {
  name: "Adam",
  email: "lasagadadam@gmail.com",
  socials: [
    { platform: "Instagram", handle: "@lasagadadam2.0", followers: 8440, url: "https://www.instagram.com/lasagadadam2.0/" },
    { platform: "TikTok", handle: "@lasagadadam", followers: 6400, url: "https://www.tiktok.com/@lasagadadam" }
  ],
  /* Marques avec qui j'ai travaillé (texte pour l'instant, logos possibles plus tard).
     Liste vide = la bande disparaît. */
  sponsors: ["UGREEN", "K&F Concept", "PGYTECH", "Joby", "Autocut", "Fifine"],
  /* Les reels du portfolio. Le premier est celui « à la une ».
     title : texte affiché sur la vignette (vide = « Voir le reel »)
     cover : image de couverture, ex. "assets/covers/reel-1.webp" (vide = vignette bleue) */
  /* « Mes liens » : tout ce qu'il y avait sur Linktree (sauf la marque de vêtements).
     group : titre du bloc · title : nom · detail : petite précision · url : lien.
     Une ligne avec url vide est cachée tant que le lien n'est pas rempli. */
  links: [
    { group: "Réseaux", title: "Instagram", detail: "@lasagadadam2.0", url: "https://www.instagram.com/lasagadadam2.0/" },
    { group: "Réseaux", title: "TikTok", detail: "@lasagadadam", url: "https://www.tiktok.com/@lasagadadam" },
    { group: "Réseaux", title: "YouTube", detail: "", url: "" },
    { group: "Réseaux", title: "Twitch", detail: "", url: "" },
    { group: "Projets", title: "Klyra", detail: "L'organisation des créateurs de contenu", url: "https://klyra-fr.netlify.app" },
    { group: "Projets", title: "Portfolio montage vidéo", detail: "Mes montages", url: "https://kasbu.bio/adaz" },
    { group: "E-book", title: "Guide du Créateur 01 : Créer", detail: "Comment commencer à créer du contenu en 2026", url: "" },
    { group: "Contact", title: "Me contacter", detail: "lasagadadam@gmail.com", url: "mailto:lasagadadam@gmail.com" }
  ],
  reels: [
    { url: "https://www.instagram.com/reel/DVjGbq4iifj/", title: "", cover: "" },
    { url: "https://www.instagram.com/reel/Dc3vVpYiqmo/", title: "", cover: "" },
    { url: "https://www.instagram.com/reel/DZzb6DeB620/", title: "", cover: "" }
  ]
};
