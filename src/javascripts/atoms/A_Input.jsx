import React from 'react'

export default function A_Input({ multiline = false, error, className = '', ...props }) {
  const common = { className: 'a-input ' + (error ? 'a-input--error ' : '') + className, 'aria-invalid': Boolean(error), ...props }
  return multiline ? <textarea rows={3} {...common} /> : <input type="text" {...common} />
}
