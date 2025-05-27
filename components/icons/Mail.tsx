import React from 'react'

function Mail({ className }: { className?: string }) {
  return (
    <svg className={className} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.66683 2.66666H13.3335C14.0668 2.66666 14.6668 3.26666 14.6668 4V12C14.6668 12.7333 14.0668 13.3333 13.3335 13.3333H2.66683C1.9335 13.3333 1.3335 12.7333 1.3335 12V4C1.3335 3.26666 1.9335 2.66666 2.66683 2.66666Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M14.6668 4L8.00016 8.66667L1.3335 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>

  )
}

export default Mail