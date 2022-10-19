import type {HydratedDocument, Types} from 'mongoose';
import type {ContactInformationDisplay} from './model';
import ContactInformationDisplayModel from './model';

/**
 * This file contains a class with functionality to interact with users stored
 * in MongoDB, including adding, finding, updating, and deleting. Feel free to add
 * additional operations in this file.
 *
 * Note: HydratedDocument<User> is the output of the UserModel() constructor,
 * and contains all the information in User. https://mongoosejs.com/docs/typescript.html
 */
class ContactInformationDisplayCollection {
  /**
   * Add a new contact information display
   *
   * @param {boolean} contactInformationDisplayed - whether the information will be displayed on a user's profile
   * @param {string} username - The username of the user
   * @param {string} contactNumber - contact number of the user
   * @param {string} contactEmail - contact email of the user
   * @param {string} contactWebsite - contact website of the user
   * @param {string} contactAddress - contact address of the user
   * @return {Promise<HydratedDocument<ContactInformationDisplay>>} - The newly created contact information display
   */
  static async addOne(contactInformationDisplayed: boolean, username: string, contactNumber: string, contactEmail: string, contactWebsite: string, contactAddress: string): Promise<HydratedDocument<ContactInformationDisplay>> {
    const contactInformation = new ContactInformationDisplayModel({contactInformationDisplayed, username, contactNumber, contactEmail, contactWebsite, contactAddress});
    await contactInformation.save();
    return contactInformation;
  }

  /**
   * Update user's information
   *
   * @param {string} username - The username of the user to update
   * @param {Object} contactDetails - An object with the user's updated contact information
   * @return {Promise<HydratedDocument<ContactInformationDisplay>>} - The updated contact information
   */
  static async updateOne(username: string, contactDetails: any): Promise<HydratedDocument<ContactInformationDisplay>> {
    const contactInformation = await ContactInformationDisplayModel.findOne({username});

    if (contactDetails.contactInformationDisplayed) {
      contactInformation.contactInformationDisplayed = contactDetails.contactInformationDisplayed as boolean;
    }

    if (contactDetails.username) {
      contactInformation.username = contactDetails.username as string;
    }

    if (contactDetails.contactNumber) {
      contactInformation.contactNumber = contactDetails.contactNumber as string;
    }

    if (contactDetails.contactEmail) {
      contactInformation.contactNumber = contactDetails.contactNumber as string;
    }

    if (contactDetails.contactWebsite) {
      contactInformation.contactNumber = contactDetails.contactNumber as string;
    }

    if (contactDetails.contactAddress) {
      contactInformation.contactNumber = contactDetails.contactNumber as string;
    }

    await contactInformation.save();
    return contactInformation;
  }
}

export default ContactInformationDisplayCollection;
