import express from 'express';
import { Contact } from '../controllers/contact/contactMe.js';
import { uploaded } from '../middleware/photoStorage.js';

const contactRouter = express.Router();

/**
 * @swagger
 * tags:
 *   name: Contact
 *   description: Contact API
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Contact-Us:
 *       type: object
 *       properties:
 *         email:
 *           type: string
 *           required: true
 *         message:
 *           type: string
 *           required: true

 *   responses:
 *     ContactResponse:
 *       description: MESSAGE sent successfully
 *       content:
 *         application/json:
 *           example:
 *             message: "MESSAGE sent successfully"
 */

/**
 * @swagger
 * /cont/contact:
 *   post:
 *     summary: User Contact
 *     tags: [Contact]
 *     description: Contact Us.
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               message:
 *                 type: string
 *             required:
 *               - email
 *               - message
 *     responses:
 *       201:
 *         description: Message sent successfully
 *         content:
 *           application/json:
 *             $ref: '#/components/schemas/ContactResponse'
 *       400:
 *         description: Bad Request - Invalid data
 *       404:
 *         description: User with this email does not exist
 *         content:
 *           application/json:
 *             example:
 *               message: "User with this email does not exist"
 */

contactRouter.post('/contact',uploaded, Contact);

export default contactRouter;
