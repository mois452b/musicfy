import { Request, Response } from 'express';
import { createMusic, deleteMusic, getMusicById, getAllMusics, updateMusic, getGenres, getRecommendationsByCity } from './musicServices';



export class MusicController {

    static async getRecommendationsByCity(req: Request, res: Response): Promise<void> {
        const { cityName } = req.params;
        const [error, data] = await getRecommendationsByCity(cityName);
        if (error) {
            res.status(500).json({ ok: false, message: error.message });
            return;
        }
        if (data && data.length > 0) {
            res.status(200).json({ ok: true, message: `Recommendations for ${cityName} obtained successfully`, data });
            return;
        }
        res.status(404).json({ ok: false, message: `No recommendations found for ${cityName}`, data: [] });
    }
	static async getGenres(req: Request, res: Response): Promise<void> {
        const [error, data] = await getGenres()
        if (error) {
            res.status(500).json({ ok: false, message: error.message })
            return;
        }
        res.status(200).json({ ok: true, message: "data obtained successfully", data });
	}

    static async getAll(req: Request, res: Response): Promise<void> {
        const [error, data] = await getAllMusics()
        if (error) {
            res.status(500).json({ ok: false, message: error.message })
            return;
        }
        res.status(200).json({ ok: true, message: "data obtained successfully", data });
    };

    static async getById(req: Request, res: Response): Promise<void> {
        const { id } = req.params
        const [error, data] = await getMusicById(id)
        if (error) {
            res.status(500).json({ ok: false, message: error.message })
            return;
        }
        res.status(200).json({ ok: true, message: "data obtained successfully", data });
    };

    static async create(req: Request, res: Response): Promise<void> {
        const { name } = req.body
        const [error, data] = await createMusic(name)
        if (error) {
            res.status(500).json({ ok: false, message: error.message })
            return;
        }
        res.status(200).json({ ok: true, message: "data obtained successfully", data });
    };

    static async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params
        const { name } = req.body
        const [error, data] = await updateMusic(id, name)
        if (error) {
            res.status(500).json({ ok: false, message: error.message })
            return;
        }
        res.status(200).json({ ok: true, message: "data obtained successfully", data });
    };

    static async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params
        const [error, data] = await deleteMusic(id)
        if (error) {
            res.status(500).json({ ok: false, message: error.message })
            return;
        }
        res.status(200).json({ ok: true, message: "data obtained successfully", data });
    };
}
