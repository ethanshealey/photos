import { NextRequest, NextResponse } from "next/server"
import albums from '@/data/albums.json'
import getImgurAuthorization from "@/helpers/getImgurAuthorization"
import axios from "axios"
import extractPhotos from "@/helpers/extractPhotos"

export const dynamic = 'force-dynamic'

export async function GET(req: NextRequest): Promise<Response> {

    const id = req.nextUrl.searchParams.get('id')

    const albumInfo: any[] = []

    let data: any = await fetch(`https://photos.app.goo.gl/${id}`)
    data = await data.text()

    const url = /https:\/\/photos.app.goo.gl\/.+?"/.exec(data)
    const links = extractPhotos(data).map((link: string) => link + '=w2048')
    const title = /<title>.*<\/title>/g.exec(data)

    if(title?.length && url?.length) {
        albumInfo.push({
            url: url[0],
            links: links,
            thumb: links[0].replace("=w2048", "=w500"),
            title: title[0].replace('<title>', '').replace(' - Google Photos</title>', '')
        })
    }

    return new NextResponse(JSON.stringify({
        albumInfo
    }))

}