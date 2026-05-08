'use client'

import { useEffect, useRef } from 'react'

export default function EnhancifyWidget() {
  const containerRef = useRef<HTMLDivElement>(null)
  const initRef = useRef(false)

  useEffect(() => {
    if (initRef.current) return
    const container = containerRef.current
    if (!container) return
    initRef.current = true

    const ds = container.dataset
    const params =
      '&defaultScheme=' + encodeURIComponent(ds.defaultscheme || 'false') +
      '&color1=' + encodeURIComponent(ds.color1 || '') +
      '&color2=' + encodeURIComponent(ds.color2 || '') +
      '&coBrandedColor=' + encodeURIComponent(ds.cobrandedcolor || '') +
      '&page=' + encodeURIComponent(ds.page || '') +
      '&border=' + encodeURIComponent(ds.border || '') +
      '&hideLink=' + encodeURIComponent(ds.hidelink || '')

    const widgetScript = document.createElement('script')
    widgetScript.type = 'text/javascript'
    widgetScript.src = 'https://www.enhancify.com/build/js/paymentcalculatorwidget.js'
    container.append(widgetScript)

    const fontStyle = document.createElement('style')
    fontStyle.textContent =
      "@import url('https://fonts.googleapis.com/css2?family=Fira+Sans:wght@400;500;700;900&display=swap');"
    container.append(fontStyle)

    widgetScript.onload = () => {
      const xhr = new XMLHttpRequest()
      xhr.open('GET', 'https://www.enhancify.com?siteaction=paymentcalculatorwidget' + params)
      xhr.onload = () => {
        if (xhr.status === 200) {
          const initScript = document.createElement('script')
          initScript.type = 'text/javascript'
          initScript.text = xhr.response
          container.append(initScript)
        }
      }
      xhr.send()
    }
  }, [])

  return (
    <div
      ref={containerRef}
      id="paymentcalculatorwidget"
      data-defaultScheme="false"
      data-color1="#DC2626"
      data-color2="#0F0F0F"
      data-coBrandedColor="#FFFFFF"
      data-border="true"
      data-page="9930352"
      data-hideLink="0"
    />
  )
}
