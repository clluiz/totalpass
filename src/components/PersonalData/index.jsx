import React, { Component } from "react";
import UploadPicture from "../UploadPicture";
import ButtonAdvance from "../ButtonAdvance";
import { Field, ErrorMessage, withFormik } from "formik";
import PersonalDataSchema from "./schema";
import InputMask from "react-input-mask";
import BootstrapErrorMessage from "../BootstrapErrorMessage";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { setPersonalData } from "./personalData.actions";

import "../../styles/form.scss";

class PersonalData extends Component {
  render() {
    const { values, handleSubmit, handleChange, errors, touched } = this.props;
    return (
      <div className="form-container">
        <UploadPicture />
        <form className="form" onSubmit={handleSubmit} noValidate>
          <Field
            type="text"
            name="name"
            required
            placeholder="Nome completo"
            values={values.name}
            onChange={handleChange}
            className={
              errors.name && touched.name ? "input is-invalid" : "input"
            }
          />
          <ErrorMessage name="name" component={BootstrapErrorMessage} />

          <Field
            name="taxNumber"
            render={({ field }) => (
              <InputMask
                {...field}
                mask="999.999.999-99"
                required
                placeholder="CPF"
                values={values.taxNumber}
                onChange={handleChange}
                className={
                  errors.taxNumber && touched.taxNumber
                    ? "input is-invalid"
                    : "input"
                }
              />
            )}
          />
          <ErrorMessage name="taxNumber" component={BootstrapErrorMessage} />

          <Field
            name="phone"
            render={({ field }) => (
              <InputMask
                {...field}
                mask="(99)99999-9999"
                type="text"
                name="phone"
                required
                placeholder="Celular"
                values={values.phone}
                onChange={handleChange}
                className={
                  errors.phone && touched.phone ? "input is-invalid" : "input"
                }
              />
            )}
          />
          <ErrorMessage name="phone" component={BootstrapErrorMessage} />
          <Field
            name="birthday"
            render={({ field }) => (
              <InputMask
                {...field}
                mask="99/99/9999"
                name="birthday"
                placeholder="Data de nascimento (DD/MM/YYYY)"
                values={values.phone}
                onChange={handleChange}
                className="input"
              />
            )}
          />
          <ErrorMessage name="birthday" component={BootstrapErrorMessage} />
          <Field
            component="select"
            className="select form-control"
            name="gender"
            values={values.gender}
            onChange={handleChange}
          >
            <option value="">Gênero</option>
            <option value="Feminino">Feminino</option>
            <option value="Masculino">Masculino</option>
          </Field>
          <ButtonAdvance />
        </form>
      </div>
    );
  }
}

const EnhancedForm = withFormik({
  isInitialValid: false,
  mapPropsToValues: props => props.personalData,
  handleSubmit: (values, { props }) => {
    props.setPersonalData(values);
    props.next();
  },
  validationSchema: PersonalDataSchema
})(PersonalData);

const mapStateToProps = state => ({ personalData: state.personalData });
const mapDispatchToProps = dispatch => bindActionCreators({ setPersonalData }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EnhancedForm);
