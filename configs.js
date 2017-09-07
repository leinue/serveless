
let configs = {
    cors: {
      headers: [
        'WWW-Authenticate', 'Server-Authorization', 'Content-Type', 'Authorization'
      ],
      credentials: true,
      origin: '*'
    },

    port: 5555,

    mongodb: {
        dbname: 'test',
        ip: 'user_db:27017'
    }
}

export default configs
