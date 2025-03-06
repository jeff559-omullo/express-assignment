exports.getProducts = (req, res) => {
    res.json({ message: 'Get all products' });
};

exports.createProduct = (req, res) => {
    res.json({ message: 'Product created' });
};

exports.updateProduct = (req, res) => {
    res.json({ message: `Product ${req.params.id} updated` });
};

exports.deleteProduct = (req, res) => {
    res.json({ message: `Product ${req.params.id} deleted` });
};
