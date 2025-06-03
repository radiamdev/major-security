import { MailType } from '@/type'
import alovaInstance from '../alovaInstance'

export const sendMail = (data: MailType) =>
    alovaInstance.Post(`${process.env.NEXT_PUBLIC_API_BASE_URL}`, data, {
        headers: {
            'Content-Type': 'application/json',
        },
    })