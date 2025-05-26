import { Client } from "cassandra-driver";
import { client } from "../db/conection";
import { Music } from "./musicModel";
import { v4 } from 'uuid';
export class MusicRepository {
    private static musics: Music[] = []

    static async save(data: Omit<Music, "id">): Promise<Music | null> {
        const id = v4();
        await client.execute(
            'INSERT INTO music (id, title, genre, artiste, source, image_url) VALUES ( ?, ?, ?, ?, ?, ?);', 
            [v4(), data.title, data.genre, data.artiste, data.source, data.image_url]
        )
        return { id, ...data }
    }

    static async find(id: string): Promise<Music | null> {
        const result = await client.execute(`SELECT * FROM music WHERE id = ?;`, [id])
        const data = result.first() ?? null
        return { id: data.id, title: data.title, genre: data.genre, artiste: data.artiste, source: data.source, image_url: data.image_url }
    }

    static async getAll(): Promise<Music[]> {
        const resul = await client.execute('SELECT * FROM musica;')
        const data = resul.rows.map((row) => ({
            id: row.id,
            title: row.title,
            genre: row.genre,
            artiste: row.artist,
            source: row.source,
            image_url: row.image_url
        }))
        return data
    }

    static async update(id: string, data: Omit<Music, "id">): Promise<Music | null> {
        await client.execute(
            'UPDATE music SET title = ?, genre = ?, artiste = ?, source = ?, image_url = ? WHERE id = ?;', 
            [data.title, data.genre, data.artiste, data.source, data.image_url, id]
        )
        return { id, ...data }
    }

    static async delete(id: string): Promise<Music | null> {
        await client.execute(
            'DELETE FROM music WHERE id = ?;', 
            [id]
        )
        return null
    }
}

