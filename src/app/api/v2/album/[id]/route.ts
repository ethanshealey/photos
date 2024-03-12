import { NextRequest, NextResponse } from "next/server"
import { ApiPageProps } from "@/helpers/ApiPageProps"
import axios, { AxiosHeaders } from "axios"
import getImgurAuthorization from "@/helpers/getImgurAuthorization"

export const dynamic = 'force-dynamic'

export async function GET(req: NextRequest, { params: { id } }: Pick<ApiPageProps, 'params'>): Promise<Response> {

  const headers = getImgurAuthorization()

  let response = await axios.get(`https://api.imgur.com/3/album/${id}`, {
    headers: headers
  })
  response = await response.data
  
  console.log(response.data.images)

  return new NextResponse(JSON.stringify({
    image_urls: response.data.images
  }))
}