export function readingTime(content) {
    const words = content.trim().split(/\s+/).length
    const minutes = Math.ceil(words / 200)
    return `${minutes} min de lectura`
}