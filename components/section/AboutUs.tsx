import Container from '../common/Container'

export default function AboutUS() {
    return (
        <div className="w-screen h-fit bg-gray-primary">
            <Container
                tag="section"
                id="about"
                className="bg-gray-primary pt-16"
            >
                <section className="about-us px-6 lg:px-20">
                    <div className="about-us-one flex flex-col lg:flex-row-reverse items-center justify-between">
                        <div className="about-us-left w-full lg:w-[50%] flex justify-center">
                            <img
                                src={'/images/majorsec.png'}
                                alt="major security logo"
                                className="w-full h-auto object-cover"
                            />
                        </div>
                        <div className="about-us-two w-full lg:w-[50%] text-center lg:text-left">
                            <span className="text-lg font-bold hidden lg:block">
                                A Propos de nous
                            </span>
                            <div className="text-4xl lg:w-82 font-bold my-2 leading-relaxed">
                                A PROPOS DE MAJOR SECURITY
                            </div>
                            <div className="text-[#7B7B7B] lg:w-[500px] text-base lg:text-lg my-6 leading-relaxed">
                                Chez MAJOR SECURITY, notre objectif est de
                                garantir la sécurité de votre entreprise, quelle
                                que soit sa taille. Nous mettons à votre
                                disposition une équipe d&apos;agents formés,
                                qualifiés et expérimentés, capables de répondre
                                à tous vos besoins en matière de sécurité et de
                                contrôle.
                            </div>
                            <div className="mt-4">
                                <a
                                    href="#"
                                    className="bg-[#F9C839] text-black font-bold p-3 rounded-xl inline-block"
                                >
                                    Contactez-nous
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="about-two flex flex-col lg:flex-row items-stretch justify-between gap-5 lg:gap-0 mt-5 lg:mt-0">
                        <div className="about-two-left flex flex-col lg:flex-row-reverse w-full lg:w-[50%] gap-0">
                            <div className="left-two w-full lg:w-[50%] flex justify-center items-center p-0">
                                <img
                                    src={'/images/security.png'}
                                    alt="icon"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="left-one w-full lg:w-[50%] flex flex-col items-center justify-center">
                                <div className="relative mt-12">
                                    <div className="text-5xl font-semibold text-center">
                                        100%
                                    </div>
                                    <div className="badge absolute top-[-30px] bg-blue-400 rounded-full">
                                        <span className="p-3 text-white">
                                            01
                                        </span>
                                    </div>
                                    <div className="text-sm text-center mt-2 text-[#7B7B7B]">
                                        Clients Satisfaits
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="about-us-two-right w-full lg:w-[50%] flex items-center justify-center px-4">
                            <div className="right-text text-[#7B7B7B] leading-relaxed text-lg text-center lg:text-left">
                                Nous travaillons en étroite collaboration avec
                                chaque client pour proposer une prestation sur
                                mesure, en tenant compte de vos exigences, de
                                vos contraintes et de la spécificité de votre
                                activité.
                            </div>
                        </div>
                    </div>
                </section>
            </Container>
        </div>
    )
}
