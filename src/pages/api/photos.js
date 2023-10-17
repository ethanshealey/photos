// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {

  const url = req.query.album
  
  fetch(url)
    .then((res) => res.text()).then((data) => {
        const regex = /"(https:\/\/lh3\.googleusercontent\.com\/pw\/[a-zA-Z0-9\-_]*)"/g

        const extractPhotos = (content) => {
          const links = []
          let match
          while (match = regex.exec(content)) 
            links.push(match[1])
          return links
        }

        const links = extractPhotos(data).map((link) => 'https://lh3.googleusercontent.com/pw/' + link.split('/')[4] + '=w2048')
        const regex2 = /<title>.*<\/title>/g
        let title = regex2.exec(data)
        title = title[0].replace('<title>', '').replace(' - Google Photos</title>', '')
        const id = url.split('/')[3]

        res.status(200).json({ links: [ ...new Set(links) ], thumb: links[0]?.replace('=w1024', '=w500'), title: title, id: id })
    })
 
}
