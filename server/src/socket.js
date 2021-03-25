import http from "http";
import { v4 } from 'uuid'

export default class SocketServer {
    constructor({ port }) {
        this.port = port
    }

    async initialize(eventEmitter) {
        const server = http.createServer((req, res) => {
            res.writeHead(200, { 'Content-Type': 'text/plain' })
            res.end('oiiiiiiii')
        })

        server.on('upgrade', (req, socket) => {
            socket.id = v4()
            const headers = [
                'HTTP/1.1 101 web socket protocol handshake'
            ]
        })

        return new Promise((resolve, reject) => {
            server.on('error', reject)
            server.listen(this.port, () => resolve(server))
        })

    }
}