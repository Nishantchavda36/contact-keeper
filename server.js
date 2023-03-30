const express = require('express')
const connectDB = require('./config/db')
const app = express()
const PORT = process.env.PORT || 5001

//Connect database
connectDB()

//Initialize Middleware

app.use(express.json())

app.get('/', (req, res) => {
  res.json({ msg: 'Welcome to the ContactKeeper app' })
})

//Define Routes
app.use('/api/users', require('./routes/users'))
app.use('/api/contacts', require('./routes/contacts'))
app.use('/api/auth', require('./routes/auth'))

app.listen(PORT, () => console.log(`Server has started at port ${PORT}`))
