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

export const getCities = async (): Promise<CustomResponseServiceType<string[]>> => {
    let data: string[] | null = null;
    let error: Error | null = null;
    try {
        const result = await UserRepository.getCities();
        if (result) {
            data = result;
        } else {
            error = new Error("algo salio mal");
        }
    } catch (err) {
        error = new Error(err as string);
    }
    return [error, data] as CustomResponseServiceType<string[]>;
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

export const getUserByName =  async (userName: string): Promise<CustomResponseServiceType<User>> => {
    let data: User | null = null;
    let error: Error | null = null;
    try {
        const result = await UserRepository.findByName(userName);
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