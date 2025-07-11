import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()

export function gerarToken(user){
    return jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, {expiresIn: '1h'})
}

export function autenticarToken(req, res, next) {
    const authHeader = req.headers['authorization']
    const token = authHeader?.split(' ')[1]

    if(!token) return res.status(401).json({erro: 'Token ausente'})

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if(err) return res.status(403).json({ erro: 'Token inválido'})
        req.user = user
        next()
    })
}