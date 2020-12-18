import mongoose from 'mongoose'

const tiktokSchema = mongoose.Schema({
    url: String,
    channel: String,
    description: String,
    song: String,
    likes: String,
    messages: String,
    shares: String,
})
const Tiktok = mongoose.model('Tiktok', tiktokSchema)
export default Tiktok