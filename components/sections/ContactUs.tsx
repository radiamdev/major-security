'use client'

import React, { useRef, useState } from 'react'
import Container from '../common/Container'
import { images } from '@/constants'
import Button from '../common/Button'
import { Input } from '@headlessui/react'
import { Form, Formik } from 'formik'
import { contactFormSchema } from '@/lib/validator'
import { toast } from 'react-toastify'
import { sendMail } from '@/lib/api/contact'
import FormField from '../common/FormField'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import useTranslate from '@/lib/hooks/useTranslate'
import lang from '@/data/language/contact.json'

gsap.registerPlugin(ScrollTrigger)

const ContactUs = () => {
    const [isSubmitting, setIsSubmitting] = useState(false)

    const imageRef = useRef(null)
    const maskRef = useRef(null)

    const t = useTranslate(lang)

    useGSAP(() => {
        if (!imageRef.current || !maskRef.current) return

        gsap.fromTo(
            maskRef.current,
            { xPercent: 0 },
            {
                xPercent: 100,
                duration: 1.5,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: imageRef.current,
                    start: 'top 80%',
                },
            }
        )
    }, [])

    return (
        <div className="w-screen h-fit bg-gray-primary">
            <Container
                tag="section"
                id="contact"
                className="bg-gray-primary pt-16"
            >
                <div className="flex lg:flex-row flex-col items-start bg-blue-primary gap-8 pt-16 pb-32">
                    {/* Image avec animation de masque */}
                    <div className="lg:w-1/2 w-full flex items-center justify-center">
                        <div
                            ref={imageRef}
                            className="relative w-80 h-auto overflow-hidden"
                        >
                            {/* Masque animé */}
                            <div
                                ref={maskRef}
                                className="absolute inset-0 bg-blue-primary z-10"
                            />
                            {/* Image */}
                            <img
                                src={images.contactUsIllustration}
                                alt="illustration"
                                className="w-full h-auto block relative z-0"
                            />
                        </div>
                    </div>

                    {/* Formulaire */}
                    <div className="lg:w-1/2 w-full">
                        <div className="space-y-4 text-center lg:text-left">
                            <p className="text-white">Contact</p>
                            <h1 className="text-white !text-3xl">
                                {t('contactUsSection.title')}
                            </h1>
                            <p className="text-white leading-8">
                                {t('contactUsSection.description1')} <br />
                                {t('contactUsSection.description2')}
                            </p>
                        </div>

                        <Formik
                            initialValues={{
                                name: '',
                                email: '',
                                subject: '',
                                message: '',
                                honeypot: '',
                            }}
                            validationSchema={contactFormSchema}
                            onSubmit={async (values, { resetForm }) => {
                                if (values.honeypot) {
                                    toast.error("Erreur d'envoi")
                                    return
                                }

                                setIsSubmitting(true)
                                try {
                                    const response =
                                        await sendMail(values).send()
                                    toast.success(
                                        'Your message has been sent successfully!'
                                    )
                                    console.log('success', response)

                                    resetForm()
                                } catch (error) {
                                    toast.error(
                                        'Failed to send message. Please try again.'
                                    )
                                    console.log('error', error)
                                } finally {
                                    setIsSubmitting(false)
                                }
                            }}
                        >
                            {({ errors, touched, handleChange, values }) => (
                                <Form className="py-6 flex flex-col items-center lg:items-start justify-center gap-6">
                                    <FormField
                                        name="name"
                                        placeholder={t('contactUsSection.name')}
                                        touched={touched.name}
                                        error={errors.name}
                                    />
                                    <FormField
                                        name="email"
                                        placeholder={t('contactUsSection.email')}
                                        touched={touched.email}
                                        error={errors.email}
                                    />
                                    <FormField
                                        name="subject"
                                        placeholder={t('contactUsSection.subject')}
                                        touched={touched.subject}
                                        error={errors.subject}
                                    />
                                    <FormField
                                        name="message"
                                        placeholder={t('contactUsSection.message')}
                                        isTextarea
                                        touched={touched.message}
                                        error={errors.message}
                                    />

                                    {/* Anti-spam */}
                                    <Input
                                        type="text"
                                        name="honeypot"
                                        value={values.honeypot}
                                        onChange={handleChange}
                                        style={{ display: 'none' }}
                                    />

                                    {/* Bouton envoyer */}
                                    <div className="flex-1 lg:text-left text-center">
                                        <Button
                                            type="submit"
                                            label={
                                                isSubmitting
                                                    ? t('contactUsSection.sending')
                                                    : t('contactUsSection.send')
                                            }
                                            className="rounded-full !py-3 !px-8"
                                        />
                                    </div>
                                </Form>
                            )}
                        </Formik>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default ContactUs
