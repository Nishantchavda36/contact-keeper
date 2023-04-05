const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const { check, validationResult } = require('express-validator')

const User = require('../modals/User')

//@routes POST api/users
//@desc   Register a user
//@access Public

router.post(
  '/',

  [
    check('name', 'Please add name').not().isEmpty(),
    check('email', 'Please input valid email').isEmail(),
    check(
      'password',
      'Please enter valid password of minium 6 characters'
    ).isLength({ min: 6 }),
  ],
  async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }
    const { name, email, password } = req.body
    try {
      let user = await User.findOne({ email })
      if (user) {
        res.status(400).json('User already existed')
      }
      user = new User({
        name,
        email,
        password,
      })
      let salt = await bcrypt.genSalt(10)
      user.password = await bcrypt.hash(password, salt)
      await user.save()
      res.send('User saved')
    } catch (err) {
      console.log(err.message)
      res.status(500).send('Server Error')
    }
  }
)

module.exports = router
