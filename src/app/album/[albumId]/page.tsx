'use client'
import { useState, useEffect} from 'react'
import Header from '@/components/Header'
import AlbumType from '@/types/AlbumType'
import { Image } from 'antd';
import Spinner from '@/components/Spinner';

const page = ({ params }: { params: { albumId: string } }) => {

    const [ album, setAlbum ] = useState<AlbumType>()
    const [ isLoading, setIsLoading ] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        fetch(`/api/v1/album?id=${params.albumId}`).then((res) => res.json()).then((data) => {
            processAlbum(data.albumInfo[0])
            setIsLoading(false)
        })
    }, [])

    const processAlbum = (data: AlbumType) => {
        let pics = Array.from(new Set(data.links).values())
        data.links = pics
        setAlbum(data)
    }

    return (
        <div>
            <Header sub={album?.title} />
            <br /><br /><br />
            <div className="album-container">
                {
                    isLoading ? 
                    <div className='loader-wrapper'>
                      <Spinner width={'10em'} />
                    </div>
                    : (
                    <Image.PreviewGroup>
                    {
                        album?.links?.map((photo, idx) => (
                            <Image key={`photo-${idx}`} src={photo} />
                        ))
                    }
                    </Image.PreviewGroup>
                    )
                }
            </div>
        </div>
    )
}

export default page