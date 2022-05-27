const router = require('express').Router();
const { User, validate } = require('../models/user');
const bcrypt = require('bcrypt');


router.post('/', async (req, res) => {
    try {
        const { error } = validate(req.body);
        if (error) {
            return res.status(400).send({ message: error.details[0].message });
        }
        const User = await User.findOne({ email: req.body.email });
        if (User) {
            return res.status(409).send({ message: 'Email already exists' });
        }
        const salt = await bcrypt.genSalt(Number(process.env.SALT));
        const hashPassword = await bcrypt.hash(req.body.password, salt);

        await new User({ ...res.body, password: hashPassword }).save();
        res.status(201).send({ message: 'User created successfully' });
    } catch (error) {
        res.status(500).send({ message: 'Internal Server Error' });
    }
});


module.exports = router;
