export const axes = [
  { number: "01", navLabel: "Contexte", eyebrow: "Contexte industriel", title: "Comprendre l’enjeu", summary: "Le rôle de la pompe CEX, le site et la démarche suivie.", href: "/contexte", tone: "paper" },
  { number: "02", navLabel: "Diagnostic", eyebrow: "Diagnostic GMAO", title: "Mesurer la récurrence", summary: "Les ordres de travail et la lecture responsable des historiques.", href: "/diagnostic", tone: "dark" },
  { number: "03", navLabel: "Technologie", eyebrow: "Technologie", title: "Comparer les solutions", summary: "Presse-étoupe actuel face à la cartouche proposée.", href: "/technologie", tone: "lime" },
  { number: "04", navLabel: "Solution", eyebrow: "Présélection", title: "Dimensionner la garniture", summary: "Conditions de service, interfaces et choix Chesterton 155.", href: "/solution", tone: "dark" },
  { number: "05", navLabel: "Conception", eyebrow: "Conception CATIA V5", title: "Inspecter la maquette 3D", summary: "Assemblage interactif, vues normalisées et encombrement.", href: "/conception", tone: "blue" },
  { number: "06", navLabel: "AMDEC", eyebrow: "Analyse AMDEC", title: "Maîtriser les risques", summary: "Criticité initiale, actions préventives et risque résiduel.", href: "/risques", tone: "orange" },
  { number: "07", navLabel: "Décision", eyebrow: "Décision industrielle", title: "Verrouiller l’intégration", summary: "Les validations nécessaires avant achat et mise en service.", href: "/decision", tone: "paper" },
] as const;

export const maintenanceData = [
  { name: "01CEX102PO", total: 33, seal: 19, rate: 57.6 },
  { name: "01CEX202PO", total: 10, seal: 5, rate: 50 },
  { name: "02CEX102PO", total: 26, seal: 7, rate: 26.9 },
  { name: "02CEX202PO", total: 31, seal: 6, rate: 19.4 },
];

export const comparison = [
  ["Principe", "Fuite contrôlée nécessaire", "Film lubrifiant entre deux faces"],
  ["Maintenance", "Réglage et resserrage périodiques", "Cartouche préréglée, suivi conditionnel"],
  ["Impact arbre", "Frottement continu sur la chemise", "Aucun frottement direct sur l’arbre"],
  ["Fuites", "Variables, dépendantes du serrage", "Très faibles en régime normal"],
];

export const riskRows = [
  { label: "Fuite excessive", before: 32, after: 16 },
  { label: "Débit de rinçage interrompu", before: 32, after: 8 },
  { label: "Échauffement des faces", before: 27, after: 6 },
  { label: "Usure de la chemise", before: 27, after: 6 },
];

export const specs = {
  service: [["Fluide", "Eau déminéralisée propre"], ["Température", "33,2 °C"], ["Rotation", "2 980 tr/min"], ["Débit nominal", "648 m³/h"]],
  interface: [["Portée nominale", "74,60 mm"], ["Portée mesurée", "74,63 mm"], ["Déplacement axial", "≈ 0,07 mm"], ["Passages d’arbre", "2 zones"]],
  configuration: [["Architecture", "Cartouche simple"], ["Présélection", "Chesterton 155"], ["Faces", "SSC / carbone"], ["Joints", "FKM ou EPDM à valider"]],
} as const;

export type SpecKey = keyof typeof specs;
