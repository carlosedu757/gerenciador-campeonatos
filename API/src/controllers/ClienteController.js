import Cliente from '../models/Cliente';
import Foto from '../models/Foto';

class ClienteController {
  async show(req, res) {
    try {
      const user = await Cliente.buscarById(req.userId || 3);
      const [foto] = await Foto.indexByCHE(req.userId || 3);
      const fotoUrl = `http://localhost:3000/images/${foto.filename}/`;
      const {nome, email } = user;
      return res.json({ nome, email, fotoUrl });
    } catch (e) {
      return res.json(null);
    }
  }


  async store(req, res) {
    try {
      const teste = await Cliente.create(req.body);
      return res.json({"success":"true"});
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message)
      });
    }
  }


  // Update
  async update(req, res) {
    try {
      await Cliente.update(req.body, req.userId);
      return res.json({"sucess":"true"});
    } catch (e) {
      return res.status(400).json(
        {
          errors: e.errors.map((err) => err.message)
        }
      );
    }
  }

  // Delete
  async delete(req, res) {
    try {
      await Cliente.delete(req.userId);
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