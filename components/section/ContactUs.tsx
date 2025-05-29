import React from 'react'
import Container from '../common/Container'
import { images } from '@/constants'
import Button from '../common/Button'
import { Field, Input } from '@headlessui/react'
import clsx from 'clsx'

const ContactUs = () => {
    return (
        <Container
            tag="section"
            id="#contact"
            className="bg-gray-primary py-16"
        >
            <div className="flex lg:flex-row flex-col items-start bg-blue-primary gap-8 py-16">
                <div className="lg:w-1/2 w-full flex items-center justify-center">
                    <img
                        src={images.contactUsIllustration}
                        alt="illustration"
                        className="w-80 h-auto"
                    />
                </div>
                <div className="lg:w-1/2 w-full">
                    <div className="space-y-4 text-center lg:text-left">
                        <p className="text-white">Contact</p>
                        <h1 className="text-white text-3xl">Contactez nous</h1>
                        <p className="text-white leading-8">
                            Besoin d&apos;un plan de sécurité personnalisé ?{' '}
                            <br />
                            Parlons de vos besoins !
                        </p>
                    </div>
                    <div className="py-6 flex flex-col items-center lg:items-start justify-center gap-6">
                        <Field className="w-[90%] lg:w-[70%]">
                            <Input
                                placeholder="Nom"
                                className={clsx(
                                    'block w-full rounded-lg border-none bg-white px-3 py-1.5 text-sm/6 text-gray-900',
                                    'focus:not-data-focus:outline-none data-focus:outline-2 data-focus:-outline-offset-2 data-focus:outline-white/25'
                                )}
                            />
                        </Field>
                        <Field className="w-[90%] lg:w-[70%]">
                            <Input
                                placeholder="Email"
                                className={clsx(
                                    'block w-full rounded-lg border-none bg-white px-3 py-1.5 text-sm/6 text-gray-900',
                                    'focus:not-data-focus:outline-none data-focus:outline-2 data-focus:-outline-offset-2 data-focus:outline-white/25'
                                )}
                            />
                        </Field>
                        {/* Send button */}
                        <div className="flex-1 lg:text-left text-center">
                            <Button
                                label="Envoyer"
                                className="rounded-full !py-3 !px-8"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default ContactUs
