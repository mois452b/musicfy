import { Request, Response } from 'express';
import { deleteUser, getUserById, getAllUsers, updateUser, getCities } from './userServices';
import { CustomRequest } from '../auth/authMiddleware';

export class UserController {

    static async getCities(req: Request, res: Response): Promise<void> {
        const [error, data] = await getCities()
        if (error) {
            res.status(500).json({ ok: false, message: error.message })
            return;
        }
        res.status(200).json({ ok: true, message: "data obtained successfully", data });
    }
    static async getAll(req: Request, res: Response): Promise<void> {
        const [error, data] = await getAllUsers()
        if (error) {
            res.status(500).json({ ok: false, message: error.message })
            return;
        }
        res.status(200).json({ ok: true, message: "data obtained successfully", data });
    };

    static async getById(req: Request, res: Response): Promise<void> {
        const { id } = req.params
        const [error, data] = await getUserById(id)
        if (error) {
            res.status(500).json({ ok: false, message: error.message })
            return;
        }
        res.status(200).json({ ok: true, message: "data obtained successfully", data });
    };
    
    static async getByToken(req: CustomRequest, res: Response): Promise<void> {
        const id = req.user?.id;
        if( !id ) {
            res.status(401).json({ ok: false, message: "Unauthorized" })
            return;
        }
        const [error, data] = await getUserById(id)
        if (error) {
            res.status(500).json({ ok: false, message: error.message })
            return;
        }
        res.status(200).json({ ok: true, message: "data obtained successfully", data });
    };

    static async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params
        const { name } = req.body
        const [error, data] = await updateUser(id, name)
        if (error) {
            res.status(500).json({ ok: false, message: error.message })
            return;
        }
        res.status(200).json({ ok: true, message: "data obtained successfully", data });
    };

    static async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params
        const [error, data] = await deleteUser(id)
        if (error) {
            res.status(500).json({ ok: false, message: error.message })
            return;
        }
        res.status(200).json({ ok: true, message: "data obtained successfully", data });
    };
}
