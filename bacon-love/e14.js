module.exports = (Bacon, fieldA, validationA, fieldB, validationB, fieldC, validationC) => {
  const fieldAValid = fieldA.map(validationA).toProperty(false);
  const fieldBValid = fieldB.map(b => !b || validationB(b)).toProperty(true);
  const fieldCValid = fieldC.map(validationC).toProperty(false);
  return {
    fieldAValid,
    fieldBValid,
    fieldCValid,
    formValid: fieldAValid.and(fieldBValid).and(fieldCValid),
  };
};
