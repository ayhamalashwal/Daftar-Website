// Daftar website translations and small interactions.
// Paste your Google Drive sharing/download URL below to enable the alternative button.
const GOOGLE_DRIVE_URL = "https://drive.google.com/file/d/1L-ZbE-35i61v3_zS7YUpmjucSyrXdX5F/view?usp=sharing";

const translations = {
en: {
announcement:"Made for the people who keep business moving.",navFeatures:"Features",navPreview:"App preview",navHow:"Getting started",getApp:"Get Daftar",
eyebrow:"A simpler way to keep your books",heroTitle:'Your business,<br><span class="gradient-text">in good order.</span>',heroText:"Keep track of customers, suppliers, cash movements, and balances — without the paper clutter. Daftar is built for the everyday reality of small businesses.",downloadAndroid:"Download for Android",explore:"Explore the app",heroProof:"Designed for shopkeepers, traders, and small businesses.",chipOffline:"Offline-first",chipLanguages:"3 languages",chipCurrencies:"Multi-currency",floatingLedger:"Clear records",floatingLedgerSub:"Every transaction, in one place",currencyCard:"Three currencies. Separate balances.",backupTitle:"Your records, backed up",backupSub:"Google Drive backup option",
builtFor:"MADE FOR EVERYDAY BUSINESS",trustCustomers:"Customer accounts",trustSuppliers:"Supplier accounts",trustCash:"Cash in & cash out",trustRecords:"Reports & exports",featuresEyebrow:"Less paperwork. More clarity.",featuresTitle:'The essentials of your business.<br><span class="muted-title">All in one place.</span>',featuresIntro:"From the first entry of the day to the end-of-month report, Daftar helps make your records easier to follow.",
feature1Title:"Customers & suppliers",feature1Text:"Keep account histories organized, see who owes what, and find past transactions without flipping through notebooks.",sampleCustomer:"Customer account",sampleRecent:"Recent transaction",sampleSupplier:"Supplier account",sampleHistory:"Account history",sampleAccount:"Business account",sampleBalance:"Balance summary",sampleSaved:"Organized",feature2Title:"Balances that make sense",feature2Text:"Track Yemeni rials, US dollars, and Saudi riyals independently — each currency keeps its own balance.",feature3Title:"Barcode scanning",feature3Text:"Scan a product barcode to help find and manage items faster when recording a transaction.",scanCaption:"Ready to scan",feature4Title:"Receipts & reminders",feature4Text:"Share transaction receipts and account reminders through WhatsApp, with clear amounts and currency balances.",messageBusiness:"Business receipt",messageReceipt:"Transaction receipt",messageAmount:"Amount: 5,000 YER",messageBalance:"Balance summary included",feature5Title:"Your records, ready to share",feature5Text:"Export your information to Excel, CSV, or PDF for reviewing, printing, and keeping a copy of your business records.",fileReady:"Ready to export",feature6Title:"A backup when you need one",feature6Text:"Use the Google Drive backup feature to keep a copy of your records. Backups require signing in and an internet connection.",backupIllustration:"Backup file",
previewEyebrow:"A look inside",previewTitle:'Simple screens.<br><span class="muted-title">Useful details.</span>',previewIntro:"Explore the real interface. Daftar keeps the important actions close at hand.",shotHistory:"Transaction history",shotHistorySub:"Review recorded activity",shotEntry:"Add a transaction",shotEntrySub:"Record a business movement",shotProducts:"Product list",shotProductsSub:"Find products quickly",shotScanner:"Barcode scanner",shotScannerSub:"Scan supported product codes",shotSettings:"Settings & tools",shotSettingsSub:"Language, exports, and backup",
howEyebrow:"Start in a few steps",howTitle:'A clearer ledger<br>starts <span class="mint-text">today.</span>',howText:"Download Daftar for Android, install it on your device, and begin organizing your business records.",step1Title:"Download the APK",step1Text:"Open the latest release and download the APK file.",step2Title:"Install on Android",step2Text:"If prompted, allow your browser or file manager to install this app.",step3Title:"Set up your records",step3Text:"Add customers, suppliers, products, and your first transaction.",downloadNote:"Android APK · Download from the latest release",githubOption:"GitHub Releases",githubOptionSub:"Recommended · Latest APK",openReleases:"Open releases ↗",driveOption:"Google Drive",driveOptionSub:"Alternative download",openDrive:"Open Drive ↗",
ctaEyebrow:"Your business deserves clarity",ctaTitle:'Make every entry<br> <span class="gradient-text">count.</span>',ctaText:"Keep your day-to-day business records in one place with Daftar.",getStarted:"Get started with Daftar",footerTagline:"A practical ledger for everyday business.",footerDownload:"Download",footerNote:"Made to help small businesses keep track.",backTop:"Back to top ↑"
},
fr: {
announcement:"Pensé pour celles et ceux qui font vivre le commerce.",navFeatures:"Fonctionnalités",navPreview:"Aperçu de l’app",navHow:"Bien démarrer",getApp:"Obtenir Daftar",
eyebrow:"Une façon plus simple de tenir vos comptes",heroTitle:'Votre activité,<br><span class="gradient-text">en bon ordre.</span>',heroText:"Suivez vos clients, fournisseurs, mouvements de caisse et soldes sans vous perdre dans les papiers. Daftar est conçu pour le quotidien des petites entreprises.",downloadAndroid:"Télécharger pour Android",explore:"Découvrir l’application",heroProof:"Conçu pour les commerçants et les petites entreprises.",chipOffline:"Fonctionne hors ligne",chipLanguages:"3 langues",chipCurrencies:"Multi-devises",floatingLedger:"Des comptes clairs",floatingLedgerSub:"Chaque opération au même endroit",currencyCard:"Trois devises. Des soldes séparés.",backupTitle:"Vos données sauvegardées",backupSub:"Sauvegarde Google Drive disponible",
builtFor:"POUR LE COMMERCE AU QUOTIDIEN",trustCustomers:"Comptes clients",trustSuppliers:"Comptes fournisseurs",trustCash:"Entrées et sorties de caisse",trustRecords:"Rapports et exports",featuresEyebrow:"Moins de paperasse. Plus de clarté.",featuresTitle:'L’essentiel de votre activité.<br><span class="muted-title">Au même endroit.</span>',featuresIntro:"De la première opération du jour au rapport de fin de mois, Daftar vous aide à garder des comptes faciles à consulter.",
feature1Title:"Clients et fournisseurs",feature1Text:"Organisez les historiques, voyez les soldes dus et retrouvez les anciennes opérations sans feuilleter des cahiers.",sampleCustomer:"Compte client",sampleRecent:"Opération récente",sampleSupplier:"Compte fournisseur",sampleHistory:"Historique du compte",sampleAccount:"Compte professionnel",sampleBalance:"Résumé du solde",sampleSaved:"Organisé",feature2Title:"Des soldes faciles à comprendre",feature2Text:"Suivez séparément les rials yéménites, les dollars américains et les riyals saoudiens.",feature3Title:"Lecture de codes-barres",feature3Text:"Scannez le code-barres d’un produit pour le retrouver et le gérer plus rapidement lors d’une opération.",scanCaption:"Prêt à scanner",feature4Title:"Reçus et rappels",feature4Text:"Partagez des reçus et des rappels de compte par WhatsApp, avec les montants et soldes dans chaque devise.",messageBusiness:"Reçu commercial",messageReceipt:"Reçu de transaction",messageAmount:"Montant : 5 000 YER",messageBalance:"Résumé des soldes inclus",feature5Title:"Des données prêtes à partager",feature5Text:"Exportez vos données en Excel, CSV ou PDF pour les consulter, les imprimer ou conserver une copie.",fileReady:"Prêt à exporter",feature6Title:"Une sauvegarde quand il le faut",feature6Text:"La sauvegarde Google Drive permet de conserver une copie de vos données. Une connexion et Internet sont nécessaires.",backupIllustration:"Fichier de sauvegarde",
previewEyebrow:"Un aperçu de l’application",previewTitle:'Des écrans simples.<br><span class="muted-title">Des infos utiles.</span>',previewIntro:"Découvrez l’interface réelle de Daftar, où les actions essentielles restent accessibles.",shotHistory:"Historique des opérations",shotHistorySub:"Consulter les mouvements enregistrés",shotEntry:"Ajouter une opération",shotEntrySub:"Enregistrer un mouvement",shotProducts:"Liste des produits",shotProductsSub:"Retrouver rapidement un produit",shotScanner:"Lecteur de codes-barres",shotScannerSub:"Scanner les codes pris en charge",shotSettings:"Paramètres et outils",shotSettingsSub:"Langue, exports et sauvegarde",
howEyebrow:"Commencez en quelques étapes",howTitle:'Une comptabilité plus claire<br>dès <span class="mint-text">aujourd’hui.</span>',howText:"Téléchargez Daftar pour Android, installez l’application et commencez à organiser vos comptes.",step1Title:"Télécharger l’APK",step1Text:"Ouvrez la dernière version et téléchargez le fichier APK.",step2Title:"Installer sur Android",step2Text:"Si nécessaire, autorisez votre navigateur ou gestionnaire de fichiers à installer l’application.",step3Title:"Configurer vos comptes",step3Text:"Ajoutez vos clients, fournisseurs, produits et votre première opération.",downloadNote:"APK Android · Dernière version disponible",githubOption:"Versions GitHub",githubOptionSub:"Recommandé · Dernier APK",openReleases:"Voir les versions ↗",driveOption:"Google Drive",driveOptionSub:"Téléchargement alternatif",openDrive:"Ouvrir Drive ↗",
ctaEyebrow:"Votre activité mérite de la clarté",ctaTitle:'Chaque opération<br><span class="gradient-text">compte.</span>',ctaText:"Gardez vos opérations quotidiennes au même endroit avec Daftar.",getStarted:"Commencer avec Daftar",footerTagline:"Un registre pratique pour le commerce au quotidien.",footerDownload:"Télécharger",footerNote:"Pour aider les petites entreprises à mieux suivre leurs comptes.",backTop:"Retour en haut ↑"
},
ar: {
announcement:"صُمّم لمن يجعلون التجارة والحياة اليومية تسير.",navFeatures:"المميزات",navPreview:"معاينة التطبيق",navHow:"البدء",getApp:"حمّل دفتر",
eyebrow:"طريقة أبسط لتنظيم حساباتك",heroTitle:'تجارتك،<br><span class="gradient-text">مرتبة وواضحة.</span>',heroText:"تابع حسابات العملاء والموردين وحركة النقد والأرصدة دون فوضى الدفاتر الورقية. صُمّم دفتر ليلائم احتياجات الأعمال الصغيرة اليومية.",downloadAndroid:"تحميل لأندرويد",explore:"اكتشف التطبيق",heroProof:"مصمم لأصحاب المحلات والتجار والأعمال الصغيرة.",chipOffline:"يعمل دون اتصال",chipLanguages:"ثلاث لغات",chipCurrencies:"عدة عملات",floatingLedger:"حسابات واضحة",floatingLedgerSub:"كل العمليات في مكان واحد",currencyCard:"ثلاث عملات، وأرصدة منفصلة.",backupTitle:"نسخة احتياطية لسجلاتك",backupSub:"إمكانية النسخ إلى Google Drive",
builtFor:"مصمم للأعمال اليومية",trustCustomers:"حسابات العملاء",trustSuppliers:"حسابات الموردين",trustCash:"الوارد والمنصرف",trustRecords:"التقارير والتصدير",featuresEyebrow:"أوراق أقل. وضوح أكثر.",featuresTitle:'أساسيات تجارتك،<br><span class="muted-title">في مكان واحد.</span>',featuresIntro:"من أول عملية في اليوم حتى تقرير نهاية الشهر، يساعدك دفتر على متابعة سجلاتك بسهولة.",
feature1Title:"العملاء والموردون",feature1Text:"نظّم سجل الحسابات، واعرف المستحقات، واعثر على العمليات السابقة دون تقليب الدفاتر.",sampleCustomer:"حساب عميل",sampleRecent:"عملية حديثة",sampleSupplier:"حساب مورد",sampleHistory:"سجل الحساب",sampleAccount:"حساب تجاري",sampleBalance:"ملخص الرصيد",sampleSaved:"منظّم",feature2Title:"أرصدة واضحة لكل عملة",feature2Text:"تابع الريال اليمني والدولار الأمريكي والريال السعودي بشكل مستقل، مع رصيد منفصل لكل عملة.",feature3Title:"مسح الباركود",feature3Text:"امسح باركود المنتج للوصول إليه وإدارته بسرعة أكبر عند تسجيل العملية.",scanCaption:"جاهز للمسح",feature4Title:"الإيصالات والتذكيرات",feature4Text:"شارك إيصالات العمليات وتذكيرات الحساب عبر واتساب مع توضيح المبالغ وأرصدة العملات.",messageBusiness:"إيصال تجاري",messageReceipt:"إيصال عملية",messageAmount:"المبلغ: ٥٬٠٠٠ ريال يمني",messageBalance:"يتضمن ملخص الأرصدة",feature5Title:"سجلات جاهزة للمشاركة",feature5Text:"صدّر بياناتك إلى Excel أو CSV أو PDF لمراجعتها أو طباعتها أو الاحتفاظ بنسخة منها.",fileReady:"جاهز للتصدير",feature6Title:"نسخة احتياطية عند الحاجة",feature6Text:"تتيح ميزة النسخ الاحتياطي إلى Google Drive الاحتفاظ بنسخة من سجلاتك. يلزم تسجيل الدخول والاتصال بالإنترنت.",backupIllustration:"ملف النسخة الاحتياطية",
previewEyebrow:"نظرة من الداخل",previewTitle:'شاشات بسيطة،<br><span class="muted-title">وتفاصيل مفيدة.</span>',previewIntro:"تعرّف على واجهة التطبيق الحقيقية؛ أهم الأدوات في متناول يدك.",shotHistory:"سجل العمليات",shotHistorySub:"راجع العمليات المسجلة",shotEntry:"إضافة عملية",shotEntrySub:"سجّل حركة تجارية",shotProducts:"قائمة المنتجات",shotProductsSub:"اعثر على المنتجات بسرعة",shotScanner:"ماسح الباركود",shotScannerSub:"امسح الباركود المدعوم",shotSettings:"الإعدادات والأدوات",shotSettingsSub:"اللغة والتصدير والنسخ الاحتياطي",
howEyebrow:"ابدأ في خطوات بسيطة",howTitle:'سجلات أوضح<br>تبدأ <span class="mint-text">اليوم.</span>',howText:"حمّل دفتر لأندرويد وثبّته على جهازك وابدأ بتنظيم سجلات تجارتك.",step1Title:"حمّل ملف APK",step1Text:"افتح أحدث إصدار وحمّل ملف APK.",step2Title:"ثبّت التطبيق",step2Text:"إذا طُلب منك ذلك، اسمح للمتصفح أو مدير الملفات بتثبيت التطبيق.",step3Title:"جهّز حساباتك",step3Text:"أضف العملاء والموردين والمنتجات، ثم سجّل أول عملية.",downloadNote:"تطبيق أندرويد · أحدث إصدار متاح",githubOption:"إصدارات GitHub",githubOptionSub:"موصى به · أحدث APK",openReleases:"عرض الإصدارات ↗",driveOption:"Google Drive",driveOptionSub:"خيار بديل للتحميل",openDrive:"فتح Drive ↗",
ctaEyebrow:"تجارتك تستحق الوضوح",ctaTitle:'اجعل لكل عملية<br><span class="gradient-text">حسابًا واضحًا.</span>',ctaText:"احتفظ بسجلات تجارتك اليومية في مكان واحد مع دفتر.",getStarted:"ابدأ باستخدام دفتر",footerTagline:"دفتر حسابات عملي للأعمال اليومية.",footerDownload:"تحميل",footerNote:"لمساعدة الأعمال الصغيرة على تنظيم حساباتها.",backTop:"العودة للأعلى ↑"
}
};

const languageSelect = document.getElementById("languageSelect");
function setLanguage(lang) {
  const dict = translations[lang] || translations.en;
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  languageSelect.value = lang;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    if (dict[key] !== undefined) el.textContent = dict[key];
  });
  document.querySelectorAll("[data-i18n-html]").forEach(el => {
    const key = el.dataset.i18nHtml;
    if (dict[key] !== undefined) el.innerHTML = dict[key];
  });
  document.querySelectorAll(".screenshot-card").forEach(card => {
    const key = card.dataset.captionKey;
    const title = dict[key] || translations.en[key] || "";
    const caption = card.querySelector(".screenshot-caption b");
    if (caption) caption.textContent = title;
  });
}
languageSelect.addEventListener("change", e => setLanguage(e.target.value));
document.getElementById("year").textContent = new Date().getFullYear();

const downloadModal = document.getElementById("downloadModal");
const downloadTriggers = document.querySelectorAll(".download-menu-trigger");
function openDownloadModal() {
  downloadModal.classList.add("open");
  downloadModal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  downloadModal.querySelector("[data-close-download]")?.focus();
}
function closeDownloadModal() {
  downloadModal.classList.remove("open");
  downloadModal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}
downloadTriggers.forEach(trigger => trigger.addEventListener("click", openDownloadModal));
downloadModal.querySelectorAll("[data-close-download]").forEach(control => control.addEventListener("click", closeDownloadModal));
downloadModal.querySelectorAll(".download-source").forEach(link => link.addEventListener("click", closeDownloadModal));
document.addEventListener("keydown", event => {
  if (event.key === "Escape") {
    closeDownloadModal();
    const activeLightbox = document.getElementById("lightbox");
    if (activeLightbox?.classList.contains("open")) {
      activeLightbox.classList.remove("open");
      activeLightbox.setAttribute("aria-hidden", "true");
      document.body.style.overflow = "";
    }
  }
});

const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const lightboxCaption = document.getElementById("lightboxCaption");
document.querySelectorAll(".screenshot-card").forEach(card => {
  card.addEventListener("click", () => {
    const img = card.querySelector("img");
    const title = card.querySelector(".screenshot-caption b").textContent;
    lightboxImage.src = card.dataset.image;
    lightboxImage.alt = img.alt;
    lightboxCaption.textContent = title;
    lightbox.classList.add("open");
    lightbox.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  });
});
function closeLightbox() {
  lightbox.classList.remove("open");
  lightbox.setAttribute("aria-hidden", "true");
  lightboxImage.src = "";
  document.body.style.overflow = "";
}
document.getElementById("lightboxClose").addEventListener("click", closeLightbox);
lightbox.addEventListener("click", e => { if (e.target === lightbox) closeLightbox(); });
document.addEventListener("keydown", e => { if (e.key === "Escape") { closeLightbox(); closeDownloadModal(); } });
