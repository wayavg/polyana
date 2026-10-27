import React from 'react'
import A_Typography from '../atoms/A_Typography.jsx'
import A_TextLink from '../atoms/A_TextLink.jsx'
import A_Divider from '../atoms/A_Divider.jsx'

export default function O_Footer() {
  return <footer className="site-footer">
    <A_Typography variant="eyebrow" className="site-footer__eyebrow">НЕЗАВИСИМОЕ ОБЪЕДИНЕНИЕ ХУДОЖНИКОВ</A_Typography>
    <A_Typography variant="footerbrand" className="site-footer__brand">Поляна</A_Typography>
    <div className="site-footer__social"><A_Typography variant="eyebrow">АНОНСЫ И НОВОСТИ</A_Typography><A_Typography variant="footerlink">Telegram ↗</A_Typography></div>
    <A_Divider className="site-footer__rule site-footer__rule--top" />
    <div className="site-footer__links"><A_TextLink>Работы</A_TextLink><A_TextLink>Художники</A_TextLink><A_TextLink>События</A_TextLink><A_TextLink>О Поляне</A_TextLink></div>
    <A_Divider className="site-footer__rule site-footer__rule--bottom" />
    <A_Typography variant="caption" className="site-footer__address">Адрес мастерской до переезда: Санкт-Петербург, пер. Каховского, 5Б, пом. 9Н</A_Typography>
  </footer>
}
