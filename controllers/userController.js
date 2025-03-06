exports.getUsers = (req, res) => {
    res.json({ message: 'Get all users' });
};

exports.createUser = (req, res) => {
    res.json({ message: 'User created' });
};

exports.updateUser = (req, res) => {
    res.json({ message: `User ${req.params.id} updated` });
};

exports.deleteUser = (req, res) => {
    res.json({ message: `User ${req.params.id} deleted` });
};
