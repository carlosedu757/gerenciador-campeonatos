import clienteQuerys from '../database/cliente';
import validator from 'email-validator';
import bcryptjs from'bcryptjs';

export default class Cliente{
    static async create(cliente){
        const errors = [];
        let isError = false;
        if(!cliente.nome || cliente.nome.length > 100){
            errors.push({message: 'Nome inválido'});
            isError = true;
        }

        if(!cliente.email || !validator.validate(cliente.email)){
            errors.push({message:'Email inválido'});
            isError = true;
        }

        if(!cliente.password || (cliente.password.length < 6 || cliente.password.length > 50)){
            errors.push({message:'Senha fora do tamanho requerido'});
            isError = true;
        }

        if(isError){
            throw{
                errors
            }
        }
        const dados = await clienteQuerys.storeCliente(cliente);
        return dados;
    }

    static async update(cliente, id){
        const errors = [];
        let isError = false;

        if(!id){
            errors.push({message:'Seção encerrada'});
            isError = true;
        }

        if(isError){
            throw{
                errors
            }
        }

        const dados = await clienteQuerys.updateCliente(cliente, id);
        return dados;
    }

    static async delete(id){
        const errors = [];
        let isError = false;

        if(!id){
            errors.push({message:'Seção encerrada'});
            isError = true;
        }

        if(isError){
            throw{
                errors
            }
        }

        const dados = await clienteQuerys.deleteCliente(id);
        return dados;
    }

    static async buscarByEmail(email){
        return clienteQuerys.showClienteByEmail(email);
    }

    static async buscar(id, email){
        return await clienteQuerys.showCliente(id, email);
    }

    static passwordIsValid(password, password_hash) {
        return bcryptjs.compare(password, password_hash);
    }
} 