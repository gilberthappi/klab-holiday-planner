import express from 'express';
import { signUp, logIn, changePassword } from '../controllers/authentication';
import { All, deleteUser, getUserByEmail, updateByEmail } from '../controllers/authentication';

import { verifyToken, isAdmin } from '../middleware';

const authRouter = express.Router();

authRouter.post('/signup', signUp);
authRouter.post('/login', logIn);
authRouter.post('/changePassword', verifyToken, changePassword);

authRouter.get("/users",All);
authRouter.get('/users/getOne/:email',getUserByEmail);
authRouter.put('/users/update/:email',updateByEmail);
authRouter.delete('/users/delete/:email',verifyToken,isAdmin,deleteUser)

export default authRouter;