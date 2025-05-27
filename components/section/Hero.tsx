import Image from "next/image"

function Hero() {
  return (
    <div className="w-screen max-w-[1440px] min-h-[100vh] bg-[#09161EED] text-white grid grid-cols-2 justify-items-center" >
      <div className="flex flex-col justify-between" >
        <h1 className="text-8xl max-w-[550px] font-semibold font-manrope flex flex-col gap-5" >
          <p className="text-base font-normal" >Sécurité, Surveillance & Gardiennage</p>
          MAJOR SECURITY
        </h1>
        <div>
          <div>
            <span>play</span>
            <span>Nos Services</span>
          </div>
          <p>Notre mission est simple : garantir la sécurité de votre entreprise, de vos biens et de vos événements, peu importe leur taille ou leur complexité.</p>
        </div>
      </div>

      <div>
        <Image alt="hero image" src={"/image/hero-image.png"} width={450} height={600} />
      </div>
    </div>
  )
}

export default Hero