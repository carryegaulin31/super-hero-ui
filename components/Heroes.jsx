import React, { useState } from 'react'

export default () => {
  const [slug, setSlug] = useState('')

  return (
    <div className="page">
      <div className="title">Meet the Heroes</div>
      <div className="subtitle">A searchable list of all your favorite heroes</div>
      <input type="text" name="search" onChange={event => setSlug(event.target.value)} />
      <div className="slug">{slug}</div>
    </div>
  )
}
