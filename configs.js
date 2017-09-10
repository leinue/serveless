
import os from 'os';

const isInDocker = os.hostname().indexOf('service_in_container') > -1;

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
        ip: isInDocker ? 'user_db:27017': 'localhost:27017'
    }
}

export default configs;
