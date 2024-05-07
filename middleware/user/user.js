import { body } from "express-validator";

export const registerValidator = [
    body('email', 'invalid does not empty').not().notEmpty(),
    body('email', 'invalid email').isEmail().matches(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/),
    body('mobile', 'The min password length is 3 characters').isLength({min : 3})
]
export const createValidator = [
    body('user.username', 'username does not Empty').not().isEmpty(),
    body('user.email', 'Invalid email').isEmail(),
    body('user.age', 'username must be Alphanumeric').isAlphanumeric(),
    body('user.birthday', 'Invalid birthday').isISO8601(), // check date is ISOString
    body('user.password', 'password does not Empty').not().isEmpty(),
    body('user.password', 'The minimum password length is 6 characters').isLength({min: 6}),
  ]