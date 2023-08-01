import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Thumbs, Zoom, Keyboard } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import 'swiper/css/zoom';

import Spinner from '@/components/Spinner'

const Album = () => {

    const router = useRouter()

    const [ photos, setPhotos ] = useState([])
    const [ isLoading, setIsLoading ] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        const { album } = router.query
        fetch(`/api/photos?album=https://photos.app.goo.gl/${album}`).then((res) => res.json()).then((data) => {
            if(data?.links.length) {
                console.log(data)
                setPhotos({ src: data.links, title: data.title })
                setIsLoading(false)
            }
        })  
    }, [router])

    return (
        <main>
            <header id="header">
                <a href="/" target="_self">
                    <img src={'/logo1.png'} width='50' height='50' alt='logo' />
                    <h1>Photos</h1>
                </a>
            </header>
            <div id='album-wrapper'>
                {
                    isLoading ? 
                        <div id='spinner-wrapper'>
                            <Spinner />
                        </div>
                         :
                        <>
                            <Swiper
                                pagination={{
                                    type: 'progressbar',
                                }}
                                navigation={true}
                                modules={[Pagination, Navigation, Thumbs, Zoom, Keyboard]}
                                className="swiper"
                            >
                                {
                                    photos?.src?.map((photo) => (
                                        <SwiperSlide>
                                            <img src={photo} className='photo' />
                                        </SwiperSlide>
                                    ))
                                }
                            </Swiper>
                        </>
                }
            </div>
        </main>
    )
}

export default Album