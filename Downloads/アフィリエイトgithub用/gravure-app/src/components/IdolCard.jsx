import { useState } from 'react'
import CoverImage from './CoverImage.jsx'
import { fontFamily, idolName, idolTitle } from '../i18n.js'

export default function IdolCard({ idol, lang, onClick }) {
  const [pressed, setPressed] = useState(false)
  const ff = fontFamily(lang)

  return (
    <article
      className="card"
      onClick={() => onClick(idol)}
      onMouseDown={() => setPressed(true)}
      onMouseUp={() => setPressed(false)}
      onMouseLeave={() => setPressed(false)}
      onTouchStart={() => setPressed(true)}
      onTouchEnd={() => setPressed(false)}
      style={{
        boxShadow: pressed
          ? `0 2px 12px ${idol.accent}33`
          : `0 6px 28px rgba(0,0,0,.6), 0 0 0 1px ${idol.accent}28`,
        transform: pressed ? 'scale(0.955)' : undefined,
      }}
    >
      <div className="card-img">
        <CoverImage idol={idol} />
        <div className="card-grad" />
        <div className="card-rank" style={{ border: `1px solid ${idol.accent}60`, color: idol.accent }}>
          #{idol.rank}
        </div>
        <div className="card-tag" style={{ background: idol.accent, fontFamily: ff }}>
          {idol.tag[lang]}
        </div>
        <div className="card-yt-badge">
          <svg width="8" height="8" viewBox="0 0 10 10" fill="white"><polygon points="0,0 10,5 0,10"/></svg>
          動画あり
        </div>
        <div className="card-title-text" style={{ fontFamily: ff }}>
          {idolTitle(idol, lang)}
        </div>
      </div>
      <div className="card-body">
        <div className="card-name" style={{ fontFamily: ff }}>{idolName(idol, lang)}</div>
        <div className="card-meta">{idol.publisher} · {idol.release}</div>
        <div
          className="card-price"
          style={{ color: idol.accent, background: `${idol.accent}18`, border: `1px solid ${idol.accent}35` }}
        >
          {idol.price}
        </div>
      </div>
    </article>
  )
}
