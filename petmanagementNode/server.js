import { createServer } from 'node:http'

const port = Number(process.env.PORT || 3001)
const page = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Maypet | Node.js</title>
  <style>
    body { margin: 0; min-height: 100vh; display: grid; place-items: center; background: #f3f7f3; color: #193f32; font: 18px/1.6 system-ui, sans-serif; }
    main { margin: 24px; padding: 40px; max-width: 560px; background: white; border-radius: 24px; box-shadow: 0 12px 48px #193f3210; }
    h1 { line-height: 1.2; } a { color: #196b48; } li { margin: 10px 0; }
    .status { color: #196b48; font-weight: 700; }
  </style>
</head>
<body><main>
  <p>MAYPET</p>
  <h1>Node.js is running</h1>
  <p class="status">Server online</p>
  <p>This page is served by a separate Node.js HTTP server.</p>
  <ul>
    <li><a href="/api/health">Check Node.js API health</a></li>
    <li><a href="http://localhost:5173/">Open React app</a></li>
    <li><a href="http://localhost:5000/api/health">Check Laravel API (Docker)</a></li>
  </ul>
</main></body></html>`

const server = createServer((request, response) => {
  if (request.method !== 'GET' && request.method !== 'HEAD') {
    response.writeHead(405, { Allow: 'GET, HEAD' })
    response.end()
    return
  }
  const pathname = new URL(request.url, 'http://localhost').pathname
  if (pathname === '/api/health') {
    response.writeHead(200, { 'Content-Type': 'application/json' })
    response.end(request.method === 'HEAD' ? undefined : JSON.stringify({ status: 'ok', service: 'nodejs-demo' }))
    return
  }
  if (pathname === '/') {
    response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })
    response.end(request.method === 'HEAD' ? undefined : page)
    return
  }
  response.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' })
  response.end(request.method === 'HEAD' ? undefined : 'Not found')
})

server.listen(port, '0.0.0.0', () => console.log(`Maypet Node.js: http://localhost:${port}`))
for (const signal of ['SIGINT', 'SIGTERM']) {
  process.on(signal, () => server.close(() => process.exit(0)))
}
