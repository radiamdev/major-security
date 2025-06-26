import Link from 'next/link'
import Container from '../common/Container'
import Icon from '../icons'
import Button from '../common/Button'

const Hero = () => {
    return (
        <div id="home" className=" w-screen bg-white">
            <Container tag="section" className="py-16 relative">
                <div className="w-full flex items-center justify-between">
                    <div className="max-w-md">
                        <p className="text-xl !font-semibold text-black">
                            Notre mission est simple : garantir la sécurité de
                            votre entreprise, de vos biens et de vos événements,
                            peu importe leur taille ou leur complexité.
                        </p>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-8">
                        <div className="flex flex-col items-center gap-2 py-6 border-y-[1px] border-blue-primary">
                            <p className="text-3xl !font-semibold text-black">
                                100%
                            </p>
                            <p className="text-xl text-black">
                                Clients satisfaits
                            </p>
                        </div>
                        <p className="text-lg !font-semibold text-black text-center">
                            Sécurité, Surveillance & Gardiennage
                        </p>
                    </div>
                </div>

                <div className="flex flex-col items-center justify-center p-16">
                    <h1 className="!text-7xl text-black font-swap text-center">
                        MAJOR{' '}
                        <span className="font-manrop-bold !text-7xl text-blue-primary">
                            SECURITY
                        </span>
                    </h1>
                    <img
                        alt="hero image"
                        src={'/images/hero-shield.png'}
                        className="w-xs h-auto "
                    />
                </div>

                <div className="w-full flex items-center justify-between">
                    <div className="max-w-md">
                        {/* Our services button */}
                        <Link href={'#service'}>
                            <div className="flex place-items-end h-[92px] ">
                                <span className=" h-full flex items-center justify-center px-5 bg-[#B6B7B6] ">
                                    {' '}
                                    <Icon className="text-white" name="play" />
                                </span>
                                <span className=" h-full flex items-center justify-center px-10 bg-[#2A2A2A] text-white text-xl">
                                    Nos Services
                                </span>
                            </div>
                        </Link>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-8">
                        {/* Contact us button */}
                        <Link href={'/contact-us'}>
                            {' '}
                            <Button label="Contactez Nous" />
                        </Link>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Hero
