import albums from '@/albums.json'

export default async function handler(req, res) {

    // for(let album of albums.albums) {
    //     console.log(album)
    //     fetch(album)
    //     .then((res) => res.text()).then((data) => {
    //         const regex = /"(https:\/\/lh3\.googleusercontent\.com\/pw\/[a-zA-Z0-9\-_]*)"/g

    //         const extractPhotos = (content) => {
    //             let match
    //             match = regex.exec(content)
    //             return match[1]
    //         }

    //         const thumb = extractPhotos(data) + '=w500'
    //         const regex2 = /<title>.*<\/title>/g
    //         let title = regex2.exec(data)
    //         title = title[0].replace('<title>', '').replace(' - Google Photos</title>', '')
    //         const id = album.split('/')[3]

    //         console.log({ thumb: thumb, title: title, id: id })
    //         entries.push({ thumb: thumb, title: title, id: id })

    //         // res.status(200).json({ thumb: thumb?.replace('=w1024', '=w500'), title: title, id: id })
    //     })
    // }

    // const entries = []

    // const extractThumbnail = (content) => {
    //     const regex = /"(https:\/\/lh3\.googleusercontent\.com\/pw\/[a-zA-Z0-9\-_]*)"/g
    //     const thumb = regex.exec(content)[1] + '=w500'
    //     const regex2 = /<title>.*<\/title>/g
    //     let title = regex2.exec(content)[1]
    //     return { thumb: thumb, title: title }
    // }

    // await Promise.all(
    //     albums.albums.map(url => fetch(url)
    //     .then((res) => res.text())
    //     .then((data) => extractThumbnail(data)))
    // ).then(console.log)

    // console.log(entries)

    // return res.status(200).json(entries)

    console.log(albums.albums)
    return res.status(200).json(albums.albums)
}