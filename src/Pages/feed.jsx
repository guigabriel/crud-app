import { Link } from "react-router-dom";
import Header from "../components/Header/Header";
import '../styles/feed.css';
import axios from "axios";
import  { useEffect, useState} from 'react'


export default function Feed() {

    const [post, setPost] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3001/contacts')
            .then((response) => {
                setPost(response.data)
            })
            .catch(() => {
                console.log('Baaandeirantes canal de esportes')
            })
    }, [])

    function deletePost(id) {

        axios.delete(`http://localhost:3001/contacts/${id}`)

        setPost(post.filter(post => post.id !== id))
    }

    return (
        <div>
            <Header Texto="Lista de Dados"
                Destino='/formulario'
                Botao="Adicionar um novo Formulário " />

            <main>
                <div className='cards'>

                    {post.map((post, key) => {

                        return (

                            <div className='card' key={key} >
                                <header>
                                    <h2>{post.name}</h2>
                                </header>
                                <div className='line'>

                                </div>
                                <p className='p'> CPF: {post.cpf} </p>
                                <p className='p'> RG: {post.rg} </p>
                                <p className='p'> CEP: {post.cep} </p>
                                <p className='p'> Rua: {post.rua} </p>
                                <p className='p'> Bairro: {post.bairro} </p>
                                <p className='p'> Número: Residencial {post.numero} </p>
                                <p className='p'> Cidade: {post.cidade} </p>
                                <p className='p'> UF: {post.estado} </p>

                                <div className='btns'>

                                    <div className='editar' >
                                        <Link to={{pathname:`/edit/${post.id}`}}  >
                                            <button>Editar</button>
                                        </Link>

                                    </div>
                                    <div className='apagar' >
                                        <button onClick={() => deletePost(post.id)} >apaga</button>
                                    </div>

                                </div>
                            </div>
                        )
                    })}

                </div>
            </main>
        </div>
    )
}