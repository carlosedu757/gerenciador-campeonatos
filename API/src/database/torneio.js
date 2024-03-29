const {connect} = require('../../db');

exports.indexTorneiosByCHE = async function(id){
    const conn = await connect();
    const [rows] = await conn.query('SELECT * FROM torneio WHERE id_cliente=?', id);
    return rows;
}

exports.indexTorneiosByNome = async function(nome){
    const conn = await connect();
    const [rows] = await conn.query('SELECT * FROM torneio WHERE nome=?', nome); 
    return rows;
}

exports.storeTorneio = async function(torneio){
    const conn = await connect();
    const values = [torneio.nome, torneio.descricao, torneio.qtd_times, torneio.premiacao, torneio.id_cliente];
    const comandoSql = 'INSERT INTO torneio(nome, descricao, qtd_times, premiacao, id_cliente) VALUES(?, ?, ?, ?, ?);';
    const dados = await conn.query(comandoSql, values);
    return dados;
}

exports.deleteTorneio = async function(idCliente, nome){
    const conn = await connect();
    const comandoSql = 'DELETE FROM torneio WHERE id_cliente=? AND nome=?';
    nome = String(nome).replace(/-/g, ' ');
    const values = [idCliente, nome];
    const [rows] = await conn.query(comandoSql, values);
    return rows;
}