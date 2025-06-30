import React, { useRef } from 'react'
import useTranslate from '@/lib/hooks/useTranslate'
import lang from '@/data/language/about.json'

const AboutUsBottomSection = () => {
    const statsSection = useRef(null)

    // Translation
        const t = useTranslate(lang)
    return (
        <div
            className="about-two flex flex-col lg:flex-row items-stretch justify-between gap-5 lg:gap-0 mt-5 lg:mt-0"
            ref={statsSection}
        >
            <div className="about-two-left flex flex-col lg:flex-row-reverse w-full lg:w-[50%] gap-0">
                <div className="left-two w-full lg:w-[50%] flex justify-center items-center p-0">
                    <img
                        src={'/images/security.webp'}
                        alt="icon"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="left-one w-full lg:w-[50%] flex flex-col items-center justify-center">
                    <div className="relative mt-12 space-y-4">
                        <div className="!text-5xl !font-semibold text-center">
                            100%
                        </div>
                        <div className="badge absolute top-[-50px] bg-blue-400 rounded-full">
                            <span className="p-3 text-white">01</span>
                        </div>
                        <div className="text-sm text-center mt-2 text-[#7B7B7B]">
                            {t('clients')}
                        </div>
                    </div>
                </div>
            </div>
            <div className="about-us-two-right w-full lg:w-[50%] flex items-center justify-center px-4">
                <div className="right-text text-[#7B7B7B] leading-relaxed text-lg text-center lg:text-left">
                    {t('description2')}
                </div>
            </div>
        </div>
    )
}

export default AboutUsBottomSection
