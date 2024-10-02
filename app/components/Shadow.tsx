import React from 'react'

interface ShadowProps {
    width?: string
    height?: string
    top?: string
    left?: string
}

function Shadow({ width, height, top, left }: ShadowProps) {
    return (
        <div
            style={{
                zIndex: -5,
                position: 'absolute',
                width: width || '100%',
                height: height || '100%',
                top: top || '0',
                left: left || '0',
                borderRadius: '400px',
                background: 'black',
                filter: 'blur(50px)'
            }}
        >
        </div>

    )
}

export default Shadow