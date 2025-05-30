import React from 'react'
import { PacmanLoader } from 'react-spinners'

const Loading = () => {
    return (
        <div className="sweet-loading flex items-center justify-center h-screen w-full bg-blue-primary">
            <PacmanLoader
                size={50}
                color={'#f6c841'}
                speedMultiplier={1.5}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
        </div>
    )
}

export default Loading
