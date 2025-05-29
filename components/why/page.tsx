const avantages = [
  {
    icon: "/photos/Icon.png",
    alt: "Expertise",
    title: "Expertise et professionnalisme",
    text: "Tous nos agents sont formés et qualifiés pour répondre efficacement à vos besoins en matière de sécurité et de contrôle.",
  },
  {
    icon: "/photos/Icon (1).png",
    alt: "Service sur mesure",
    title: "Service sur mesure",
    text: "Nous travaillons directement avec chaque client pour proposer une prestation personnalisée, tenant compte de vos exigences, contraintes et priorités.",
  },
  {
    icon: "/photos/Icon (2).png",
    alt: "Moyens humains et matériels",
    title: "Moyens humains et matériels",
    text: "Nous engageons les ressources nécessaires (équipe, matériel, technologie) pour vous garantir une sécurité optimale.",
  },
  {
    icon: "/photos/Icon (3).png",
    alt: "Polyvalence des services",
    title: "Polyvalence des services",
    text: "De la surveillance générale à la sécurité incendie, en passant par la technologie de sécurité, les événements ou encore les chantiers, nous couvrons tous les besoins.",
  },
  {
    icon: "/photos/Icon (4).png",
    alt: "Écoute et accompagnement",
    title: "Écoute et accompagnement",
    text: "Votre tranquillité d’esprit est notre priorité : nous vous accompagnons pour établir un plan de sécurité personnalisé.",
  },
  {
    icon: "/photos/Icon (5).png",
    alt: "Transparence & confiance",
    title: "Transparence & confiance",
    text: "Chaque prestation est encadrée par une relation de confiance claire, avec un suivi rigoureux et des échanges transparents.",
  },
];

export default function WhyPage() {
  return (
    
    
    <div className="py-16 px-4 max-w-7xl mx-auto">
      <p className="text-sm text-gray-500 mb-2 text-center md:text-left">Pourquoi nous ?</p>
      <h2 className="text-3xl font-bold mb-10 text-center md:text-left">Pourquoi nous choisir ?</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {avantages.map((item, index) => (
          <div key={index} className="flex items-start space-x-4">
            <img src={item.icon} alt={item.alt} className="w-10 h-10" />
            <div>
              <h3 className="font-semibold text-lg">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
