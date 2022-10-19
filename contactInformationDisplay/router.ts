import type {Request, Response} from 'express';
import express from 'express';
import UserCollection from './collection';
import ContactInformationDisplayCollection from './collection';
import * as contactValidator from './middleware';
import * as util from './util';

const router = express.Router();

/**
 * Create a contact information display.
 *
 * @name POST /api/contactInformationDisplay
 *
 * @param {boolean} contactInformationDisplayed - whether the information will be displayed on a user's profile
 * @param {string} username - The username of the user
 * @param {string} contactNumber - contact number of the user
 * @param {string} contactEmail - contact email of the user
 * @param {string} contactWebsite - contact website of the user
 * @param {string} contactAddress - contact address of the user
 * @return {ContactInformationDisplayResponse} - The created contact information display
 * @throws {400} - If contactNumber is not valid
 *
 */
router.post(
  '/',
  [
    contactValidator.isValidNumber
  ],
  async (req: Request, res: Response) => {
    const contactInformationDisplay = await ContactInformationDisplayCollection.addOne(req.body.contactInformationDisplayed, req.body.username, req.body.contactNumber, req.body.contactEmail, req.body.contactWebsite, req.body.contactAddress);
    res.status(201).json({
      message: 'Your contact information display was created successfully.',
      contactInformationDisplay: util.constructContactResponse(contactInformationDisplay)
    });
  }
);

/**
 * Update a user's profile.
 *
 * @name PUT /api/contactInformationDisplay
 *
 * @param {boolean} contactInformationDisplayed - whether the information will be displayed on a user's profile
 * @param {string} username - The username of the user
 * @param {string} contactNumber - contact number of the user
 * @param {string} contactEmail - contact email of the user
 * @param {string} contactWebsite - contact website of the user
 * @param {string} contactAddress - contact address of the user
 * @throws {400} - If contactNumber is not valid
 */
router.put(
  '/',
  [
    contactValidator.isValidNumber
  ],
  async (req: Request, res: Response) => {
    const contactInformationDisplay = await ContactInformationDisplayCollection.updateOne(req.body.username, req.body);
    res.status(200).json({
      message: 'Your contact information was updated successfully.',
      contactInformationDisplay: util.constructContactResponse(contactInformationDisplay)
    });
  }
);

export {router as contactInformationDisplayRouter};
