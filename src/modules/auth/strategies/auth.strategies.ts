import userService from '../../user/user.service';
import JwtService from '../jwt/jwt.service';

const passport = require('passport');
const LocalStrategy = require('passport-local');

const localStrategy = new LocalStrategy(
    async (username: string, password: string, done: any) => {
        let user: any = await userService.getUser(username);

        try {
            let senhas = await JwtService.compararSenhas(password, user[0].password);

            if (user === null) {
                return done("Erro, usuário inválido")
            }
            if (senhas === false) {
                return done(null, false)
            }

            delete user[0].password;

            return done(null, { "access_token": JwtService.gerarToken(user[0]) })
        } catch (err) {
            return console.log(err as Error);
        }
    })

passport.use(localStrategy)
export const loginStrategy = passport.authenticate('local', { session: false });
export { passport };
