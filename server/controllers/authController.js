import passwordHelper from '../helpers/passwordHelper';
import authHelper from '../helpers/authHelpers';
import TokenHelper from '../helpers/tokenHelper';

/**
 * This class contains all methods
 * required to handle all
 * authentication routes.
 */
class authController {
  /**
   * This method handles the signup request.
   * @param {object} req The user's request.
   * @param {object} res The response.
   * @returns {object} The status and some data of the user.
   */
  static async signUp(req, res) {
    try {
      const {
        firstname, lastname, email, password, address, phoneNumber
      } = req.body;

      const hashedPassword = passwordHelper.hashPassword(password);
      const data = {
        firstname,
        lastname,
        email,
        password: hashedPassword,
        address,
        phoneNumber
      };
      const user = await authHelper.registerUser(data);
      if (user) {
        const token = await TokenHelper.generateToken({
          id: user.id,
          email,
        });
        res.status(201).send({
          token,
          status: 201,
          message: 'Account has been created successfully.',
          data
        });
      }
    } catch (error) {
      return res.status(500).json({
        status: 500,
        message: 'Something went wrong when registering the user',
        error: error.message
      });
    }
  }
}

export default authController;
