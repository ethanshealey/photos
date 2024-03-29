import { useState, useEffect } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Thumbs, Zoom, Keyboard } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import 'swiper/css/zoom';

import Spinner from '@/components/Spinner'

import { Image } from 'antd';

const Album = () => {

    const router = useRouter()

    const [ photos, setPhotos ] = useState([])
    const [ isLoading, setIsLoading ] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        const { album } = router.query
        fetch(`/api/photos?album=https://photos.app.goo.gl/${album}`).then((res) => res.json()).then((data) => {
            if(data?.links.length) {
                setPhotos({ links: data.links, title: data.title })
                setIsLoading(false)
            }
        })  
    }, [router])

    return (
        <main>
            <Head>
                <title>Photos | ethanshealey.com</title>
                <meta name="description" content="Photography by Ethan Shealey" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href={"/logo1.png"} />
            </Head>
            <header id="header">
                <a href="/" target="_self">
                    <img src={'/logo1.png'} width='50' height='50' alt='logo' />
                    <h1>Photos</h1>
                    <p>&nbsp;&nbsp;{ photos.title }</p>
                </a>
            </header>
            <div id='album-wrapper'>
                <div className='gallery'>
                    <Image.PreviewGroup>
                        {
                            photos?.links?.map((photo) => (
                                <Image key={`${photo}`} src={photo} width={200} className='gallery-item' />
                            ))
                        }
                    </Image.PreviewGroup>
                </div>
            </div>
        </main>
    )
}

export default Album