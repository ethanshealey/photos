import { NextRequest, NextResponse } from "next/server"
import albums from '@/data/albums.json'
import getImgurAuthorization from "@/helpers/getImgurAuthorization"
import axios from "axios"
import extractPhotos from "@/helpers/extractPhotos"

export const dynamic = 'force-dynamic'

export async function GET(req: NextRequest): Promise<Response> {

    const albumInfo: any[] = []

    const promises = albums.albums.map(url => fetch(url).then(res => res.text()))

    await Promise.all(promises).then(async (res: string[]) => {
        for await (const data of res) {
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
        }
    })

    return new NextResponse(JSON.stringify({
        albumInfo
    }))

}