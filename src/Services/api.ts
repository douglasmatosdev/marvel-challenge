import axios from 'axios'
import md5 from 'md5'
import { marvelCredenditals } from '../Utils/secure'
import { MARVEL_URL } from '../Utils'

const api = axios.create({
    baseURL: MARVEL_URL
})

const limit = 5

const ApiServices = {
    allHeros: async (offset: number, searchHero = null, simulateError = false) => {
        const { ts, apiKey, privateKey } = marvelCredenditals

        const hash = simulateError ? 'TesteError' : md5(ts + privateKey + apiKey)
        const params = `/characters?${searchHero ? `nameStartsWith=${searchHero}&` : ''}limit=${limit}&offset=${offset}&ts=${ts}&apikey=${apiKey}&hash=${hash}`

        let data: any

        await api.get(params)
            .then(
                res => data = res,
                err => {
                    data = {
                        err: err?.request?.status,
                        errTxt: err?.request?.statusText,
                        internalError: err?.request?.response
                    }
                }
            )
        return new Promise((resolve, reject) => data?.data ? resolve(data) : reject(data))
    }
}

export default ApiServices