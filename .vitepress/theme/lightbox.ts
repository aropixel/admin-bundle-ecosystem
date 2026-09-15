// Click-to-enlarge for screenshots in the "See it in action" grid.
// A single delegated listener on document survives VitePress's SPA route
// changes, so it doesn't need to be re-bound per page.
export function setupLightbox() {
  if (typeof window === 'undefined') return

  function getOverlay(): { overlay: HTMLDivElement; img: HTMLImageElement } {
    let overlay = document.getElementById('aro-lightbox') as HTMLDivElement | null
    if (!overlay) {
      overlay = document.createElement('div')
      overlay.id = 'aro-lightbox'
      const img = document.createElement('img')
      img.alt = ''
      overlay.appendChild(img)
      overlay.addEventListener('click', () => overlay!.classList.remove('is-open'))
      document.body.appendChild(overlay)
    }
    return { overlay, img: overlay.querySelector('img')! }
  }

  document.addEventListener('click', (event) => {
    const target = event.target as HTMLElement
    const thumb = target.closest('.aro-shot-grid img') as HTMLImageElement | null
    if (!thumb) return

    const { overlay, img } = getOverlay()
    img.src = thumb.src
    img.alt = thumb.alt
    overlay.classList.add('is-open')
  })

  document.addEventListener('keydown', (event) => {
    if (event.key !== 'Escape') return
    document.getElementById('aro-lightbox')?.classList.remove('is-open')
  })
}
