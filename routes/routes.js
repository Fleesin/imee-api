const router = require('express').Router();
const bcrypt = require('bcrypt');
const User = require('../database/models/student');

router.post('/register', async (req, res) => {
  // Verificar si el correo ya existe.
  const emailExist = await User.findOne({ email: req.body.email });
  if (emailExist) return res.status(400).send({ error: 'El email existe' });

  // Hash password
  const salt = await bcrypt.genSalt();
  const hashedPassword = await bcrypt.hash(req.body.password, salt);

  // Crear un nuevo usuario
  const user = new User({

    fName: req.body.fName,
    lName: req.body.lName,
    tId: req.body.tId,
    email: req.body.email,
    password: hashedPassword,
    /*id: req.body.id,
    nationality: req.body.nationality,
    address: req.body.address,
    barrio: req.body.barrio,
    locality: req.body.locality,
    phone: req.body.phone,
    EPS: req.body.eps,
    t_blood: req.body.t_blood,
    rh: req.body.rh,
    Gender: req.body.Gender,
    
    fNameP: req.body.fNameP,
    lNameP: req.body.lNameP,
    idP: req.body.idP,
    emailP: req.body.emailP,

    fNameM: req.body.fNameM,
    lNameM: req.body.lNameM,
    idM: req.body.idM,
    emailM: req.body.emailM*/

  });

  // Guardar usuariio en la base de datos.
  const savedUser = await user.save();

  // Se manda al cliente que se hizo la operacion exitosamente (Status: 200);
  return res.status(200).send({ message: 'User created', id: savedUser._id });
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user)
    return res.status(400).send({ error: 'Email or password is wrong' });

  // Check if password is valid.
  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword)
    return res.status(400).send({ error: 'Email or password is wrong' });

  return res.status(200).json(user);
});

router.get('/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params._id);
    return res.status(200).json(user);
  } catch (error) {
    return res.status(400).json({ error });
  }
});
module.exports = router;
