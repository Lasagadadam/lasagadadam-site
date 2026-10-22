/* Une entrée = une ressource sur la page « Ressources ».
   Pour en ajouter une : copie un bloc, change les champs, mets le fichier dans le dossier ressources/.

   id           : identifiant court, sans espace
   title        : titre affiché
   description  : une ou deux phrases
   category     : Tournage, Montage, Réseaux ou Collaboration
   format       : ce que c'est (Checklist interactive, PDF, Modèle...)
   detail       : petite précision (ex. « 35 points »), peut rester vide
   href         : fichier à ouvrir (page web ou PDF)
   download     : true = le bouton dit « Télécharger » (pour les PDF)
   video        : lien de la vidéo où la ressource est donnée, peut rester vide
   added        : date d'ajout AAAA-MM-JJ (la plus récente s'affiche en premier)
*/
window.RESOURCES = [
  {
    id: "checklist-tournage",
    title: "Checklist avant de tourner",
    description: "Tout ce qu'il faut vérifier avant d'appuyer sur REC : caméra, son, lumière, cadre et sauvegarde. Tu coches au fur et à mesure et ta progression est gardée.",
    category: "Tournage",
    format: "Checklist interactive",
    detail: "35 points",
    href: "ressources/checklist-tournage.html",
    download: false,
    video: "",
    added: "2026-10-22"
  }
];
