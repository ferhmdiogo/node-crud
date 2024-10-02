import {fastify} from 'fastify'
import {DatabaseMemory} from './database-memory.js'

const server = fastify()

server.post('/videos', () => {
    return ''
})

server.get('/videos', () => {
    return ''
})

server.put('/videos/:id', () => {
    return ''
})

server.delete('/videos/:id', () => {
    return ''
})

server.listen({
    port: 3333,
})