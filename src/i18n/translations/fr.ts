/**
 * French (fr) — UI strings
 *
 * Keys not present here will fall back to the default locale (zh).
 */

import type { UIStrings } from '../types';

export const uiStrings: UIStrings = {
  // ── Navigation ──────────────────────────────────────────────
  'nav.home': 'Accueil',
  'nav.posts': 'Articles',
  'nav.categories': 'Catégories',
  'nav.tags': 'Étiquettes',
  'nav.archives': 'Archives',
  'nav.friends': 'Amis',
  'nav.about': 'À propos',
  'nav.music': 'Musique',
  'nav.weekly': 'Hebdomadaire',

  // ── Common ──────────────────────────────────────────────────
  'common.search': 'Rechercher',
  'common.close': 'Fermer',
  'common.copy': 'Copier',
  'common.copied': 'Copié!',
  'common.loading': 'Chargement...',
  'common.noResults': 'Aucun résultat trouvé',
  'common.backToTop': 'Retour au début',
  'common.darkMode': 'Mode sombre',
  'common.lightMode': 'Mode clair',
  'common.toggleTheme': 'Basculer le thème',
  'common.language': 'Langue',
  'common.toc': 'Table des matières',
  'common.expand': 'Développer',
  'common.collapse': 'Réduire',
  'common.menuLabel': 'Menu {name}',
  'common.openMenu': 'Ouvrir le menu',
  'common.closeMenu': 'Fermer le menu',

  // ── Post ────────────────────────────────────────────────────
  'post.readMore': 'Lire la suite',
  'post.totalPosts': '{count} articles',
  'post.stickyPosts': 'Articles épinglés',
  'post.postList': 'Articles',
  'post.featuredCategories': 'Catégories en vedette',
  'post.yearPosts': '{count} articles',
  'post.readingTime': '{time} min de lecture',
  'post.wordCount': '{count} mots',
  'post.publishedAt': 'Publié le {date}',
  'post.updatedAt': 'Mis à jour le {date}',
  'post.prevPost': 'Précédent',
  'post.nextPost': 'Suivant',
  'post.relatedPosts': 'Articles connexes',
  'post.seriesNavigation': 'Navigation en série',
  'post.seriesPrev': 'Précédent',
  'post.seriesNext': 'Suivant',
  'post.fallbackNotice': "Cet article n'est pas encore disponible en {lang}. Affichage de l'original.",
  'post.draft': 'Brouillon',
  'post.pinned': 'Épinglé',
  'post.noPostsFound': 'Aucun article trouvé',

  // ── Categories & Tags ───────────────────────────────────────
  'category.allCategories': 'Toutes les catégories',
  'category.postsInCategory': 'Articles dans {name}',
  'category.totalCategories': '{count} catégories',
  'category.categoryLabel': 'Catégorie',

  // ── Category Names ─────────────────────────────────────────
  'categories.annonces': 'Annonces',
  'categories.notes': 'Notes',
  'categories.outils': 'Outils',
  'categories.jeux': 'Jeux',
  'tag.allTags': 'Toutes les étiquettes',
  'tag.postsWithTag': 'Articles étiquetés « {name} »',
  'tag.totalTags': '{count} étiquettes',
  'tag.all': 'Tous',
  'tag.postCount': '{count} articles',

  // ── Archives ────────────────────────────────────────────────
  'archives.title': 'Archives',
  'archives.totalPosts': '{count} articles',

  // ── Search ──────────────────────────────────────────────────
  'search.placeholder': 'Rechercher par mot-clé',
  'search.label': 'Rechercher sur ce site',
  'search.clear': 'Effacer',
  'search.loadMore': 'Charger plus de résultats',
  'search.filters': 'Filtres',
  'search.noResults': 'Aucun résultat trouvé',
  'search.manyResults': '[COUNT] résultats',
  'search.oneResult': '[COUNT] résultat',
  'search.altSearch': 'Aucun résultat trouvé. Affichage des résultats pour [DIFFERENT_TERM]',
  'search.suggestion': 'Aucun résultat trouvé. Essayez de rechercher:',
  'search.searching': 'Recherche de [SEARCH_TERM]...',
  'search.dialogTitle': 'Rechercher des articles',
  'search.dialogHint': 'Tapez des mots-clés pour rechercher des articles de blog',
  'search.dialogClose': 'Fermer',
  'search.dialogSelect': 'Sélectionner',
  'search.dialogOpen': 'Ouvrir',

  // ── Friends ─────────────────────────────────────────────────
  'friends.title': 'Amis',
  'friends.applyTitle': 'Demander un lien amical',
  'friends.applyDesc': 'Veuillez laisser un commentaire sur cette page, format ci-dessous',
  'friends.siteName': 'Nom du site',
  'friends.siteUrl': 'URL du site',
  'friends.ownerName': 'Nom',
  'friends.siteDesc': 'Description',
  'friends.avatarUrl': "URL de l'avatar",
  'friends.themeColor': 'Couleur du thème',
  'friends.submit': 'Soumettre',
  'friends.copySuccess': 'Copié dans le presse-papiers',
  'friends.copyFail': 'Échec de la copie, veuillez copier manuellement',
  'friends.generateFormat': 'Générer le format',
  'friends.copyFormat': 'Copier le format',
  'friends.sitePlaceholder': 'Mon Blog',
  'friends.ownerPlaceholder': 'Votre nom',
  'friends.urlPlaceholder': 'https://votre-site.com',
  'friends.descPlaceholder': 'Brève description...',
  'friends.imagePlaceholder': 'https://...',
  'friends.previewTitle': 'Aperçu de la configuration',
  'friends.copyConfig': 'Copier la configuration',
  'friends.copiedConfig': 'Copié!',
  'friends.hint': 'Conseil: Copiez le code ci-dessus et collez-le dans la section commentaire ci-dessous.',

  // ── Code Block ──────────────────────────────────────────────
  'code.copy': 'Copier le code',
  'code.copied': 'Copié!',
  'code.fullscreen': 'Plein écran',
  'code.exitFullscreen': 'Quitter le plein écran',
  'code.wrapLines': 'Habillage du texte',
  'code.viewSource': 'Afficher la source',
  'code.viewRendered': 'Afficher le rendu',

  // ── Diagram / Infographic ───────────────────────────────────
  'diagram.fullscreen': 'Plein écran',
  'diagram.exitFullscreen': 'Quitter le plein écran',
  'diagram.viewSource': 'Afficher la source',
  'diagram.zoomIn': 'Agrandir',
  'diagram.zoomOut': 'Réduire',
  'diagram.resetZoom': 'Réinitialiser le zoom',
  'diagram.fitToScreen': "Ajuster à l'écran",
  'diagram.download': "Télécharger l'image",

  // ── Image Lightbox ──────────────────────────────────────────
  'image.zoomIn': 'Agrandir',
  'image.zoomOut': 'Réduire',
  'image.resetZoom': 'Réinitialiser',
  'image.resetZoomRotate': 'Réinitialiser le zoom et la rotation',
  'image.rotate': 'Pivoter de 90°',
  'image.close': 'Fermer',
  'image.prev': 'Précédent',
  'image.next': 'Suivant',
  'image.counter': '{current} / {total}',
  'image.hintDesktop': "Double-cliquez pour agrandir · Faites défiler/pincer pour mettre à l'échelle",
  'image.hintMobile': "Double-tapez pour agrandir · Pincez pour mettre à l'échelle",

  // ── Media Controls ──────────────────────────────────────────
  'media.play': 'Lecture',
  'media.pause': 'Pause',
  'media.mute': 'Couper le son',
  'media.unmute': 'Rétablir le son',
  'media.fullscreen': 'Plein écran',
  'media.exitFullscreen': 'Quitter le plein écran',
  'media.pictureInPicture': "Image dans l'image",
  'media.playbackSpeed': 'Vitesse de lecture',
  'media.download': 'Télécharger',
  'media.prevTrack': 'Piste précédente',
  'media.nextTrack': 'Piste suivante',
  'media.volume': 'Volume {percent}%',
  'media.progress': 'Progression de la lecture',
  'media.playModeOrder': 'Séquentiel',
  'media.playModeRandom': 'Aléatoire',
  'media.playModeLoop': 'Répéter une fois',

  // ── Footer ──────────────────────────────────────────────────
  'footer.poweredBy': 'Alimenté par {name}',
  'footer.poweredByTheme': 'Propulsé par le thème',
  'footer.inspiredBy': 'Inspiré par',
  'footer.totalPosts': '{count} articles',
  'footer.totalWords': '{count} mots',
  'footer.totalWordsTitle': 'Total des mots',
  'footer.readingTimeTitle': 'Temps de lecture total',
  'footer.postCountTitle': 'Articles totaux',
  'footer.runningDays': 'Fonctionnement depuis {days} jours',
  'footer.wordUnit': 'mots',
  'footer.postUnit': 'articles',

  // ── Pagination ──────────────────────────────────────────────
  'pagination.prev': 'Précédent',
  'pagination.next': 'Suivant',
  'pagination.page': 'Page {page}',
  'pagination.currentPage': 'Page {page}, page actuelle',
  'pagination.of': 'de {total}',

  // ── Breadcrumb ──────────────────────────────────────────────
  'breadcrumb.home': 'Accueil',
  'breadcrumb.goToCategory': 'Aller à la catégorie {name}',

  // ── Floating Group ──────────────────────────────────────────
  'floating.backToTop': 'Haut de page',
  'floating.scrollToBottom': 'Bas de page',
  'floating.toggleTheme': 'Basculer le thème',
  'floating.christmas': 'Basculer les effets de Noël',
  'floating.bgm': 'Musique de fond',
  'floating.toggleToolbar': "Basculer la barre d'outils",

  // ── Announcement ────────────────────────────────────────────
  'announcement.title': 'Annonces',
  'announcement.new': 'Nouveau',
  'announcement.count': '{count} annonces',
  'announcement.unreadCount': '{count} non lus',
  'announcement.markAllRead': 'Marquer tout comme lu',
  'announcement.dismiss': 'Ignorer',
  'announcement.learnMore': 'En savoir plus',
  'announcement.empty': 'Aucune annonce',
  'announcement.emptyHint': 'Les nouvelles annonces apparaîtront ici',

  // ── Quiz ────────────────────────────────────────────────────
  'quiz.check': 'Vérifier',
  'quiz.correct': 'Correct!',
  'quiz.incorrect': 'Incorrect, réessayez',
  'quiz.incorrectAnswer': 'Incorrect. La bonne réponse est {answer}.',
  'quiz.submitAnswer': 'Soumettre ({count} sélectionnés)',
  'quiz.commonMistakes': 'Erreurs courantes:',
  'quiz.parseFailed': "Échec de l'analyse du quiz",
  'quiz.showAnswer': 'Afficher la réponse',
  'quiz.hideAnswer': 'Masquer la réponse',
  'quiz.reset': 'Réinitialiser',
  'quiz.score': 'Score: {score}/{total}',
  'quiz.completed': 'Terminé!',
  'quiz.fillBlank': 'Tapez votre réponse...',
  'quiz.selectOption': 'Sélectionnez une option',
  'quiz.single': 'Choix unique',
  'quiz.multi': 'Choix multiples',
  'quiz.trueFalse': 'Vrai ou Faux',
  'quiz.fill': 'Remplir le blanc',
  'quiz.optionTrue': 'Vrai',
  'quiz.optionFalse': 'Faux',
  'quiz.clickToReveal': 'Cliquez pour révéler la réponse',
  'quiz.quizOptions': '{type} options',
  'quiz.option': 'Option',
  'quiz.trueFalseCorrect': 'Correct!',
  'quiz.trueFalseIncorrect': "Incorrect. L'affirmation est {answer}.",

  // ── Encrypted Block ─────────────────────────────────────────
  'encrypted.locked': 'Contenu chiffré',
  'encrypted.placeholder': 'Entrez le mot de passe pour déverrouiller',
  'encrypted.submit': 'Déverrouiller',
  'encrypted.incorrect': 'Mauvais mot de passe',

  // ── Encrypted Post ─────────────────────────────────────────
  'encrypted.post.title': 'Cet article est chiffré',
  'encrypted.post.description': 'Veuillez entrer le mot de passe pour afficher le contenu',
  'encrypted.post.rssNotice': 'Cet article est chiffré. Veuillez le consulter sur le site Web.',

  // ── 404 ─────────────────────────────────────────────────────
  'notFound.title': 'Page non trouvée',
  'notFound.description': "La page que vous recherchez n'existe pas",
  'notFound.backHome': "Retour à l'accueil",
  'notFound.browseArchives': 'Parcourir les archives',
  'notFound.message': 'Miaou? La page a été mangée~',

  // ── Category Stats ────────────────────────────────────────
  'category.subCategoryCount': '{count} sous-catégories',
  'category.postCount': '{count} articles',

  // ── Post Card ─────────────────────────────────────────────
  'post.readingTimeTooltip': 'Temps de lecture estimé: {time}',

  // ── Featured Series ─────────────────────────────────────────
  'series.latestPost': 'Dernier',
  'series.viewAll': 'Voir tout',
  'series.postCount': '{count} articles',
  'series.noPosts': 'Aucun article dans cette série',
  'series.rss': 'Flux RSS',
  'series.chromeExtension': 'Extension Chrome',
  'series.docs': 'Documentation',

  // ── Home Info ───────────────────────────────────────────────
  'homeInfo.articles': 'Articles',
  'homeInfo.categories': 'Catégories',
  'homeInfo.tags': 'Étiquettes',

  // ── Drawer ──────────────────────────────────────────────────
  'drawer.navMenu': 'Menu de navigation',
  'drawer.close': 'Fermer le menu',
  'drawer.openMenu': 'Ouvrir le menu',

  // ── Summary Panel ───────────────────────────────────────────
  'summary.description': 'Résumé',
  'summary.ai': 'Résumé IA',
  'summary.auto': 'Résumé',

  // ── Random Posts ────────────────────────────────────────────
  'post.randomPosts': 'Articles aléatoires',

  // ── Tag Component ───────────────────────────────────────────
  'tag.expandAll': 'Afficher tout',
  'tag.viewTagPosts': 'Afficher {count} articles étiquetés « {tag} »',

  // ── Audio Player ────────────────────────────────────────────
  'audio.loading': 'Chargement de la liste de lecture...',
  'audio.loadError': 'Échec du chargement: {error}',
  'audio.retry': 'Réessayer',
  'audio.empty': 'Aucune piste',
  'audio.listTab': 'Liste {index}',
  'audio.closePanel': 'Fermer le panneau',

  // ── Table of Contents ───────────────────────────────────────
  'toc.title': 'Table des matières',
  'toc.expand': 'Développer la table des matières',
  'toc.empty': 'Aucun en-tête',

  // ── Embed ─────────────────────────────────────────────────
  'embed.loadingTweet': 'Chargement du Tweet',

  // ── Search Shortcut ───────────────────────────────────────
  'search.searchShortcut': 'Rechercher ({shortcut})',

  // ── Sider Segmented ─────────────────────────────────────────
  'sider.overview': 'Aperçu',
  'sider.toc': 'Contenu',
  'sider.series': 'Série',

  // ── Copy Link ───────────────────────────────────────────────
  'cover.copyLink': 'Copier le lien',

  // ── Comment ────────────────────────────────────────────────
  'comment.prompt': 'Si vous avez apprécié, laissez un commentaire~',
};
