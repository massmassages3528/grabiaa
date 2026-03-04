import { useState, useMemo } from 'react'
import { idols } from './data.js'
import { T, LANGS, fontFamily, idolName, idolTitle } from './i18n.js'
import IdolCard    from './components/IdolCard.jsx'
import DetailModal from './components/DetailModal.jsx'
import YouTubePlayer from './components/YouTubePlayer.jsx'

// ── Sidebar nav items ────────────────────────────────────────────────────────
const NAV = [
  { icon: '📸', key: 'navBooks', active: true },
  { icon: '❤️', key: 'navSaved' },
  { icon: '🛒', key: 'navCart'  },
  { icon: '👤', key: 'navMe'    },
]

export default function App() {
  const [lang,     setLang]     = useState('zh')
  const [search,   setSearch]   = useState('')
  const [sort,     setSort]     = useState('rank')
  const [selected, setSelected] = useState(null)   // idol for detail modal
  const [ytId,     setYtId]     = useState(null)   // youtube video id for player

  const t  = T[lang]
  const ff = fontFamily(lang)

  // ── filtered & sorted list ───────────────────────────────────────────────
  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase()
    let list = idols.filter(idol => {
      if (!q) return true
      return [
        idol.name, idol.reading,
        idol.nameZh, idol.nameKo, idol.nameEn,
        idol.title, idol.titleZh, idol.titleKo, idol.titleEn,
      ].some(s => s?.toLowerCase().includes(q))
    })
    if (sort === 'rank') list = [...list].sort((a, b) => a.rank - b.rank)
    return list
  }, [search, sort])

  const handlePlayYT = (id) => {
    setYtId(id)
  }

  // ── Sidebar (PC) ─────────────────────────────────────────────────────────
  const Sidebar = () => (
    <aside className="app-sidebar">
      <div>
        <div className="sidebar-logo" style={{ fontFamily: ff }}>{t.appTitle}</div>
        <div className="sidebar-sub">{t.appSub}</div>
      </div>

      <nav className="sidebar-nav">
        {NAV.map(item => (
          <button
            key={item.key}
            className={`sidebar-nav-item${item.active ? ' active' : ''}`}
            style={{ fontFamily: ff }}
          >
            <span className="sidebar-nav-icon">{item.icon}</span>
            {t[item.key]}
          </button>
        ))}
      </nav>

      {/* Language switcher */}
      <div className="sidebar-lang">
        <div className="sidebar-lang-label">{t.langLabel}</div>
        <div className="sidebar-lang-btns">
          {LANGS.map(l => (
            <button
              key={l.code}
              className={`sidebar-lang-btn${lang === l.code ? ' active' : ''}`}
              onClick={() => setLang(l.code)}
            >
              {l.flag} {l.label}
            </button>
          ))}
        </div>
      </div>
    </aside>
  )

  // ── Header ───────────────────────────────────────────────────────────────
  const Header = () => (
    <header className="app-header">
      {/* Title row (mobile only — hidden on PC via CSS) */}
      <div className="header-title-row">
        <div>
          <h1 className="header-title" style={{ fontFamily: ff }}>{t.appTitle}</h1>
          <p className="header-sub">{t.appSub}</p>
        </div>
        {/* Lang switcher (mobile) */}
        <div className="lang-bar header-lang-row">
          {LANGS.map(l => (
            <button
              key={l.code}
              className={`lang-btn${lang === l.code ? ' active' : ''}`}
              onClick={() => setLang(l.code)}
            >
              {l.flag} {l.label}
            </button>
          ))}
        </div>
      </div>

      {/* Search */}
      <div className="search-box">
        <span className="search-icon">🔍</span>
        <input
          type="search"
          className="search-input"
          placeholder={t.searchPlaceholder}
          value={search}
          onChange={e => setSearch(e.target.value)}
          style={{ fontFamily: ff }}
        />
        {search && (
          <button className="search-clear" onClick={() => setSearch('')}>✕</button>
        )}
      </div>

      {/* Sort + count */}
      <div className="sort-row">
        <div className="sort-btns">
          {[['rank', t.sortRank], ['price', t.sortPrice]].map(([val, label]) => (
            <button
              key={val}
              className={`sort-btn${sort === val ? ' active' : ''}`}
              onClick={() => setSort(val)}
              style={{ fontFamily: ff }}
            >
              {label}
            </button>
          ))}
        </div>
        <span className="result-count">{t.count(filtered.length)}</span>
      </div>
    </header>
  )

  // ── Main grid ─────────────────────────────────────────────────────────────
  const MainGrid = () => (
    <main className="app-main">
      <div className="card-grid">
        {filtered.map((idol, i) => (
          <div
            key={idol.id}
            style={{ animation: `fadeInUp 0.45s ease ${i * 0.06}s both` }}
          >
            <IdolCard idol={idol} lang={lang} onClick={setSelected} />
          </div>
        ))}
        {filtered.length === 0 && (
          <div className="no-results" style={{ fontFamily: ff }}>{t.noResults}</div>
        )}
      </div>
    </main>
  )

  // ── Tab bar (mobile) ──────────────────────────────────────────────────────
  const TabBar = () => (
    <nav className="app-tabbar">
      {NAV.map(item => (
        <button
          key={item.key}
          className={`tab-btn${item.active ? ' active' : ''}`}
        >
          <span className="tab-icon">{item.icon}</span>
          <span className="tab-label" style={{ fontFamily: ff }}>{t[item.key]}</span>
        </button>
      ))}
    </nav>
  )

  return (
    <div className="app-root">
      <div className="app-inner">
        <Sidebar />

        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <div style={{ height: 'env(safe-area-inset-top, 0px)' }} />
          <Header />
          <MainGrid />
        </div>

        <TabBar />
      </div>

      {/* Detail modal */}
      {selected && (
        <DetailModal
          idol={selected}
          lang={lang}
          onClose={() => setSelected(null)}
          onPlayYT={handlePlayYT}
        />
      )}

      {/* YouTube player overlay */}
      {ytId && (
        <YouTubePlayer
          videoId={ytId}
          onClose={() => setYtId(null)}
        />
      )}
    </div>
  )
}
