export default function ServicePage() {
  return (
    <main className="bg-[#09161E17] text-black px-6 md:px-20 py-16">
      <p className="text-sm text-gray-500">Nos services</p>

      <div className="flex flex-col md:flex-row md:justify-between gap-6 mb-12">

        <div className="md:w-1/2">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            NOS SERVICES CHEZ<br />MAJOR SECURITY
          </h1>
        </div>

        <div className="md:w-1/2 flex flex-col justify-between">
          <p className="text-gray-700 text-lg mb-6">
            Chez MAJOR SECURITY, nous proposons une large gamme de services de sécurité adaptés aux besoins spécifiques des professionnels, des entreprises et des événements.
          </p>
          <div className="flex justify-end">
            <button className="bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-3 rounded font-semibold">
              Contactez-nous
            </button>
          </div>
        </div>
      </div>

      {/* Cartes de services */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Gardiennage de chantier */}
        <div className="bg-[#0A1A2F] text-white rounded-lg overflow-hidden shadow-md flex flex-col">
          <div className="p-6 flex-1">
            <h3 className="text-xl font-semibold mb-3">Gardiennage de chantier</h3>
            <p className="text-sm text-gray-300 mt-4">
              Notre service de gardiennage assure la sécurité, la surveillance et le contrôle de vos chantiers afin d’éviter toute intrusion, vol ou détérioration des équipements.
            </p>
          </div>
          <img src="/photos/chantier.png" alt="chantier" className="h-40 w-full object-cover" />
        </div>

        {/* Sécurité Incendie */}
        <div className="bg-[#0A1A2F] text-white rounded-lg overflow-hidden shadow-md flex flex-col">
          <div className="p-6 pb-14 flex-1">
            <h3 className="text-xl font-semibold mb-3">Sécurité Incendie</h3>
            <p className="text-sm text-gray-300 mt-4">
              Notre agent est expérimenté et formé aux risques incendies, pour assurer la sécurité de votre personnel et du public.
            </p>
          </div>
          <img src="/photos/incendie.png" alt="incendie" className="h-40 w-full object-cover" />
        </div>

        {/* Technologie / Système */}
        <div className="bg-[#0A1A2F] text-white rounded-lg overflow-hidden shadow-md flex flex-col">
          <div className="p-6 pb-14 flex-1">
            <h3 className="text-xl font-semibold mb-3">Technologie / Système</h3>
            <p className="text-sm text-gray-300 mt-4">
              Nous fournissons des services de sécurité via des systèmes technologiques pour assurer la protection de votre entreprise, de vos biens et de vos collaborateurs.
            </p>
          </div>
          <img src="/photos/technologie.png" alt="technologie" className="h-40 w-full object-cover" />
        </div>

        {/* Sécurité Événementielle */}
        <div className="bg-[#0A1A2F] text-white rounded-lg overflow-hidden shadow-md flex flex-col">
          <div className="p-6 pb-14 flex-1">
            <h3 className="text-xl font-semibold mb-3">Sécurité Événementielle</h3>
            <p className="text-sm text-gray-300 mt-4">
              Notre équipe spécialisée en sécurisation intervient sur tous types de manifestations pour des événements bien organisés et réussis.
            </p>
          </div>
          <img src="/photos/evenement.png" alt="événement" className="h-40 w-full object-cover" />
        </div>
      </div>
    </main>
  );
}
