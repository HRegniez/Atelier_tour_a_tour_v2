import React, { lazy, Suspense } from 'react'
import './styles.sass'
import '../../svg.sass'
import imgData from './imgData.json'

const LazyImage = lazy(() => import('../lazyImg/LazyImg'))

const Gallerie = () => {
  return (
    <section id='galerie' className='gallerie'>
      <div className='gallerie_gradient'></div>
      <h2>Galerie</h2>
      <div className="gallerie_contain">
        <Suspense fallback={<div>Loading...</div>}>
          {Array.isArray(imgData) && imgData.map(img => (
            <LazyImage url={img.url} alt={img.alt} key={img.id} />
          ))}
        </Suspense>
      </div>
    </section>
  )
}

export default Gallerie
