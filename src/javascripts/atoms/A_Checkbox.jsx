import React from 'react'

export default function A_Checkbox({ checked, onChange, children, name }) {
  return <label className="a-checkbox"><input type="checkbox" checked={checked} onChange={onChange} name={name} /><span>{children}</span></label>
}
