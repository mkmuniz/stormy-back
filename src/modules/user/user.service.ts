import { User } from './entities/user.entities';
const bcrypt = require('bcrypt');


export default class userService {
    static async getAll() {
        try {
            return await User.find();
        } catch(err: any) {
            return console.log(err as Error);
        }
    }
    
    static async getOne(id: string) {
        try {
            return await User.findById(id);
        } catch(err: any) {
            return console.log(err as Error);
        }
    }

    static async getUser(username: any) {
        try {
            return await User.find({"username": username});
        } catch(err: any) {
            return console.log(err as Error);
        }
    }

    static async getUserEmail(email: any) {
        try {
            return await User.find({"email": email});
        } catch(err: any) {
            return console.log(err as Error);
        }
    }


    static async postOne(body: any) {
        const salt = await bcrypt.genSalt(10);
        body.password = await bcrypt.hash(body.password, salt);
        try {
            return await User.create(body);
        } catch(err: any) {
            return undefined;
        }
    }

    static async patchOne(id: string, body: any) {
        try {
            return await User.findByIdAndUpdate(id, body);
        } catch(err: any) {
            return console.log(err as Error);
        }
    }

    static async deleteOne(id: string) {
        try {
            return await User.findByIdAndDelete(id);;
        } catch(err: any) {
            return console.log(err as Error);
        }
    }
}