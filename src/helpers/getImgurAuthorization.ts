import { AxiosHeaders } from "axios";

export default () => {
    const headers = new AxiosHeaders()
    headers.setAuthorization(`Client-ID ${process.env.IMGUR_CLIENT_ID}`)

    return headers
}