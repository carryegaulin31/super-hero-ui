import React from 'react'

export default ({ id, name, slug }) => (
  <div key={id}>{`${name} (${slug})`}</div>
)
