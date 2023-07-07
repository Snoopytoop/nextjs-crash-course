const dev = process.env.NODE_ENV !== 'production'

export const server = dev ? 'http://http://localhost:3000/' : 'https//yourwebsite.com'