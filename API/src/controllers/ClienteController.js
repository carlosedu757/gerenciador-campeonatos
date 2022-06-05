import Cliente from '../models/Cliente';

class ClienteController {
  async store(req, res) {
    try {
      const novoCliente = await Cliente.create(req.body);
      const { id, nome, email } = novoCliente;
      return res.json({ id, nome, email });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message)
      });
    }
  }

  // Index
  async index(req, res) {
    try {
      const clientes = await Cliente.findAll({ attributes: ['id', 'nome', 'email'] });
      return res.json(clientes);
    } catch (e) {
      return res.json(null);
    }
  }

  // Show
  async show(req, res) {
    try {
      const cliente = await Cliente.findByPk(req.params.id);

      const { id, nome, email } = cliente;
      return res.json({ id, nome, email });
    } catch (e) {
      return res.json(null);
    }
  }

  // Update
  async update(req, res) {
    try {
      const novosDados = await Cliente.update(req.body, req.params.id);
      const  [id, nome, email]  = novosDados;
      return res.json({ id, nome, email });
    } catch (e) {
      return res.status(400).json(
        console.log(e)
      );
    }
  }

  // Delete
  async delete(req, res) {
    try {
      await Cliente.delete(req.params.id);
      return res.json({
        "sucess":"true"
      });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

export default new ClienteController();