/**
 * To start the application, you must first obtain the Marvel plublic key and
 * private key. To do this, go to https://developer.marvel.com/ create account,
 * then go to https://developer.marvel.com/documentation/authorization for more details.
 */
const API_KEY_NOT_FOUND = 'YOUR API KEY NOT FOUND'
const MARVEL_API_PUBLIC_KEY = API_KEY_NOT_FOUND // Your Marvel api plublic key
const MARVEL_API_PRIVATE_KEY = API_KEY_NOT_FOUND // Your Marvel api private key

export const marvelCredenditals = {
    ts: new Date().getTime(), // ts - a timestamp (or other long string which can change on a request-by-request basis)
    apiKey: MARVEL_API_PUBLIC_KEY, 
    privateKey: MARVEL_API_PRIVATE_KEY 
}

export function verifyApiKey() {
    return (MARVEL_API_PUBLIC_KEY === API_KEY_NOT_FOUND || MARVEL_API_PRIVATE_KEY === API_KEY_NOT_FOUND)
}