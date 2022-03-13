import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { SectionProps } from "../../utils/SectionProps";
import Input from "../elements/Input";
import Button from "../elements/Button";

const FilterBar = () => {
  return (
    <section>
      <div className="container-sm">
        <div className="container-inner">
          <form>
            <div className="form-row">
              <div className="col">
                <label htmlFor="">Empresa</label>
                <input type="text" name="" id="" />
                <label htmlFor="">Fecha impuesto</label>
                <input type="date" />
                <input
                  className="btn btn-light"
                  type="submit"
                  value="Buscar"
                ></input>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default FilterBar;
