import Torneio from '../models/Torneio';


class TorneioController{
    async store(req, res) {
        try {
          const novoTorneio = await Torneio.create({
            id_cliente:req.params.id,
            ...req.body
          });
          console.log(novoTorneio)
          const {nome, descricao } = novoTorneio;
          return res.json({nome, descricao});
        } catch (e) {
          return res.status(400).json(
            console.log(e)
          );
        }
      }
    async indexByCHE(req, res){
      const idCliente = req.params.id;
      const torneios = await Torneio.index(idCliente);
      return res.json({
        torneios
      })
    }
    
    async delete(req, res){
      try{
        const idCliente = req.params.id;
        const nomeTorneio = req.params.nome;
        await Torneio.delete(idCliente, nomeTorneio);
        return res.json({
          "sucess":"true"
        })
      }catch(e){
        return res.status(400).json(
          console.log(e)
        );
      }

    }
}

export default new TorneioController();