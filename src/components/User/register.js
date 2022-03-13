import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import Input from '../elements/Input';
import Hero from '../sections/Hero';
import Select from "../elements/Select";
import Radio from "../elements/Radio";
import Checkbox from "../elements/Checkbox";
import Button from "../elements/Button";

function handeChange(e) {
    e.preventDefault();    
    
}

const Register = () => {
    return (
        <section>
          <div className="container-sm">
            <div className="contentForm">
              <form>
                <h2>Registrarme</h2>
                <fieldset>
                  <div className="mb-16">
                    <Input
                      type="text"
                      placeholder="Nombres"
                      label="Nombre completo"
                      name =""
                      onChange = {handeChange}
                      // hint="You might display a hint below the form."
                    />
                  </div>                 
                  <div className="mb-16">
                    <Input
                      type="email"
                      placeholder="Email"
                      value=""
                      label="Email"
                      status=""
                      name =""
                      onChange = {handeChange}
                      // hint="Ooops, email is invalid."
                      required
                    />
                  </div>
                  <div className="mb-16">
                    <Input
                      type="password"
                      placeholder="Contraseña"
                      label="Contraseña"
                      name =""
                      onChange = {handeChange}
                      // hint="You might display a hint below the form."
                    />
                  </div>
                  <div className="mb-16">
                    <Select label="Tipo de subscripción" name ="" onChange = {handeChange}>
                      <option hidden>Selecciona tu subscripción</option>
                      <option>Gratuito</option>
                      <option>Premium</option>
                    </Select>
                  </div>
                 
                  <div className="mb-16">
                    <Checkbox name ="" onChange = {handeChange}>
                      Acepto <a href="#">términos y condiciones</a>
                    </Checkbox>
                  </div>
                  {/* <div className="mb-16">
                    <span>
                      <Radio name="form-radio">Yes</Radio>
                    </span>
                    <span className="ml-16">
                      <Radio name="form-radio">No</Radio>
                    </span>
                  </div> */}
                  <div className="mt-24">
                    <div className="button-group">
                      <Button color="primary"> <a href="/profile" className="button-link text-xs">Registrarme</a></Button>
                      <a href="/" className="button-link text-xs">Cancel</a>
                    </div>
                  </div>
                </fieldset>
              </form>
            </div>
          </div>
        </section>
      );
}

export default Register;