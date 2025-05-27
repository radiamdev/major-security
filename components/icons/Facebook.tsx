import React from 'react'

function Facebook({ className }: { className: string }) {
  return (
    <svg className={className} width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
      <rect width="32" height="32" fill="#0F0F0F" />
      <rect x="11" y="7" width="19" height="19" fill="url(#pattern0_90_6653)" />
      <defs>
        <pattern id="pattern0_90_6653" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use xlinkHref="#image0_90_6653" transform="scale(0.0078125)" />
        </pattern>
        <image id="image0_90_6653" width="128" height="128" preserveAspectRatio="none" xlinkHref="data:image/png;base64,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" />
      </defs>
    </svg>

  )
}

export default Facebook