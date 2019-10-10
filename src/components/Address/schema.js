import * as Yup from 'yup';
import * as Messages from '../../messages';

export default Yup.object().shape({
  zipCode: Yup.string().required(Messages.REQUIRED_FIELD),
  address: Yup.string().required(Messages.REQUIRED_FIELD),
  number: Yup.string().required(Messages.REQUIRED_FIELD),
  city: Yup.string().required(Messages.REQUIRED_FIELD),
  state: Yup.string().required(Messages.REQUIRED_FIELD),
});
