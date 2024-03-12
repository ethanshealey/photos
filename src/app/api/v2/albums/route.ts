// import { NextRequest, NextResponse } from "next/server"
// import albums from '@/data/albums.json'
// import getImgurAuthorization from "@/helpers/getImgurAuthorization"
// import axios from "axios"

// export const dynamic = 'force-dynamic'

// export async function GET(req: NextRequest): Promise<Response> {

//   const headers = getImgurAuthorization()

//   const albumsInfo: any[] = []

//   for await (const id of albums) {
//     let response = await axios.get(`https://api.imgur.com/3/album/${id}`, { headers: headers })
//     response = await response.data
//     albumsInfo.push(response.data)
//   }
  
//   console.log(albumsInfo)

//   return new NextResponse(JSON.stringify({
//     albumsInfo
//   }))
// }