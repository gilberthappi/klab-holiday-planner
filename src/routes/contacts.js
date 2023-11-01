import express from 'express';
import {
  createContact,
  getContacts,
  getContactById,
  deleteContact,
} from '../controllers/contact/contactMe.js';
import { uploaded } from '../middleware/photoStorage.js';

const contactRouter = express.Router();

// Routes
/**
 * @swagger
 * tags:
 *   name: Contacts
 *   description: API for managing contacts
 */

/**
 * @swagger
 * /cont/contact:
 *   post:
 *     summary: Create a new contact
 *     tags: [Contacts]
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               Full name:
 *                 type: string
 *               email:
 *                 type: string
 *               Phone number:
 *                 type: string
 *               Service:
 *                 type: string
 *               Message:
 *                 type: string
 *             required:
 *               - email
 *               - Message
 *     responses:
 *       201:
 *         description: Contact created successfully
 *         content:
 *           application/json:
 *             $ref: '#/components/schemas/ContactResponse'
 *       400:
 *         description: Bad Request - Invalid data
 *       500:
 *         description: Internal server error
 */


/**
 * @swagger
 * /cont/contact/all:
 *   get:
 *     summary: Get all contacts
 *     tags: [Contacts]
 *     responses:
 *       200:
 *         description: List of contacts
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Contact-Us'
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /cont/contact/{id}:
 *   get:
 *     summary: Get a contact by ID
 *     tags: [Contacts]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Contact details
 *         content:
 *           application/json:
 *             $ref: '#/components/schemas/Contact-Us'
 *       404:
 *         description: Contact not found
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /cont/contact/{id}:
 *   delete:
 *     summary: Delete a contact by ID
 *     tags: [Contacts]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Contact deleted successfully
 *       404:
 *         description: Contact not found
 *       500:
 *         description: Internal server error
 */

contactRouter.post('/contact',uploaded, createContact);
contactRouter.get('/contact/all', getContacts);
contactRouter.get('/contact/:id', getContactById);
contactRouter.delete('/contact/:id', deleteContact);

export default contactRouter;
