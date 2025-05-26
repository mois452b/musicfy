import { Music } from "./musicModel";
import { MusicRepository } from "./musicRepository";
import { CustomResponseServiceType } from "../types";

export const createMusic = async ( name: string): Promise<CustomResponseServiceType<Music>> => {
    let data: Music | null = null;
    let error: Error | null = null;
    try {
        const result = await MusicRepository.save({ name, createdAt: new Date() });
        if (result) {
            data = result;
        } else {
            error = new Error("algo salio mal");
        }
    } catch (err) {
        error = new Error(err as string);
    }
    return [error, data] as CustomResponseServiceType<Music>;
};

export const getAllMusics = async (): Promise<CustomResponseServiceType<Music[]>> => {
    let data: Music[] | null = null;
    let error: Error | null = null;
    try {
        const result = await MusicRepository.getAll();
        if (result) {
            data = result;
        } else {
            error = new Error("algo salio mal");
        }
    } catch (err) {
        error = new Error(err as string);
    }
    return [error, data] as CustomResponseServiceType<Music[]>;
};

export const getMusicById = async (musicId: string): Promise<CustomResponseServiceType<Music>> => {
    let data: Music | null = null;
    let error: Error | null = null;
    try {
        const result = await MusicRepository.find(musicId);
        if (result) {
            data = result;
        } else {
            error = new Error("algo salio mal");
        }
    } catch (err) {
        error = new Error(err as string);
    }
    return [error, data] as CustomResponseServiceType<Music>;
};

export const updateMusic = async (musicId: string, newData: Omit<Music, "id">): Promise<CustomResponseServiceType<Music>> => {
    let data: Music | null = null;
    let error: Error | null = null;
    try {
        const result = await MusicRepository.update(musicId, newData);
        if (result) {
            data = result;
        } else {
            error = new Error("algo salio mal");
        }
    } catch (err) {
        error = new Error(err as string);
    }
    return [error, data] as CustomResponseServiceType<Music>;
};

export const deleteMusic = async (musicId: string): Promise<CustomResponseServiceType<Music>> => {
    let data: Music | null = null;
    let error: Error | null = null;
    try {
        const result = await MusicRepository.delete(musicId)
        if (result) {
            data = result;
        }
        else {
            error = new Error("algo salio mal");
        }
    } catch (err) {
        error = new Error(err as string);
    }
    return [error, data] as CustomResponseServiceType<Music>;
};