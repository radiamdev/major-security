import * as Yup from 'yup'

export const contactFormSchema = Yup.object().shape({
    name: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    subject: Yup.string().nullable(),
    message: Yup.string().nullable(),
})