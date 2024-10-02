import React from 'react'

interface ButtonProps {
    text: string
    logo: React.ReactNode
    invert?: boolean
}

function Button({ text, logo, invert }: ButtonProps) {
    return (
        <button className={"bg-[var(--primary)] text-[var(--fontColor)] p-[6px] rounded-2xl flex items-center" + (invert ? " flex-row-reverse" : "")}>
            <div className="bg-[var(--fontColor)] text-[var(--primary)] rounded-xl p-2">{logo}</div>
            <span className="font-medium text-lg mx-4">{text}</span>
        </button>
    )
}

export default Button