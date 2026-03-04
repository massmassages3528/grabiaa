import { useEffect, useRef } from 'react'

export default function YouTubePlayer({ videoId, onClose }) {
  const containerRef = useRef(null)
  const playerRef    = useRef(null)

  useEffect(() => {
    if (!videoId) return

    const initPlayer = () => {
      if (!containerRef.current) return
      containerRef.current.innerHTML = '<div id="yt-player-target"></div>'

      playerRef.current = new window.YT.Player('yt-player-target', {
        videoId,
        playerVars: { autoplay: 1, playsinline: 1, rel: 0, modestbranding: 1 },
        events: {
          onReady: (e) => e.target.playVideo(),
        },
      })
    }

    if (window.YT && window.YT.Player) {
      initPlayer()
    } else {
      // API not yet loaded — inject script once, then init on callback
      if (!document.getElementById('yt-api-script')) {
        const tag = document.createElement('script')
        tag.id  = 'yt-api-script'
        tag.src = 'https://www.youtube.com/iframe_api'
        document.head.appendChild(tag)
      }
      window.onYouTubeIframeAPIReady = () => {
        initPlayer()
      }
    }

    return () => {
      if (playerRef.current) {
        try { playerRef.current.destroy() } catch (_) {}
        playerRef.current = null
      }
    }
  }, [videoId])

  // ESC to close
  useEffect(() => {
    const h = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', h)
    return () => window.removeEventListener('keydown', h)
  }, [onClose])

  return (
    <div
      className="yt-player-overlay open"
      onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
    >
      <div className="yt-player-inner">
        <div className="yt-player-frame" ref={containerRef} />
      </div>
      <button className="yt-close-btn" onClick={onClose}>✕ 閉じる</button>
    </div>
  )
}
