module.exports = (Bacon, nidelva, leirelva, buttonClicked) => {
  return nidelva.toProperty().combine(leirelva.toProperty(), (a, b) => a + b).sampledBy(buttonClicked.map(true));
};
