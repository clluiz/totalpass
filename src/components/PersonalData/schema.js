import * as Yup from 'yup';
import * as Messages from '../../messages';
import isTaxNumberValid from '../../utils';
import { parse, isValid } from 'date-fns';

Yup.addMethod(Yup.string, "taxNumber", function(message) {
  return this.test("validate-tax-number", message, function(value) {
    const { path, createError } = this;
    if (!value) return true;
    return isTaxNumberValid(value) ? true : createError({ path, message });
  });
});

Yup.addMethod(Yup.string, "validDate", function(message) {
  return this.test('validate-date', message, function(value) {
    const { path, createError } = this;
    if(!value) return true;
    const formatedDate = value.replace(/\//g,'-');
    return isValid(parse(formatedDate, 'dd-MM-yyyy', -1)) ? true : createError({ path, message });
  });
});

export default Yup.object().shape({
  name: Yup.string().required(Messages.REQUIRED_FIELD),
  taxNumber: Yup.string()
    .required(Messages.REQUIRED_FIELD)
    .taxNumber(Messages.INVALID_TAX_NUMBER),
  phone: Yup.string().required(Messages.REQUIRED_FIELD),
  birthday: Yup.string()
    .validDate(Messages.INVALID_DATE),
  gender: Yup.string().required(Messages.REQUIRED_FIELD)
});