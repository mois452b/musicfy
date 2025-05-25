// src/auth/authService.ts
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { CustomResponseServiceType } from "../types"
import { User } from '../user/userModel';
import { validatePassword } from '../utils/passwordUtils';
import { createUser, getUserByEmail } from '../user/userServices';

const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret_key';

export const register = async (name: string, email: string, password: string): Promise<CustomResponseServiceType<User>> => {
    const [getUserError, existingUserData] = await getUserByEmail(email);
    if( existingUserData ) {
        const error = new Error("El correo ya existe");
        return [error, null];
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const [saveUserError, newUserData] = await createUser(name, email, hashedPassword);
    return [saveUserError, newUserData] as CustomResponseServiceType<User>
};

export const login = async (email: string, password: string): Promise<CustomResponseServiceType<string>> => {
    const [error, user] = await getUserByEmail(email);
    if( error ) return [error, null];
    
    if( !(await validatePassword(password, user.password)) ) return [new Error("Credenciales inválidas"), null]
    return [null, jwt.sign({ id: user.id }, JWT_SECRET)]
};

