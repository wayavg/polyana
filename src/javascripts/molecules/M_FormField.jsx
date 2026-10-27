import React from 'react'
import A_Label from '../atoms/A_Label.jsx'
import A_Input from '../atoms/A_Input.jsx'

export default function M_FormField({ id, label, required, error, ...inputProps }) {
  return (
    <div className="form-field">
      <A_Label
        htmlFor={id}
        required={required}
      >
        {label}
      </A_Label>
      <A_Input
        id={id}
        error={error}
        aria-describedby={error ? id + '-error' : undefined}
        {...inputProps}
      />
      {error && (
        <p
          role="alert"
          id={id + '-error'}
          className="form-field__error"
        >
          {error}
        </p>
      )}
    </div>
  )
}
