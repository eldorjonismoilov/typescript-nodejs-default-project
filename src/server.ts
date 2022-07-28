import express, { Express, Request, Response } from 'express'
import { createServer } from 'http'

const app: Express = express()
const server = createServer(app)

app.get('/', (req: Request, res: Response) => {
    res.json({ message: 'Server is running!' })
})

export = server
