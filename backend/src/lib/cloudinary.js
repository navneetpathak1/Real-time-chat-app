import {v2 as cloudinary} from "cloudinary"

import {config} from 'dotenv'

config()

cloudinary.config({
    cloud_name: process.env.CLOUDINARU_CLOUD_NAME,
    api_key: process.env.CLOUDINARU_API_KEY,
    api_secret: process.env.CLOUDINARU_API_SECRET
})

export default cloudinary;