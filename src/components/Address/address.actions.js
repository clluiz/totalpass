import * as actions from "./address.actionTypes";
import { getAddressByZipcode } from "../../api/viacep";

const convertToAddressObject = (viaCepObject = {}) => {
  return {
    zipCode      : viaCepObject.cep || '',
    address      : viaCepObject.logradouro || '',
    complement   : viaCepObject.complemento || '',
    neighborhood : viaCepObject.bairro || '',
    city         : viaCepObject.localidade || '',
    state        : viaCepObject.uf || ''
  }
};

export const queryZipcode = zipCode => async dispach => {
  const address = await getAddressByZipcode(zipCode);
  dispach({
    type: actions.SET_ADDRESS,
    payload: convertToAddressObject(address)
  });
};
