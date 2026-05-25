import { ImageResponse } from 'next/og'
import { siteConfig } from '@/lib/site'

export const alt = `${siteConfig.name} — ${siteConfig.title}`
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: 80,
          background: 'linear-gradient(135deg, #0f172a 0%, #020617 50%, #0c4a6e 100%)',
          color: '#f8fafc',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        <div
          style={{
            fontSize: 28,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: '#22d3ee',
            marginBottom: 24,
          }}
        >
          Portfolio
        </div>
        <div style={{ fontSize: 72, fontWeight: 700, lineHeight: 1.1, marginBottom: 16 }}>
          {siteConfig.name}
        </div>
        <div style={{ fontSize: 40, color: '#94a3b8', marginBottom: 32 }}>{siteConfig.title}</div>
        <div style={{ fontSize: 26, color: '#cbd5e1', maxWidth: 900, lineHeight: 1.4 }}>
          {siteConfig.description}
        </div>
      </div>
    ),
    { ...size }
  )
}
