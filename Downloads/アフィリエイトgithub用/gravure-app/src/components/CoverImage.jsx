import { useState } from 'react'
import { googleBooksImg, amazonImg } from '../data.js'

export default function CoverImage({ idol, style = {} }) {
  const [idx, setIdx]     = useState(0)
  const [loaded, setLoaded] = useState(false)

  const srcs = idol.isbn
    ? [googleBooksImg(idol.isbn), amazonImg(idol.asin)]
    : [amazonImg(idol.asin)]
  const allFailed = idx >= srcs.length

  return (
    <div style={{ position: 'absolute', inset: 0, background: idol.bg, overflow: 'hidden', ...style }}>
      {/* Fallback initial char */}
      <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <span style={{ fontSize: 80, fontFamily: 'serif', color: idol.accent, opacity: 0.12, fontWeight: 900, userSelect: 'none' }}>
          {idol.name[0]}
        </span>
      </div>
      {!allFailed && (
        <img
          key={idx}
          src={srcs[idx]}
          alt={idol.name}
          onLoad={() => setLoaded(true)}
          onError={() => { setLoaded(false); setIdx(i => i + 1) }}
          style={{
            position: 'absolute', inset: 0,
            width: '100%', height: '100%',
            objectFit: 'cover', objectPosition: 'center top',
            opacity: loaded ? 1 : 0,
            transition: 'opacity 0.5s ease',
          }}
        />
      )}
    </div>
  )
}
