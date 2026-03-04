import { useEffect } from 'react'
import CoverImage from './CoverImage.jsx'
import { affiliateLink } from '../data.js'
import { T, fontFamily, idolName, idolTitle } from '../i18n.js'

const AmazonSVG = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
    <path d="M13.958 10.09c0 1.232.029 2.256-.591 3.351-.502.891-1.301 1.438-2.186 1.438-1.214 0-1.922-.924-1.922-2.292 0-2.692 2.415-3.182 4.699-3.182v.685zm3.186 7.705c-.209.189-.512.201-.745.074-1.052-.872-1.238-1.276-1.814-2.106-1.734 1.767-2.962 2.297-5.209 2.297-2.66 0-4.731-1.641-4.731-4.925 0-2.565 1.391-4.309 3.37-5.164 1.715-.754 4.11-.891 5.942-1.095v-.41c0-.753.06-1.642-.383-2.294-.385-.579-1.124-.817-1.776-.817-1.205 0-2.277.618-2.54 1.897-.054.284-.265.562-.549.576l-3.076-.333c-.259-.058-.547-.266-.472-.661.707-3.716 4.066-4.835 7.076-4.835 1.536 0 3.547.41 4.761 1.568 1.536 1.436 1.387 3.352 1.387 5.441v4.927c0 1.484.614 2.135 1.192 2.935.203.285.248.626-.011.838-.645.537-1.79 1.536-2.423 2.097l-.009-.011z"/>
    <path d="M20.945 19.745c-2.775 1.755-6.809 2.689-10.28 2.689-4.862 0-9.249-1.798-12.565-4.793-.26-.235-.028-.556.285-.374 3.575 2.078 7.997 3.329 12.562 3.329 3.079 0 6.466-.638 9.584-1.96.47-.201.863.309.414.609z"/>
  </svg>
)

const YTIconRed = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="#FF0000">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
)

const YTBadgeSVG = () => (
  <svg width="13" height="9" viewBox="0 0 24 17" fill="white">
    <path d="M23.5 2.5s-.3-1.9-1.1-2.7c-1.1-1.1-2.3-1.1-2.8-1.2C16.6-.1 12 0 12 0S7.4-.1 4.4.6C3.9.7 2.7.7 1.6 1.8.8 2.6.5 4.5.5 4.5S.2 6.7.2 8.9v2.1c0 2.2.3 4.4.3 4.4s.3 1.9 1.1 2.7c1.1 1.1 2.5 1.1 3.1 1.2C6.8 19.4 12 19.5 12 19.5s4.6 0 7.6-.8c.5-.1 1.7-.7 2.8-1.8.8-.8 1.1-2.7 1.1-2.7s.3-2.2.3-4.4V7c0-2.2-.3-4.5-.3-4.5zM9.7 13.5V5.4l7.6 4.1-7.6 4z"/>
  </svg>
)

export default function DetailModal({ idol, lang, onClose, onPlayYT }) {
  const t  = T[lang]
  const ff = fontFamily(lang)
  const name  = idolName(idol, lang)
  const title = idolTitle(idol, lang)

  useEffect(() => {
    const h = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', h)
    return () => window.removeEventListener('keydown', h)
  }, [onClose])

  const details = [
    [t.name,       `${name}（${idol.name}）`],
    [t.titleLabel, title],
    [t.publisher,  idol.publisher],
    [t.release,    idol.release],
    [t.price,      idol.price],
  ]

  // ── body content (shared between mobile/PC right pane) ──
  const BodyContent = () => (
    <div className="modal-body-content">
      {/* Accent line */}
      <div className="modal-accent-line" style={{ background: `linear-gradient(to right, ${idol.accent}cc, transparent)` }} />

      {/* Description */}
      <p className="modal-desc" style={{ fontFamily: ff }}>{idol.desc[lang]}</p>

      {/* YouTube thumbnail card */}
      <div style={{ margin: '0 16px 12px' }}>
        <div className="modal-section-label" style={{ fontFamily: ff }}>{t.ytLabel}</div>
        <div
          className="yt-thumb-card"
          onClick={() => onPlayYT(idol.youtubeId)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && onPlayYT(idol.youtubeId)}
        >
          <img
            src={`https://img.youtube.com/vi/${idol.youtubeId}/hqdefault.jpg`}
            alt="YouTube thumbnail"
          />
          <div className="yt-overlay-dark" />
          <div className="yt-play-center">
            <div
              className="yt-play-circle"
              style={{ border: `2.5px solid ${idol.accent}`, boxShadow: `0 0 32px ${idol.accent}88` }}
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill={idol.accent} style={{ marginLeft: 4 }}>
                <path d="M8 5v14l11-7z"/>
              </svg>
            </div>
          </div>
          <div className="yt-red-badge"><YTBadgeSVG /> ▶ {t.ytPlay}</div>
          <div className="yt-label-left">📹 メイキング動画</div>
        </div>
      </div>

      {/* Details table */}
      <div className="details-table">
        {details.map(([label, value], i) => (
          <div className="detail-row" key={label} style={i === details.length - 1 ? { borderBottom: 'none' } : {}}>
            <span className="detail-label" style={{ fontFamily: ff }}>{label}</span>
            <span className="detail-value" style={{ fontFamily: ff }}>{value}</span>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="cta-area">
        <a
          className="btn-amazon"
          href={affiliateLink(idol.asin)}
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontFamily: ff }}
        >
          <AmazonSVG />
          {t.buyAmazon} · {idol.price}
        </a>
        <div
          className="btn-yt-link"
          onClick={() => onPlayYT(idol.youtubeId)}
          style={{ fontFamily: ff, cursor: 'pointer' }}
        >
          <YTIconRed />
          {t.ytLabel}
        </div>
      </div>
    </div>
  )

  return (
    <div
      className="modal-overlay open"
      onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
    >
      <div className="modal-sheet" style={{ border: `1px solid ${idol.accent}25` }}>

        {/* ── Mobile: stacked layout ── */}
        {/* ── PC: left hero / right scroll (CSS grid handles this) ── */}

        {/* Left / top: hero image */}
        <div className="modal-left">
          <div className="modal-handle">
            <div className="modal-handle-bar" />
          </div>
          <div className="modal-hero">
            <CoverImage idol={idol} />
            <div className="modal-hero-grad" />
            <div className="modal-hero-info">
              <div
                className="modal-tag-badge"
                style={{ background: idol.accent, fontFamily: ff }}
              >
                {idol.tag[lang]}
              </div>
              <div
                className="modal-title-main"
                style={{ fontFamily: ff, textShadow: `0 2px 20px rgba(0,0,0,1), 0 0 50px ${idol.accent}50` }}
              >
                {title}
              </div>
              <div className="modal-name-sub" style={{ fontFamily: ff }}>
                {name}（{idol.name}）
              </div>
            </div>
          </div>
        </div>

        {/* Right / bottom: scrollable content */}
        <div className="modal-right">
          <BodyContent />
        </div>

      </div>
    </div>
  )
}
