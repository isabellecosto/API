import express from 'express'
import User from './models/User.js'
import Order from './models/Order.js'
import Product from './models/Product.js'
import cors from 'cors'
import syncTableDatabase from './database/sync-table-database.js'


const app = express()
const port = 3000
app.use(cors())
app.use(express.json())

app.get('/', async (req, res) => {
  const user = req.body
  return res.status(200).json(`Usuário criado com sucesso! Usuário: ${user}`)
})

app.get('/product', async (req, res) => {
  const product = req.body
  return res.status(200).json(`Produto criado com sucesso! Produto: ${product}`)
})

app.post('/', async (req, res) => {
  const {username, email, password} = req.body
  const user = await User.create({username, email, password})
  const order = await Order.create({user_id: user.id})
  return res.status(200).json('Dados salvos com sucesso!')
})

app.post('/product', async (req, res) => {
  const {brand, name, stock} = req.body
  const product = await Product.create({brand, name, stock})
  return res.status(200).json('Dados salvos com sucesso!')
})

const initServer = async () => {
  try {
    await syncTableDatabase()
    app.listen(port, () => {
      console.log(`Server is running at http://localhost:${port}`)
    })
    console.log('Database synced')
  } catch (error) {
    console.error('Unable to sync the database:', error)
  }
}

initServer()