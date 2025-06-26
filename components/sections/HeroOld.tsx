'use client'

import Container from "../common/Container"
import Icon from "../icons"
import Button from "../common/Button"
import Link from "next/link"
import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"

function HeroOld() {
  const container = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const tl = gsap.timeline()

    tl.from(container.current?.children[0].children as HTMLCollection, {
      opacity: 0,
      yPercent: 20,
      stagger: .5,
      duration: 1,
      ease: 'power2.out'
    })
      .from(container.current?.children[1].children as HTMLCollection, {
        opacity: 0,
        yPercent: 20,
        stagger: .5,
        duration: 1,
        ease: 'power2.out'
      }, "-=1")
  }, [])

  return (
    <div id="home" className=" w-screen bg-[#09161EED] pt-[160px] md:pt-[180px] lg:pt-[50px] pb-10 " >
      <Container ref={container} tag="section" className=" min-h-[70vh] text-white flex flex-col lg:flex-row pb-10 " >
        <div className=" w-full flex flex-col justify-center gap-10 xl:gap-40" >
          <h1 className="w-full items-start text-5xl md:text-8xl max-w-[550px] font-semibold font-manrope flex flex-col gap-5" >
            <p className="text-base font-normal" >Sécurité, Surveillance & Gardiennage</p>
            MAJOR SECURITY
          </h1>
          <div className="flex flex-col max-w-[388px] gap-5 " >
            <Link href={'#service'}>
              <div className="flex place-items-end h-[92px] " >
                <span className=" h-full flex items-center justify-center px-5 bg-[#B6B7B6] " > <Icon className="text-white" name="play" /></span>
                <span className=" h-full flex items-center justify-center px-10 bg-[#2A2A2A]" >Nos Services</span>
              </div>
            </Link>
            <p className="w-fit" >Notre mission est simple : garantir la sécurité de votre entreprise, de vos biens et de vos événements, peu importe leur taille ou leur complexité.</p>
          </div>
        </div>

        <div className="flex flex-col items-center lg:place-items-end gap-5" >
          <img
            alt="hero image"
            src={"/images/hero-image.png"}
            className="w-[600px] h-auto "
          />
          <div className="w-full flex flex-col justify-center items-center gap-5" >
            <p className="font-bold text-2xl text-center">Protéger ce qui compte <br /> vraiment .</p>
            <Link href={'/contact-us'}> <Button label="Contactez Nous" /></Link>
          </div>
        </div>
        <img
          alt="shied image"
          src={'/images/hero-shield.png'}
          className="animate-bouncing absolute z-10 left-[50%] translate-x-[-50%] top-[40%] w-[500px] h-auto hidden xl:block "
        />
      </Container>
    </div>
  )
}

export default HeroOld