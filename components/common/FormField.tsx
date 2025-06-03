import React from 'react'
import { Field, FieldProps } from 'formik'
import { Input, Textarea } from '@headlessui/react'
import clsx from 'clsx'

interface FormFieldProps {
    name: string
    placeholder: string
    isTextarea?: boolean
    error?: string
    touched?: boolean
}

const FormField = ({
    name,
    placeholder,
    isTextarea = false,
    error,
    touched,
}: FormFieldProps) => {
    const baseClass =
        'block w-full rounded-lg border-none px-3 py-1.5 text-sm/6'

    const inputClass = clsx(
        baseClass,
        isTextarea
            ? 'bg-white/5 text-white resize-none'
            : 'bg-white text-gray-900',
        'focus:not-data-focus:outline-none data-focus:outline-2 data-focus:-outline-offset-2 data-focus:outline-white/25'
    )

    return (
        <Field name={name}>
            {({ field }: FieldProps) => (
                <div className="w-[90%] lg:w-[70%]">
                    {isTextarea ? (
                        <Textarea
                            {...field}
                            placeholder={placeholder}
                            className={inputClass}
                            rows={3}
                        />
                    ) : (
                        <Input
                            {...field}
                            placeholder={placeholder}
                            className={inputClass}
                        />
                    )}
                    {touched && error && (
                        <p className="text-red-500 text-xs mt-1">{error}</p>
                    )}
                </div>
            )}
        </Field>
    )
}

export default FormField
