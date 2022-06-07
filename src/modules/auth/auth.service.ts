import { User } from 'modules/user/entities/user.entities';
const bcrypt = require('bcrypt');


export default class authService {

    static async postOne(name: string, password: string) {
        const results = await User.findOne( { "username": name })

        if(results === []) {
            return (404);
        }
        
        try {
            await bcrypt.compare(password, results.password, (result: Boolean) => {
                if(result === true) {
                    return {"resultado": result};
                } else {
                    return {"resultado": result};
                }
            });
        } catch(err: any) {
            return undefined;
        }
    }

}