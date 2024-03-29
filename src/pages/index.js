import Head from 'next/head'
import { useEffect, useState } from 'react'

export default function Home() {

  const [ albums, setAlbums ] = useState([])

  useEffect(() => {
    fetch('/api/albums').then((res) => res.json()).then((data) => {
      console.log(data)
      data.forEach((album) => {
        fetch(`/api/photos?album=${album}`).then((res) => res.json()).then((data) => {
          setAlbums((old) => [ ...old, data ])
        })
      })
    })
  }, [])

  const openAlbum = (album) => {
    window.open(`/albums/${album.id}`, "_self")
  }

  return (
    <>
      <Head>
        <title>Photos | ethanshealey.com</title>
        <meta name="description" content="Photography by Ethan Shealey" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo1.png" />
      </Head>
      <main>
        <header id="header">
          <a href="/" target="_self">
              <img src={'/logo1.png'} width='50' height='50' alt='logo' />
              <h1>Photos</h1>
          </a>
        </header>
        <div id="gallery">
          {
            albums.map((album) => (
              <div key={album.title} className='album' onClick={() => openAlbum(album)}>
                <img src={album.thumb} referrerPolicy='no-referrer' className='album-thumbnail' />
                <h3>{ album.title }</h3>
                <p>{ album.links.length } item{ album.links.length !== 1 ? 's': '' }</p>
              </div>
            ))
          }
        </div>
      </main>
    </>
  )
}
