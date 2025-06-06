import express from 'express';
import { MusicController } from './musicController';

const router = express.Router();

router.post('/', MusicController.create);
router.get('/', MusicController.getAll);
router.get('/genres', MusicController.getGenres);
router.get('/recommendations/city/:cityName', MusicController.getRecommendationsByCity); 
router.put('/:id', MusicController.update);
router.delete('/:id', MusicController.delete);

export default router;
