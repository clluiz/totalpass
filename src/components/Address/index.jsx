import React, { Component } from "react";
import ButtonAdvance from "../ButtonAdvance";
import { Field, ErrorMessage, withFormik } from "formik";
import AddressSchema from "./schema";
import InputMask from "react-input-mask";
import BootstrapErrorMessage from "../BootstrapErrorMessage";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { queryZipcode, setAddress } from "./address.actions";

import "../../styles/form.scss";

class Address extends Component {
  render() {
    const {
      values,
      handleSubmit,
      handleChange,
      errors,
      touched
    } = this.props;
    return (
      <div className="form-container">
        <form className="form" onSubmit={handleSubmit} noValidate>
          <Field
            name="zipCode"
            render={({ field }) => (
              <InputMask
              {...field}
              mask="99999-999"
              required
              placeholder="CEP"
              values={values.zipCode}
              onChange={handleChange}
              onBlur={() => this.props.queryZipcode(values.zipCode)}
              className={
                  errors.zipCode && touched.zipCode
                    ? "input is-invalid"
                    : "input"
                }
              />
            )}
          />
          <ErrorMessage name="zipCode" component={BootstrapErrorMessage} />

          <Field
            type="text"
            name="address"
            required
            placeholder="Endereço"
            values={values.address}
            onChange={handleChange}
            className={
              errors.address && touched.address ? "input is-invalid" : "input"
            }
          />
          <ErrorMessage name="address" component={BootstrapErrorMessage} />

          <Field
            type="text"
            name="number"
            required
            placeholder="Número"
            values={values.number}
            onChange={handleChange}
            className={
              errors.number && touched.number ? "input is-invalid" : "input"
            }
          />
          <ErrorMessage name="number" component={BootstrapErrorMessage} />

          <Field
            type="text"
            name="complement"
            placeholder="Complemento"
            values={values.number}
            onChange={handleChange}
            className={
              errors.complement && touched.complement
                ? "input is-invalid"
                : "input"
            }
          />
          <ErrorMessage name="complement" component={BootstrapErrorMessage} />

          <Field
            type="text"
            name="neighborhood"
            placeholder="Bairro"
            values={values.number}
            onChange={handleChange}
            className={
              errors.complement && touched.complement
                ? "input is-invalid"
                : "input"
            }
          />
          <ErrorMessage name="neighborhood" component={BootstrapErrorMessage} />

          <Field
            type="text"
            name="city"
            placeholder="Cidade"
            values={values.city}
            required
            onChange={handleChange}
            className={
              errors.city && touched.city ? "input is-invalid" : "input"
            }
          />
          <ErrorMessage name="city" component={BootstrapErrorMessage} />

          <Field
            component="select"
            className="select form-control"
            name="state"
            required
            values={values.state}
            onChange={handleChange}
          >
            <option value="">Selecione um estado</option>
            <option value="AC">Acre</option>
            <option value="AL">Alagoas</option>
            <option value="AP">Amapá</option>
            <option value="AM">Amazonas</option>
            <option value="BA">Bahia</option>
            <option value="CE">Ceará</option>
            <option value="DF">Distrito Federal</option>
            <option value="ES">Espírito Santo</option>
            <option value="GO">Goiás</option>
            <option value="MA">Maranhão</option>
            <option value="MT">Mato Grosso</option>
            <option value="MS">Mato Grosso do Sul</option>
            <option value="MG">Minas Gerais</option>
            <option value="PA">Pará</option>
            <option value="PB">Paraíba</option>
            <option value="PR">Paraná</option>
            <option value="PE">Pernambuco</option>
            <option value="PI">Piauí</option>
            <option value="RJ">Rio de Janeiro</option>
            <option value="RN">Rio Grande do Norte</option>
            <option value="RS">Rio Grande do Sul</option>
            <option value="RO">Rondônia</option>
            <option value="RR">Roraima</option>
            <option value="SC">Santa Catarina</option>
            <option value="SP">São Paulo</option>
            <option value="SE">Sergipe</option>
            <option value="TO">Tocantins</option>
          </Field>
          <ErrorMessage name="state" component={BootstrapErrorMessage} />
          <ButtonAdvance />
        </form>
      </div>
    );
  }
}

const EnhancedForm = withFormik({
  isInitialValid: false,
  mapPropsToValues: props => {
    return props.address;
  },
  handleSubmit: (values, { props }) => {
    props.setAddress(values);
    props.next();
  },
  validationSchema: AddressSchema,
  enableReinitialize : true
})(Address);

const mapStateToProps = state => ({ address: state.address });
const mapDispatchToProps = dispatch =>
  bindActionCreators({ queryZipcode, setAddress }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EnhancedForm);
