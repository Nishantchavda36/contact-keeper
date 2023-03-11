const express = require('express')
const router = express.Router()

//@routes GET api/contacts
//@desc   GET all contacts
//@access Private

router.get('/', (req, res) => {
  res.send('Get all contacts')
})

//@routes POST api/contacts
//@desc   Add new contacts
//@access Private

router.post('/', (req, res) => {
  res.send('Add contact')
})

//@routes PUT api/contacts
//@desc   Update existing contacts
//@access Private

router.put('/:id', (req, res) => {
  res.send('Update existing contact')
})

//@routes PUT api/contacts
//@desc   Update existing contacts
//@access Private

router.delete('/:id', (req, res) => {
  res.send('Delete existing contact')
})

module.exports = router
