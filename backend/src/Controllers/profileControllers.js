const user = require('../Models/userModels');

module.exports = {
  async index(req, res, next) {
    const { email, password } = req.body;

    if(!email || !password) return res.status(400).json({ error: 'Credenciais Incorretas' });

    const {id, name} = await user.login({email, password});

    if(!id && !name) return res.status(400).json({ error: 'Credenciais Incorretas' });

    return res.status(201).json({
      id,
      msg: `Bem-Vindo(a) ${name}`
    });
  },

  async show(req, res, next) {
    const {id} = req.params;
    
    const userAlready = await user.profile(id);

    if(!userAlready) return res.status(404).json({error: ''});

    return res.status(200).json(userAlready);
  }
}