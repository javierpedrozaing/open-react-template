import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { SectionProps } from "../../utils/SectionProps";
import Input from "../elements/Input";
import Select from "../elements/Select";
import Radio from "../elements/Radio";
import Checkbox from "../elements/Checkbox";
import Button from "../elements/Button";

const Login = () => {
  return (
    <section>
      <div className="container-sm">
        <div className="contentForm">
          <form>
            <h2>Iniciar Sesión</h2>
            <fieldset>          
              <div className="mb-16">
                <Input
                  type="email"
                  placeholder="Email"
                  value=""
                  label="Email"
                  status=""
                  // hint="Ooops, email is invalid."
                  required
                />
              </div>
              <div className="mb-16">
                    <Input
                      type="password"
                      placeholder="Contraseña"
                      label="Contraseña"
                      // hint="You might display a hint below the form."
                    />
                  </div>           
              <div className="mt-24">
                <div className="button-group">
                <Button color="primary"> <a href="/dashboard" className="button-link text-xs">Login</a></Button>

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

export default Login;
