import axios from 'axios'
import { FINNHUB_API_KEY } from '../constants'

export default axios.create({
    baseURL: 'https://finnhub.io/api/v1',
    params: {
        token: FINNHUB_API_KEY
    }
})