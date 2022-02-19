import 'reflect-metadata'

import express, { Express, Request, Response, NextFunction } from 'express'


const app: Express = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

export { app }