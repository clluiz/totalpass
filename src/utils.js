const UNAUTHORIZED_CPF_NUMBERS = [
  '00000000000',
  '11111111111',
  '22222222222',
  '33333333333',
  '44444444444',
  '55555555555',
  '66666666666',
  '77777777777',
  '88888888888',
  '99999999999',
];

function isCpfValid(value) {
  if (!value) return false;
  let onlyDigits = value.replace(/\D+/g, '');
  if (onlyDigits.length !== 11 || UNAUTHORIZED_CPF_NUMBERS.includes(onlyDigits)) return false;

  let sum = 0;
  let rest;
  let i;

  for (i = 1; i <= 9; i++) sum = sum + parseInt(onlyDigits.substring(i - 1, i)) * (11 - i);
  rest = (sum * 10) % 11;

  if (rest === 10 || rest === 11) rest = 0;
  if (rest !== parseInt(onlyDigits.substring(9, 10))) return false;

  sum = 0;
  for (i = 1; i <= 10; i++) sum = sum + parseInt(onlyDigits.substring(i - 1, i)) * (12 - i);
  rest = (sum * 10) % 11;

  if (rest === 10 || rest === 11) rest = 0;
  if (rest !== parseInt(onlyDigits.substring(10, 11))) return false;
  return true;
}

const isTaxNumberValid = function(v) {
  return isCpfValid(v);
};

export default isTaxNumberValid;

