import { FaUser, FaLock } from  'react-icons/fa'
import { useState } from 'react'

import './Login.css'

const Login = () => {

    const [userName, setUserName] = useState('')
    const [password, setPassowrd] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
    }


  return (
    <div className="container">
        <form onSubmit={handleSubmit}>
            <h1>Acesse o sistema</h1>
            <div className='input-field'>
                <input type="email" placeholder='E-mail' onChange={(e) => setUserName(e.target.value)} />   
                <FaUser className='icon' />
            </div>
            <div className='input-field'>
                <input type="password" placeholder='Senha' onChange={(e) => setPassowrd(e.target.value)} />
                <FaLock className='icon' />
            </div>
            <div className="recall-forget">
                <label>
                    <input type="checkbox" />
                    Lembre de mim?
                </label>
                <a href="#">Esqueceu a senha?</a>
            </div>
            <button>Entrar</button>

            <div className="signup-link">
                <p>Não tem uma conta?</p>
                <a href="#">Registrar</a>
            </div>

        </form>
    </div>
  )
}

export default Login
