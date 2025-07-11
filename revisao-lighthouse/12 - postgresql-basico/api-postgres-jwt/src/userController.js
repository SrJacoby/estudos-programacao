import bcrypt from 'bcrypt'
import { pool } from './db.js'
import { gerarToken } from './auth.js'

export async function registrar(req, res) {
  const client = await pool.connect()
  try {
    const { name, email, password } = req.body
    const hash = await bcrypt.hash(password, 10)

    await client.query('BEGIN')

    const insert = await client.query(
      'INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *',
      [name, email, hash]
    );

    await client.query('COMMIT');

    const token = gerarToken(insert.rows[0])
    res.json({ user: insert.rows[0], token })
  } catch (err) {
    await client.query('ROLLBACK')
    res.status(500).json({ erro: 'Erro ao registrar usuário' })
  } finally {
    client.release()
  }
}

export async function login(req, res) {
  const { email, password } = req.body
  const result = await pool.query('SELECT * FROM users WHERE email = $1', [email])
  const user = result.rows[0]

  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(401).json({ erro: 'Credenciais inválidas' })
  }

  const token = gerarToken(user)
  res.json({ token })
}

export async function perfil(req, res) {
  const result = await pool.query('SELECT id, name, email FROM users WHERE id = $1', [req.user.id])
  res.json(result.rows[0])
}