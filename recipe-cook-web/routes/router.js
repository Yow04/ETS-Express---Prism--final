import express from 'express';
const router = express.Router();
import {register,login} from '../controllers/AuthController.js'; 
import {saveCustom,myRecipes,update,remove} from '../controllers/RecipeController.js';
import {authenticate} from '../middlewares/authenticate.js'; // middleware untuk auth_user dari x-api-key

//non Authenticated routes
router.post('/register', register);
router.post('/login', login);


router.post('/recipes/custom',authenticate, saveCustom);
router.get('/recipes/custom', authenticate, myRecipes);
router.put('/recipes/custom/:id', authenticate, update);
router.delete('/recipes/custom/:id', authenticate, remove);

export default router;
