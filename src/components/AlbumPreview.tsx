import React from 'react'

type AlbumPreviewType = {
    album: any
}

const AlbumPreview = ({ album }: AlbumPreviewType) => {
  return (
    <div className="album-preview" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, .85)), url('${album?.thumb}')` }}>
        <h1 className="album-preview-title">{ album.title }</h1>
        <p className="album-preview-sub">{ album.links.length } photos</p>
    </div>
  )
}

export default AlbumPreview