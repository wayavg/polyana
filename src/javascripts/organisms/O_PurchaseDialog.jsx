import React, { useEffect, useRef, useState } from 'react'
import A_Button from '../atoms/A_Button.jsx'
import A_Divider from '../atoms/A_Divider.jsx'
import A_Typography from '../atoms/A_Typography.jsx'
import M_PriceDisplay from '../molecules/M_PriceDisplay.jsx'
import M_FormField from '../molecules/M_FormField.jsx'
import M_SelectableOption from '../molecules/M_SelectableOption.jsx'
import M_ArtworkPreview from '../molecules/M_ArtworkPreview.jsx'

const PURPOSES = [
  ['personal', 'Для себя'],
  ['gift', 'В подарок'],
  ['project', 'Для пространства'],
  ['other', 'Другое']
]
const SPACES = [
  ['restaurant', 'Ресторан / кафе'],
  ['office', 'Офис'],
  ['hotel', 'Отель'],
  ['other', 'Другое']
]
const INITIAL = { purpose: '', space: '', city: '', name: '', contact: '', context: '' }

export default function O_PurchaseDialog({ artwork, isOpen, onClose }) {
  const [form, setForm] = useState(INITIAL)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const closeRef = useRef(null)
  const titleId = 'purchase-dialog-title'
  useEffect(() => {
    if (!isOpen) return
    setForm(INITIAL)
    setErrors({})
    setSubmitted(false)
    const previouslyFocused = document.activeElement
    const oldOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    requestAnimationFrame(() => closeRef.current?.focus())
    function onKeyDown(event) { if (event.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKeyDown)
    return () => { document.body.style.overflow = oldOverflow; document.removeEventListener('keydown', onKeyDown); previouslyFocused?.focus?.() }
  }, [isOpen, onClose])
  if (!isOpen || !artwork) return null

  const update = (name, value) => {
    setForm(current => ({ ...current, [name]: value, ...(name === 'purpose' && value !== 'project' ? { space: '' } : {}) }))
    setErrors(current => ({ ...current, [name]: undefined }))
  }
  function submit(event) {
    event.preventDefault()
    const nextErrors = {}
    if (!form.name.trim()) nextErrors.name = 'Укажите ваше имя'
    if (!form.contact.trim()) nextErrors.contact = 'Укажите контакт для ответа'
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length === 0) setSubmitted(true)
  }
  function fillExample() {
    setForm({ purpose: 'project', space: 'restaurant', city: 'Санкт-Петербург', name: 'Александра', contact: '@example', context: 'Хотелось бы уточнить условия размещения и сроки.' })
    setErrors({})
  }
  function handleBackdrop(event) { if (event.target === event.currentTarget) onClose() }

  return <div className="purchase-overlay" onMouseDown={handleBackdrop}>
    <div className="purchase-dialog" role="dialog" aria-modal="true" aria-labelledby={titleId}>
      <div className="purchase-dialog__header">
        <A_Typography variant="eyebrow" id={titleId}>ЗАПРОС О ПРОИЗВЕДЕНИИ</A_Typography>
        <A_Button className="purchase-dialog__close" onClick={onClose} ref={closeRef}>ЗАКРЫТЬ&nbsp; ×</A_Button>
      </div>
      <A_Divider />
      {submitted ? <div className="purchase-success" role="status">
        <A_Typography variant="h2">Запрос подготовлен</A_Typography>
        <A_Typography variant="body">Спасибо, {form.name.trim()}. Это демонстрация формы: ваши данные не отправлены. Мы показали итоговое состояние для учебного прототипа.</A_Typography>
        <A_Typography variant="small">Произведение: {artwork.title} · {artwork.artist}</A_Typography>
        <A_Button variant="solid" onClick={onClose}>ЗАКРЫТЬ</A_Button>
      </div> : <form noValidate onSubmit={submit}>
        <M_ArtworkPreview artwork={artwork} />
        <div className="purchase-dialog__price"><M_PriceDisplay price={artwork.price} compact /><A_Typography variant="small">{artwork.availability || 'Наличие уточняется'}</A_Typography></div>
        <A_Divider />
        <fieldset className="purchase-dialog__choices">
          <legend>Для чего вы рассматриваете работу?</legend>
          <div className="purchase-dialog__options">{PURPOSES.map(([value, title]) => <M_SelectableOption key={value} value={value} current={form.purpose} onSelect={selected => update('purpose', selected)} group="purpose">{title}</M_SelectableOption>)}</div>
          {form.purpose !== 'project' && <A_Typography variant="caption">Можно не выбирать — это поможет нам точнее ответить.</A_Typography>}
        </fieldset>
        {form.purpose === 'project' && <div className="purchase-dialog__conditional">
          <fieldset className="purchase-dialog__space">
            <legend>КАКОЕ ПРОСТРАНСТВО? · НЕОБЯЗАТЕЛЬНО</legend>
            <div className="purchase-dialog__options">{SPACES.map(([value, title]) => <M_SelectableOption key={value} value={value} current={form.space} onSelect={selected => update('space', selected)} group="space">{title}</M_SelectableOption>)}</div>
          </fieldset>
          <M_FormField id="context" label="ЕСТЬ ПОЖЕЛАНИЯ ПО РАЗМЕЩЕНИЮ? · НЕОБЯЗАТЕЛЬНО" placeholder="Площадь, сроки, особенности пространства" value={form.context} onChange={e => update('context', e.target.value)} />
        </div>}
        {form.purpose === 'gift' && <M_FormField id="context" label="ЧТО ВАЖНО ПРИ ВЫБОРЕ ПОДАРКА? · НЕОБЯЗАТЕЛЬНО" placeholder="Пожелания или сроки" value={form.context} onChange={e => update('context', e.target.value)} />}
        {form.purpose === 'other' && <M_FormField id="context" label="РАССКАЖИТЕ О ВАШЕМ ЗАПРОСЕ · НЕОБЯЗАТЕЛЬНО" placeholder="Ваш комментарий" value={form.context} onChange={e => update('context', e.target.value)} />}
        <div className="purchase-dialog__fields">
          <M_FormField id="city" label="ВАШ ГОРОД · НЕОБЯЗАТЕЛЬНО" placeholder="Например, Санкт-Петербург" value={form.city} onChange={e => update('city', e.target.value)} />
          <M_FormField id="name" label="КАК К ВАМ ОБРАЩАТЬСЯ?" required placeholder="Ваше имя" autoComplete="name" value={form.name} error={errors.name} onChange={e => update('name', e.target.value)} />
          <M_FormField id="contact" label="КОНТАКТ ДЛЯ ОТВЕТА" required placeholder="Email или мессенджер" autoComplete="email" value={form.contact} error={errors.contact} onChange={e => update('contact', e.target.value)} />
        </div>
        <div className="purchase-dialog__actions">
          <A_Button variant="solid" arrow type="submit">ОТПРАВИТЬ ЗАПРОС</A_Button>
          <A_Button variant="text" onClick={fillExample} arrow>ПРИМЕР ЗАПОЛНЕНИЯ</A_Button>
        </div>
        <p className="purchase-dialog__disclaimer">Демонстрационная форма · данные не отправляются. Цена из архива не подтверждает наличие.</p>
      </form>}
    </div>
  </div>
}
