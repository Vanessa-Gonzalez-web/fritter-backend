import type {Request, Response, NextFunction} from 'express';
import {Types} from 'mongoose';
import ContactInformationDisplayCollection from '../contactInformationDisplay/collection';

/**
 * Checks if a contact number in req.body is valid, that is, it matches the username regex
 */
const isValidNumber = (req: Request, res: Response, next: NextFunction) => {
  const contactNumberRegex = /[0-9]{10}/;
  if (!contactNumberRegex.test(req.body.contactNumber)) {
    res.status(400).json({
      error: {
        username: 'Number must be a 10 digit long string of numeric characters.'
      }
    });
    return;
  }

  next();
};

export {
  isValidNumber
};
