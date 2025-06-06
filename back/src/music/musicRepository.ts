import { Client } from "cassandra-driver";
import { client } from "../db/conection";
import { Music } from "./musicModel";
import { v4 } from 'uuid';
import { log } from "console";
export class MusicRepository {
    private static musics: Music[] = []

    static async getRecommendationsByCity(cityName: string): Promise<Music[]> {
        
        const userResult = await client.execute('SELECT * FROM usuario WHERE city = ? ALLOW FILTERING;', [cityName]);
        const escuchaResult = await client.execute('SELECT * FROM escucha;');
        const musicResult = await client.execute('SELECT * FROM musica;');

        const users = userResult.rows;
        const escuchas = escuchaResult.rows;
        const musicas = musicResult.rows;
        
        const musicCountMap: { [key: string]: number } = {};

        escuchas.forEach(escucha => {
            const user = users.find(user => user.id.toString() == escucha.user_id.toString());
            if (user) {
                const music = musicas.find(music => music.id.toString() === escucha.music_id.toString());
                if (music) {
                    musicCountMap[music.id] = (musicCountMap[music.id] || 0) + 1;
                }
            }
        });
        const sortedMusicIds = Object.keys(musicCountMap).sort((a, b) => musicCountMap[b] - musicCountMap[a]);
        const topMusicIds = sortedMusicIds.slice(0, 8);
        const topMusics = topMusicIds.map(id => musicas.find(music => music.id.toString() === id));

        if (topMusics.length > 0) {
            return topMusics.map(music => ({
                id: music?.id,
                title: music?.title,
                genre: music?.genre,
                artist: music?.artist,
                source: music?.source,
                image_url: music?.image_url,
                listenings: music?.listenings,
            }));
        }
        console.log(`No recommendations found for city: ${cityName}`);
        return [];
    }

    static async getGenres(): Promise<string[]> {
        const result = await client.execute('SELECT genre FROM musica;')

        const generos = new Set(
             result.rows.map(row => {
                return (row.genre) 
            })
        );
       

        return [...generos] as string[]
    }

    static async save(data: Omit<Music, "id">): Promise<Music | null> {
        const id = v4();
        await client.execute(
            'INSERT INTO music (id, title, genre, artist, source, image_url, listenings) VALUES ( ?, ?, ?, ?, ?, ?);', 
            [v4(), data.title, data.genre, data.artist, data.source, data.image_url, data.listenings]
        )
        return { id, ...data }
    }

    static async find(id: string): Promise<Music | null> {
        const result = await client.execute(`SELECT * FROM musica WHERE id = ?;`, [id])
        const data = result.first() ?? null
        return { id: data.id, title: data.title, genre: data.genre, artist: data.artist, source: data.source, image_url: data.image_url, listenings: data.listenings}
    }

    static async getAll(): Promise<Music[]> {
        const resul = await client.execute('SELECT * FROM musica;')
        const data = resul.rows.map((row) => ({
            id: row.id,
            title: row.title,
            genre: row.genre,
            artist: row.artist,
            source: row.source,
            image_url: row.image_url,
            listenings: row.listenings
        }))
        return data
    }

    static async update(id: string, data: Omit<Music, "id">): Promise<Music | null> {
        await client.execute(
            'UPDATE music SET title = ?, genre = ?, artist = ?, source = ?, image_url = ? WHERE id = ?;', 
            [data.title, data.genre, data.artist, data.source, data.image_url, id]
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

