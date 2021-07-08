const user = require('../Models/userModels');

module.exports = {
  async index(req, res, next) {
    const { email, password } = req.body;

    if(!email || !password) return res.status(400).json({ error: 'Credenciais Incorretas' });

    const checkUser = await user.checkUserAlready(email);
    

    if(!checkUser) return res.status(400).json({error: 'Credenciais Incorretas'});

    const userAlready = await user.login({email, password});

    if((!userAlready.id || null) && (!userAlready.name || null)) return res.status(400).json({ error: 'Credenciais Incorretas' });

    return res.status(201).json({
      id: userAlready.id,
      msg: `Bem-Vindo(a) ${userAlready.name}`
    });
  },

  async show(req, res, next) {
    const {id} = req.params;
    
    const userAlready = await user.profile(id);

    if(!userAlready) return res.status(404).json({error: ''});

    return res.status(200).json(userAlready);
  }
}