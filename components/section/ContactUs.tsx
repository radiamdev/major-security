'use client'

import React, { useState } from 'react'
import Container from '../common/Container'
import { images } from '@/constants'
import Button from '../common/Button'
import { Input } from '@headlessui/react'
import { Form, Formik } from 'formik'
import { contactFormSchema } from '@/lib/validator'
import { toast } from 'react-toastify'
import { sendMail } from '@/lib/api/contact'
import FormField from '../common/FormField'

const ContactUs = () => {
    const [isSubmitting, setIsSubmitting] = useState(false)
    return (
        <div className="w-screen h-fit bg-gray-primary">
            <Container
                tag="section"
                id="contact"
                className="bg-gray-primary pt-16"
            >
                <div className="flex lg:flex-row flex-col items-start bg-blue-primary gap-8 pt-16 pb-32">
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
                            <h1 className="text-white text-3xl">
                                Contactez nous
                            </h1>
                            <p className="text-white leading-8">
                                Besoin d&apos;un plan de sécurité personnalisé ?{' '}
                                <br />
                                Parlons de vos besoins !
                            </p>
                        </div>

                        <Formik
                            initialValues={{
                                name: '',
                                email: '',
                                subject: '',
                                message: '',
                                honeypot: '', // anti-spam
                            }}
                            validationSchema={contactFormSchema}
                            onSubmit={async (values, { resetForm }) => {
                                console.log('Submit clicked', values)
                                console.log('✅ Form values:', values)

                                if (values.honeypot) {
                                    toast.error("Erreur d'envoi")
                                    return
                                }

                                setIsSubmitting(true)
                                try {
                                    console.log('⏳ Appel à sendMail...')

                                    const response =
                                        await sendMail(values).send()

                                    console.log(
                                        '✅ Réponse du serveur:',
                                        response
                                    )
                                    toast.success(
                                        'Your message has been sent successfully!'
                                    )
                                    resetForm()
                                } catch (error) {
                                    console.error(
                                        '❌ Erreur de soumission:',
                                        error
                                    )
                                    toast.error(
                                        'Failed to send message. Please try again.'
                                    )
                                } finally {
                                    setIsSubmitting(false)
                                }
                            }}
                        >
                            {({
                                errors,
                                touched,
                                handleChange,
                                values,
                            }) => (
                                <Form className="py-6 flex flex-col items-center lg:items-start justify-center gap-6">
                                    <FormField
                                        name="name"
                                        placeholder="Nom"
                                        touched={touched.name}
                                        error={errors.name}
                                    />
                                    <FormField
                                        name="email"
                                        placeholder="Email"
                                        touched={touched.email}
                                        error={errors.email}
                                    />
                                    <FormField
                                        name="subject"
                                        placeholder="Sujet"
                                        touched={touched.subject}
                                        error={errors.subject}
                                    />
                                    <FormField
                                        name="message"
                                        placeholder="Message"
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

                                    {/* Send button */}
                                    <div className="flex-1 lg:text-left text-center">
                                        <Button
                                            type="submit"
                                            label={isSubmitting ? 'Envoi...' : 'Envoyer'}
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
