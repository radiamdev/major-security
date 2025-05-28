import React from 'react'

function Instagram({ className }: { className?: string }) {
    return (
        <svg
            className={className}
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <rect width="32" height="32" fill="currentColor" />
            <g clipPath="url(#clip0_90_6648)">
                <path
                    d="M19.333 9.33333H12.6663C10.8254 9.33333 9.33301 10.8257 9.33301 12.6667V19.3333C9.33301 21.1743 10.8254 22.6667 12.6663 22.6667H19.333C21.174 22.6667 22.6663 21.1743 22.6663 19.3333V12.6667C22.6663 10.8257 21.174 9.33333 19.333 9.33333Z"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M18.6668 15.58C18.7491 16.1348 18.6543 16.7015 18.396 17.1993C18.1376 17.6972 17.7289 18.1009 17.2279 18.3531C16.7269 18.6053 16.1591 18.6931 15.6053 18.6039C15.0515 18.5148 14.54 18.2534 14.1434 17.8568C13.7467 17.4602 13.4853 16.9486 13.3962 16.3948C13.3071 15.841 13.3948 15.2733 13.647 14.7722C13.8992 14.2712 14.3029 13.8625 14.8008 13.6042C15.2987 13.3458 15.8653 13.2511 16.4201 13.3333C16.9861 13.4173 17.51 13.681 17.9146 14.0855C18.3192 14.4901 18.5829 15.014 18.6668 15.58Z"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M19.667 12.3333H19.677"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </g>
            <defs>
                <clipPath id="clip0_90_6648">
                    <rect
                        width="16"
                        height="16"
                        fill="white"
                        transform="translate(8 8)"
                    />
                </clipPath>
            </defs>
        </svg>
    )
}

export default Instagram
