'use client'
import AlbumPreview from '@/components/AlbumPreview'
import Header from '@/components/Header'
import Spinner from '@/components/Spinner'
import parseAlbumIdFromUrl from '@/helpers/parseAlbumIdFromUrl'
import { useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'

export default function Home() {

  const [ albums, setAlbums ] = useState([])
  const [ isLoading, setIsLoading ] = useState(false)
  const router = useRouter()

  useEffect(() => {
    fetchAlbums()
  }, [])

  const fetchAlbums = async () => {
    setIsLoading(true)
    const res = await fetch(`/api/v1/albums`)
    const data = await res.json()
    setAlbums(data.albumInfo)
    setIsLoading(false)
  }

  const navigateToAlbum = (album: any) => {
    const albumId = parseAlbumIdFromUrl(album.url)
    router.push(`/album/${albumId}`)
  }

  return (
    <main>
      <Header />
      <br /><br /><br /><br />
      { isLoading ? 
        <div className='loader-wrapper'>
          <Spinner width={'10em'} />
        </div>
        : (
        <div className="album-container">
        {
          albums?.map((album, idx) => (
            <div className="album-preview-container" key={`album-${idx}`} onClick={() => navigateToAlbum(album)}>
              <AlbumPreview album={album} />
            </div>
          ))
        }
        </div>
      )}
      
    </main>
  )
}
