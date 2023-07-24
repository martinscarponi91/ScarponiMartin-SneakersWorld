const renderIndex = (req, res) => {
  res.send("Bienvenido");
};

const renderLogin = (req, res) => {
  res.send("Inicie sesion");
};

const renderRegister = (req, res) => {
  res.send("Registrese");
};

module.exports = { renderIndex, renderLogin, renderRegister };
