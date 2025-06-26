"use client"

import { Button, Field, Input } from '@headlessui/react'
import clsx from 'clsx'
import Container from './common/Container'
import FooterContent from './FooterContent'
import SocialMedia from './common/SocialMedia'
import useTranslate from '@/lib/hooks/useTranslate'
import lang from '@/data/language/global.json'

const Footer = () => {
    const t = useTranslate(lang)
    return (
        <div className="w-screen h-fit bg-blue-primary">
            <Container tag="footer" className="bg-blue-primary relative">
                {/* Rectangle grey container */}
                <div className="bg-gray-primary flex lg:flex-row flex-col items-center justify-between lg:w-[55%] w-[90%] lg:py-6 py-2 lg:px-12 px-6 lg:gap-8 gap-1 absolute -top-12 left-1/2 transform -translate-x-1/2 shadow-2xl">
                    <div className="w-full flex items-center gap-3">
                        <img
                            src="/icons/mail.png"
                            alt="icon"
                            className="w-12 h-auto"
                        />
                        <p className="text-black/80">
                            contact@major-security.mg
                        </p>
                    </div>
                    <div className="h-12 w-0.5 bg-blue-primary hidden lg:block" />
                    <div className="w-full flex items-center gap-3">
                        <img
                            src="/icons/phone.png"
                            alt="icon"
                            className="w-12 h-auto"
                        />
                        <p className="text-black/80 font-swap">+261 37 79 118 84</p>
                    </div>
                </div>
                {/* Inscrivez vous */}
                <div className="flex lg:flex-row flex-col items-center justify-between gap-4 py-8 pt-24">
                    <h3 className="text-2xl text-white">{t(('footer.subscribe'))}</h3>
                    <div className="flex items-center justify-center gap-4">
                        <Field className="w-56">
                            <Input
                                placeholder={t(('footer.mail'))}
                                className={clsx(
                                    'block w-full rounded-lg border-none bg-white px-3 py-1.5 text-sm/6 text-gray-900',
                                    'focus:not-data-focus:outline-none data-focus:outline-2 data-focus:-outline-offset-2 data-focus:outline-white/25'
                                )}
                            />
                        </Field>
                        <Button className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-1.5 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white data-hover:bg-gray-600 data-open:bg-gray-700 cursor-pointer">
                        {t(('footer.send'))}
                        </Button>
                    </div>
                </div>

                {/* Footer content */}
                <FooterContent />

                {/* Copyright container */}
                <div className="flex items-center justify-between py-3">
                    <div className="text-white">
                        Copyright &copy; {new Date().getFullYear()} <span className='font-semibold font-swap'>Major
                        Security</span>.
                    </div>

                    {/* Social media links */}
                    <SocialMedia />
                </div>
            </Container>
        </div>
    )
}

export default Footer
