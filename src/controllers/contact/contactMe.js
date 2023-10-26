
import { CONTACT } from '../../models';
// import { USER } from '../../models';
import { transporter } from '../../utils/mailTransport.js';

export const Contact = async (req, res) => {
  try {

    const DM = await CONTACT.create(req.body);
    if (!DM) {
      res.status(404).json({ message: 'Failed to SEND message' });
    }
    console.log('Recipient Email:', DM.email);
    // Send a welcome email to the user
    const mailOptions = {
      from: 'gdushimimana6@gmail.com',
      to: DM.email,
      subject: 'Welcome to HOLIDAY PLANNER App',
      text: 'Thank you for CONTACT US!',
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Email sending failed:', error);
      } else {
        console.log('Email sent:', info.response);
      }
    });


    res.status(201).json({
      message: 'MESSAGE sent successfully',
      CONTACT: {
        email: DM.email,
        message: DM.message,
      },
    });
  } catch (error) {
    console.log(error);
  }
};
