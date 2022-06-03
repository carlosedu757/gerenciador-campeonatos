const {connect} = require('../../db');

exports.indexTimes = async function(id){
    const conn = await connect();
    const [rows] = await conn.query('SELECT * FROM time WHERE id_torneio=?', id); 
    return 
}

exports.storeTime = async function(time){
    const conn = await connect();
    const values = [ time.id_torneio, time.nome, time.abrev];
    const comandoSql = 'INSERT INTO time(id_torneio, nome, abrev) VALUES(?, ?, ?);';
    const [rows] = conn.query(comandoSql, values);
    return rows;
}

exports.deleteTime = async function(idTorneio, nome){
    const conn = await connect();
    const comandoSql = 'DELETE FROM time WHERE id_torneio=? AND nome=?';
    nome = String(nome).replace(/-/g, ' ');
    const values = [idTorneio, nome];
    const [rows] = await conn.query(comandoSql, values);
    return rows;
}