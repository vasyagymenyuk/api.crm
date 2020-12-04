exports.create = async (req, res) => {
  res.json({
    name: req.body.name,
    imageSrc: req.body.imageSrc,
  });
};
exports.index = async (req, res) => {
  res.json('passport РАБОТАЕТ');
};
exports.show = async (req, res) => {};
exports.update = async (req, res) => {};
exports.destroy = async (req, res) => {};
