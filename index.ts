import dotenv from 'dotenv'
import server from './src/server'

dotenv.config()

const { HOST, PORT }  = process.env

server.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`)
    console.log(`⚡️[server]: Server is running at ${HOST}:${PORT}`)
})
