import { ButtonHTMLAttributes } from "react";

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function Button ({children, ...attributes} : IButton) {
  return (
    <button {...attributes} >
      {children}
    </button>
  )
}