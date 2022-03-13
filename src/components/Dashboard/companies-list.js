import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

class CompaniesList extends React.Component {
  state = {};

  render() {
    const { companies } = this.props;

    return (   
      <table>
        <thead>
          <tr>
            <td>Empresas</td>
            <td>Impuestos por pagar</td>
            <td>Total de impuestos</td>
            <td></td>
            <td></td>
          </tr>
        </thead> 
        <tbody>
            { companies.map((company) => {
              return (
                <>
                  <tr>
                    <td>{company.name}</td>
                    <td>{company.impuestos_por_pagar}</td>
                    <td>{company.total_impuestos}</td>
                    <td>
                      <Link to="impuestos">Ver impuestos</Link>
                    </td>
                    <td>
                      <Link to="editar">Editar</Link>                    
                    </td>
                  </tr>
                </>
              );
            })}        
        </tbody>
      </table>
    );
  }
}

export default CompaniesList;
