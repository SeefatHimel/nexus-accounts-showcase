import { useCallback, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

/**
 * @param {{
 *   accountTitle: string
 *   anchorId: string
 *   sections: Array<{
 *     id: string
 *     title: string
 *     blurb?: string
 *     images: Array<{ src: string; alt: string }>
 *     pairWithNext?: boolean
 *   }>
 * }} props
 */
export function AccountShowcase({ accountTitle, anchorId, sections }) {
  const [lightbox, setLightbox] = useState(null)

  const close = useCallback(() => setLightbox(null), [])

  useEffect(() => {
    if (!lightbox) return undefined
    const onKey = (e) => {
      if (e.key === 'Escape') close()
    }
    window.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev
    }
  }, [lightbox, close])

  const blocks = []
  for (let i = 0; i < sections.length; i += 1) {
    const section = sections[i]
    const next = sections[i + 1]

    if (section.pairWithNext && next) {
      blocks.push(
        <div className="showcase-pair" key={`pair-${section.id}-${next.id}`}>
          {renderShowcaseSection(section, anchorId, setLightbox, true, section.id)}
          {renderShowcaseSection(next, anchorId, setLightbox, true, next.id)}
        </div>,
      )
      i += 1
    } else {
      blocks.push(renderShowcaseSection(section, anchorId, setLightbox, false, section.id))
    }
  }

  return (
    <div className="account-showcase" id={anchorId}>
      <div className="showcase-intro">
        <h3 className="showcase-heading">Screenshots · {accountTitle}</h3>
        <p className="showcase-lede">
          Shared for information only—grouped by area of the account. Tap an image to view it full
          size.
        </p>
      </div>

      {blocks}

      {lightbox
        ? createPortal(
            <div
              className="lightbox"
              role="dialog"
              aria-modal="true"
              aria-label="Screenshot preview"
              onClick={close}
            >
              <button
                type="button"
                className="lightbox-close"
                onClick={(e) => {
                  e.stopPropagation()
                  close()
                }}
              >
                Close
              </button>
              <div className="lightbox-inner">
                <figure className="lightbox-figure" onClick={(e) => e.stopPropagation()}>
                  <img src={lightbox.src} alt={lightbox.alt} />
                  {lightbox.alt ? <figcaption>{lightbox.alt}</figcaption> : null}
                </figure>
              </div>
            </div>,
            document.body,
          )
        : null}
    </div>
  )
}

/**
 * @param {boolean} inPair
 * @param {string} reactKey
 */
function renderShowcaseSection(section, anchorId, setLightbox, inPair, reactKey) {
  return (
    <section
      key={reactKey}
      className={inPair ? 'showcase-section showcase-section--paired' : 'showcase-section'}
      id={`${anchorId}-${section.id}`}
      aria-labelledby={`${anchorId}-${section.id}-title`}
    >
      <h4 className="showcase-section-title" id={`${anchorId}-${section.id}-title`}>
        {section.title}
      </h4>
      {section.blurb ? <p className="showcase-blurb">{section.blurb}</p> : null}
      <div className="showcase-grid">
        {section.images.map((shot) => (
          <button
            key={shot.src}
            type="button"
            className="showcase-thumb"
            onClick={() => setLightbox(shot)}
          >
            <img src={shot.src} alt={shot.alt} loading="lazy" width={400} height={711} />
          </button>
        ))}
      </div>
    </section>
  )
}
