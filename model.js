import { 
    UsersModel 
} from './models/'

function Models(mongoose) {
    global.Users = mongoose.model('Users', UsersModel);
}

Models.prototype = {
    Users: {
        
    }
}

export default Models
