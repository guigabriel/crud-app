import { useForm } from 'react-hook-form';
import '../styles/formulario.css'
import axios from 'axios';
import React from 'react'
import { useHistory } from 'react-router-dom';
import HeaderForm from '../components/Header Form/HeaderForm';



export default function Formulario() {

    let history =useHistory()

    const { register, handleSubmit, setValue, setFocus} = useForm()


    const checkCep = (e) => {
        const cep = e.target.value.replace(/\D/g, '')
        console.log(cep)

        fetch(`https://viacep.com.br/ws/${cep}/json/`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setValue("rua", data.logradouro)
                setValue("bairro", data.bairro)
                setValue("complemento", data.complemento)
                setValue("cidade", data.localidade)
                setValue("estado", data.uf)
                setFocus("numero")
            })
    }

    const onSubmit = data => axios.post('http://localhost:3001/contacts', data)
        .then(() => {
            console.log("Deu bom")
            history.push("/feed")

        })
        .catch(() => {
            console.log("Deu ruim")
        })



    return (
        <div  >

            <HeaderForm
                Texto="Preencha o Formulário"
                />


            <main className='main'>
                <div className='cardPost'>

                    <h2 className='titulo'>Formulário</h2>
                    <div className='line'></div>
                    <div className='CardBodyPost'>
                        <form className='Formulario' method="post" onSubmit={handleSubmit(onSubmit)}>

                            <div className='fields'>
                                <label className='label'>
                                    Nome Completo
                                </label>
                                <input type="text"
                                    {...register("name")}
                                    className='Form' />
                                    
                            </div>

                            <div className='fields' >
                                <label className='label' >
                                    CPF
                                </label>
                                <input type="number"
                                    {...register("cpf")}
                                    className='Form' />

                            </div>

                            <div className='fields' >
                                <label className='label'  >
                                    RG
                                </label>
                                <input type="number"
                                    {...register("rg")}
                                    className='Form' />

                            </div>

                            <div className='fields' >
                                <label className='label'  >
                                    CEP
                                </label>
                                <input type="number"
                                    {...register("cep")}
                                    className='Form'
                                    onBlur={checkCep} />

                            </div>

                            <div className='fields' >
                                <label className='label'  >
                                    Rua
                                </label>
                                <input type="text"
                                    {...register("rua")}
                                    className='Form' />

                            </div>

                            <div className='fields' >
                                <label className='label'  >
                                    Bairro
                                </label>
                                <input type="text"
                                    {...register("bairro")}
                                    className='Form' />
                            </div>

                            <div className='fields' >
                                <label className='label'  >
                                    Número
                                </label>
                                <input type="number"
                                    {...register("numero")}
                                    className='Form' />

                            </div>

                            <div className='fields' >
                                <label className='label'  >
                                    Complemento
                                </label>
                                <input type="text"
                                    {...register("complemento")}
                                    className='Form' />

                            </div>

                            <div className='fields' >
                                <label className='label' >
                                    Cidade
                                </label>
                                <input type="text"
                                    {...register("cidade")}
                                    className='Form}' />

                            </div>

                            <div className='fields' >
                                <label className='label' >
                                    Estado
                                </label>
                                <input type="text"
                                    {...register("estado")}
                                    className='Form' />
                            </div>
                            <div className='btnPost' >



                                <button
                                    type='submit' >
                                    Enviar
                                </button>




                            </div>
                        </form>
                    </div>
                </div>
            </main>
        </div>
    )
} 