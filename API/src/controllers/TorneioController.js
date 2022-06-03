import Torneio from '../models/Torneio';


class TorneioController{
    async store(req, res) {
        try {
          const novoTorneio = await Torneio.create({
            cliente_id:req.params.id,
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
}

export default new TorneioController();