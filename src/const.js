import axios from "axios"

export const baseURL = 'https://api.apilayer.com/exchangerates_data/'
export const apiKey = 'ViTLt9pO6xjPBmkF7fNOWbnpIyJN77dP'
export const currencyAxios = axios.create({baseURL})