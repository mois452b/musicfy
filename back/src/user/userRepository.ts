import { Client } from "cassandra-driver";
import { client } from "../db/conection";
import { User } from "./userModel";
import { v4 } from 'uuid';

export class UserRepository {
    private static users: User[] = []

    static async getCities(): Promise<string[]> {
        const result = await client.execute('SELECT city FROM usuario;')
        const cities = new Set<string>(
            result.rows.map(row => row.city)
        );
        return [...cities]
    }
    
    static async save(data: Omit<User, "id">): Promise<User | null> {
        const id = v4();
        await client.execute(
            'INSERT INTO usuario (id, name, password, city) VALUES ( ?, ?, ?, ?);', 
            [id, data.name, data.password, data.city]
        )
        return { id, ...data }
    }

    static async find(id: string): Promise<User | null> {
        const result = await client.execute(`SELECT * FROM usuario WHERE id = ?;`, [id])
        const data = result.first() ?? null
        return { id: data.id, name: data.name, password: data.password, city: data.city }
    }

    static async findByName(name: string): Promise<User | null> {
        const result = await client.execute(`SELECT * FROM usuario WHERE name = ? ALLOW FILTERING;`, [name])
        const data = result.first() ?? null
        return { id: data.id, name: data.name, password: data.password, city: data.city }
    }

    static async getAll(): Promise<User[]> {
        const result = await client.execute(`SELECT * FROM usuario;`)
        const data = result.rows.map((row) => ({
            id: row.id,
            name: row.name,
            password: row.password,
            city: row.city
        }))
        return data
    }

    static async update(id: string, data: Omit<User, "id">): Promise<User | null> {

        await client.execute(
            'UPDATE usuario SET name = ?, password = ?, city = ? WHERE id = ?;', 
            [data.name, data.password, data.city, id]
        )
        return { id, ...data }
    }

    static async delete(id: string): Promise<User | null> {

        await client.execute(
            'DELETE FROM usuario WHERE id = ?;', 
            [id]
        )
        return null
    }
}

