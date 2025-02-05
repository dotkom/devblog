import React, { FC } from 'react'

interface ButtonProps {
  buttonText: string
  className?: string
}

const ConfirmButton: FC<ButtonProps> = ({buttonText, className}) => (
  <button className={`bg-secondary py-2 px-6 rounded-lg ${className}`}>
    {buttonText}
  </button>
)

const CancelButton: FC<ButtonProps> = ({buttonText, className}) => (
  <button className={`bg-red-400 py-2 px-6 rounded-lg ${className}`}>
    {buttonText}
  </button>
)

export {ConfirmButton, CancelButton}