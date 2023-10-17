import { generateToken, hashPassword } from '../../utils';
import { USER } from '../../models';

export const signUp = async (req, res) => {
  try {
    const User = await USER.findOne({ email: req.body.email });

    if (User) {
      return res.status(409).json({
        message: 'User with this email already exists',
      });
    }

    const hashedPassword = await hashPassword(req.body.password);

    req.body.password = hashedPassword;
    console.log(req.body);
    const newUser = await USER.create(req.body);
    if (!newUser) {
      res.status(404).json({ message: 'failed to register' });
    }
    const token = generateToken({
      id: newUser.id,
      // email: newUser.email,
    });

    res.status(201).json({
      message: 'User registered successfully',
      access_token: token,
      USER: {
        email: newUser.email,
        location: newUser.location,
        fullNames: newUser.fullNames,
        phoneNumber: newUser.phoneNumber,
        role: newUser.role,
      },
    });
  } catch (error) {
    console.log(error);
  }
};