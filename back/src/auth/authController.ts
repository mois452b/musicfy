import { Request, RequestHandler, Response } from 'express';
import { login, register } from './authServices';

export class AuthController {
  static async register(req: Request, res: Response): Promise<void> {
    const { name, email, password } = req.body;
    if( !name || !email || !password ) {
      res.status(400).json({ ok: false, message: "Todos los campos son obligatorios" });
      return
    }
    const [error, data] = await register(name, email, password);
    if (error) {
      res.status(500).json({ ok: false, message: error.message });
      return;
    }
    res.status(201).json({ ok: true, message: "Usuario creado conxito", data });
  }

  static async login(req: Request, res: Response): Promise<void> {
    const { email, password } = req.body;
    if( !email || !password ) {
      res.status(400).json({ ok: false, message: "Todos los campos son obligatorios" });
      return
    }
    const [error, token] = await login(email, password);
    if (error) {
      res.status(500).json({ ok: false, message: error.message });
      return;
    }
    res.status(201).json({ ok: true, message: "Usuario autenticado", token });
  }
}
