import { User } from "./userModel";
import { UserRepository } from "./userRepository";
import { CustomResponseServiceType } from "../types";

export const createUser = async ( name: string, email: string, password: string): Promise<CustomResponseServiceType<User>> => {
    let data: User | null = null;
    let error: Error | null = null;
    try {
        const result = null // await UserRepository.save({ name, password,  });
        if (result) {
            data = result;
        } else {
            error = new Error("algo salio mal");
        }
    } catch (err) {
        error = new Error(err as string);
    }
    return [error, data] as CustomResponseServiceType<User>;
};

export const getAllUsers = async (): Promise<CustomResponseServiceType<User[]>> => {
    let data: User[] | null = null;
    let error: Error | null = null;
    try {
        const result = await UserRepository.getAll();
        if (result) {
            data = result;
        } else {
            error = new Error("algo salio mal");
        }
    } catch (err) {
        error = new Error(err as string);
    }
    return [error, data] as CustomResponseServiceType<User[]>;
};

export const getUserById = async (userId: string): Promise<CustomResponseServiceType<User>> => {
    let data: User | null = null;
    let error: Error | null = null;
    try {
        const result = await UserRepository.find(userId);
        if (result) {
            data = result;
        } else {
            error = new Error("algo salio mal");
        }
    } catch (err) {
        error = new Error(err as string);
    }
    return [error, data] as CustomResponseServiceType<User>;
};

export const getUserByEmail = async (email: string): Promise<CustomResponseServiceType<User>> => {
    let data: User | null = null;
    let error: Error | null = null;
    try {
        const result = await UserRepository.findByEmail(email);
        if (result) {
            data = result;
        } else {
            error = new Error("algo salio mal");
        }
    } catch (err) {
        error = new Error(err as string);
    }
    return [error, data] as CustomResponseServiceType<User>;
}

export const updateUser = async (userId: string, newData: Omit<User, "id">): Promise<CustomResponseServiceType<User>> => {
    let data: User | null = null;
    let error: Error | null = null;
    try {
        const result = await UserRepository.update(userId, newData);
        if (result) {
            data = result;
        } else {
            error = new Error("algo salio mal");
        }
    } catch (err) {
        error = new Error(err as string);
    }
    return [error, data] as CustomResponseServiceType<User>;
};

export const deleteUser = async (userId: string): Promise<CustomResponseServiceType<User>> => {
    let data: User | null = null;
    let error: Error | null = null;
    try {
        const result = await UserRepository.delete(userId)
        if (result) {
            data = result;
        }
        else {
            error = new Error("algo salio mal");
        }
    } catch (err) {
        error = new Error(err as string);
    }
    return [error, data] as CustomResponseServiceType<User>;
};