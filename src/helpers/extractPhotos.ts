export default (text: string) => {
    const EXTRACT_PHOTOS_REGEX = /"(https:\/\/lh3\.googleusercontent\.com\/pw\/[a-zA-Z0-9\-_]*)"/g

    const links = []
    let match
    while (match = EXTRACT_PHOTOS_REGEX.exec(text)) 
        links.push(match[1])
    return links
}