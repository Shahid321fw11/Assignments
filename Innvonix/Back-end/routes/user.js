const router = require('express').Router();
const { User, validate } = require('../models/user');
const bcrypt = require('bcrypt');


router.post('/', async (req, res) => {
    try {
        // const { error } = validate(req.body);
        // console.log(error);
        // if (error) {
        //     return res.status(400).send({ message: error.details[0].message });
        // }
        const user = await User.findOne({ email: req.body.email });
        // console.log(user);
        if (user) {
            return res.status(409).send({ message: 'Email already exists' });
        }
        const salt = await bcrypt.genSalt(Number(process.env.SALT));
        const hashPassword = await bcrypt.hash(req.body.password, salt);
        // console.log("sdsdfsdf");
        await new User({ ...req.body, password: hashPassword }).save();
        // console.log("sdsdfsdfdsfdsfsdf");
        res.status(201).send({ message: 'User created successfully' });
    } catch (error) {
        res.status(500).send({ message: 'Internal Server Error' });
    }
});

router.get('/', (req, res) => {
    console.log("sdsdfsdf get request");
    res.send("i am here")
});


module.exports = router;
