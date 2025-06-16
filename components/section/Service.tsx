'use client'
import { useRef } from 'react'
import Container from '../common/Container'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import Link from 'next/link'
import Button from '../common/Button'

gsap.registerPlugin(ScrollTrigger)

const services = [
  {
    title: 'Gardiennage de chantier',
    description:
      'Notre service de gardiennage assure la sécurité, la surveillance et le contrôle de vos chantiers afin d’éviter toute intrusion, vol ou détérioration des équipements.',
    image: '/images/chantier.png',
    alt: 'chantier',
  },
  {
    title: 'Sécurité Incendie',
    description:
      'Notre agent est expérimenté et formé aux risques incendies, pour assurer la sécurité de votre personnel et du public.',
    image: '/images/incendie.png',
    alt: 'incendie',
  },
  {
    title: 'Technologie / Système',
    description:
      'Nous fournissons des services de sécurité via des systèmes technologiques pour assurer la protection de votre entreprise, de vos biens et de vos collaborateurs.',
    image: '/images/cyber.png',
    alt: 'technologie',
  },
  {
    title: 'Sécurité Événementielle',
    description:
      'Notre équipe spécialisée en sécurisation intervient sur tous types de manifestations pour des événements bien organisés et réussis.',
    image: '/images/evenement.png',
    alt: 'événement',
  },
]

export default function ServicePage() {
  const serviceCards = useRef(null)

  useGSAP(() => {
    gsap.fromTo(
      gsap.utils.toArray('.service-card'),
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        stagger: 0.2,
        scrollTrigger: {
          trigger: serviceCards.current,
          start: 'top 80%',
        },
      }
    )
  }, [])

  return (
    <div className="bg-gray-primary mt-16">
      <Container tag="section" id="service" className="bg-gray-primary py-16">
        <div className="text-black px-6 md:px-20 py-16">
          {/* <p className="text-sm text-gray-500">Nos services</p> */}

          <div className="flex flex-col md:flex-row md:justify-between gap-6 mb-12">
            <div className="md:w-1/2">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                NOS SERVICES
              </h1>
            </div>

            <div className="md:w-1/2 flex flex-col justify-between">
              <p className="text-gray-700 text-lg mb-6">
                Chez MAJOR SECURITY, nous proposons une large gamme de services
                de sécurité adaptés aux besoins spécifiques des professionnels,
                des entreprises et des événements.
              </p>
              <div className="flex justify-end">
                <Link href={'#contact'}> <Button label="Contactez Nous" /></Link>
              </div>
            </div>
          </div>

          {/* Cartes de services avec animation */}
          <div
            ref={serviceCards}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {services.map((service, index) => (
              <div
                key={index}
                className="service-card bg-[#0A1A2F] text-white rounded-lg overflow-hidden shadow-md flex flex-col"
              >
                <div className="p-6 flex-1 pb-14">
                  <h3 className="text-xl font-semibold mb-3">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-300 mt-4">
                    {service.description}
                  </p>
                </div>
                <img
                  src={service.image}
                  alt={service.alt}
                  className="h-40 w-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  )
}
