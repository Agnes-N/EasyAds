import passport from 'passport';
import passwordHelper from '../helpers/passwordHelper';
import authHelper from '../helpers/userHelper';
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

  /**
     * This method handles the sign request.
     * @param {object} req The user's request.
     * @param {object} res The response.
     * @returns {object} The status and some data of the user.
     */
  static async signIn(req, res) {
    try {
      passport.authenticate(
        'local',
        { session: false },
        async (error, user) => {
          if (error || !user) {
            return res.status(404).json({ error });
          }
          const {
            id, firstname, lastname, email, address, phoneNumber
          } = user;

          // This is what is stored in token
          const payload = {
            id,
            firstname,
            lastname,
            email,
            address,
            phoneNumber
          };
          const token = await TokenHelper.generateToken(payload);

          // Returning the token and some user information
          req.login(payload, { session: false }, () => res.status(201).json({
            status: 201,
            message: 'User signed in successfully',
            data: {
              token,
              user: {
                firstname,
                lastname,
                email,
                address,
                phoneNumber
              }
            }
          }));
        },
      )(req, res);
    } catch (error) {
      return res.status(500).json({
        status: 500,
        message: 'Something went wrong when signing in',
        error: error.message
      });
    }
  }
}

export default authController;
