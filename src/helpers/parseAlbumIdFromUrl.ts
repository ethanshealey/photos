export default (url: string) => {
    return url.split('/')[3].replaceAll('"', '')
}