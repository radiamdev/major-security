import Image from "next/image";


export default function WhyPage() {
    return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <p className="text-sm text-gray-500 mb-2 text-center md:text-left">Pourquoi nous ?</p>
      <h2 className="text-3xl font-bold mb-10 text-center md:text-left">Pourquoi nous choisir ?</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {/* Bloc 1 */}
        <div className="flex items-start space-x-4">
          <img src="/photos/Icon.png" alt="Expertise" className="w-10 h-10" />
          <div>
            <h3 className="font-semibold text-lg">Expertise et professionnalisme</h3>
            <p className="text-sm text-gray-600">
              Tous nos agents sont formés et qualifiés pour répondre efficacement à vos besoins en matière de sécurité et de contrôle.
            </p>
          </div>
        </div>

        {/* Bloc 2 */}
        <div className="flex items-start space-x-4">
          <img src="/photos/Icon (1).png" alt="Service sur mesure" className="w-10 h-10" />
          <div>
            <h3 className="font-semibold text-lg">Service sur mesure</h3>
            <p className="text-sm text-gray-600">
              Nous travaillons directement avec chaque client pour proposer une prestation personnalisée, tenant compte de vos exigences, contraintes et priorités.
            </p>
          </div>
        </div>

        {/* Bloc 3 */}
        <div className="flex items-start space-x-4">
          <img src="/photos/Icon (2).png" alt="Moyens humains et matériels" className="w-10 h-10" />
          <div>
            <h3 className="font-semibold text-lg">Moyens humains et matériels</h3>
            <p className="text-sm text-gray-600">
              Nous engageons les ressources nécessaires (équipe, matériel, technologie) pour vous garantir une sécurité optimale.
            </p>
          </div>
        </div>

        {/* Bloc 4 */}
        <div className="flex items-start space-x-4">
          <img src="/photos/Icon (3).png" alt="Polyvalence des services" className="w-10 h-10" />
          <div>
            <h3 className="font-semibold text-lg">Polyvalence des services</h3>
            <p className="text-sm text-gray-600">
              De la surveillance générale à la sécurité incendie, en passant par la technologie de sécurité, les événements ou encore les chantiers, nous couvrons tous les besoins.
            </p>
          </div>
        </div>

        {/* Bloc 5 */}
        <div className="flex items-start space-x-4">
          <img src="/photos/Icon (4).png" alt="Écoute et accompagnement" className="w-10 h-10" />
          <div>
            <h3 className="font-semibold text-lg">Écoute et accompagnement</h3>
            <p className="text-sm text-gray-600">
              Votre tranquillité d’esprit est notre priorité : nous vous accompagnons pour établir un plan de sécurité personnalisé.
            </p>
          </div>
        </div>

        {/* Bloc 6 */}
        <div className="flex items-start space-x-4">
          <img src="/photos/Icon (5).png" alt="Transparence & confiance" className="w-10 h-10" />
          <div>
            <h3 className="font-semibold text-lg">Transparence & confiance</h3>
            <p className="text-sm text-gray-600">
              Chaque prestation est encadrée par une relation de confiance claire, avec un suivi rigoureux et des échanges transparents.
            </p>
          </div>
        </div>
      </div>
    </section>
        

    );
}