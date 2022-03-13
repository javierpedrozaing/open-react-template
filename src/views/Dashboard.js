import React from "react";
import CompaniesList from "../components/Dashboard/companies-list";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import FilterBar from "../components/Dashboard/filter-bar";

class Dashboard extends React.Component {
  
  // constructor(props){
  //   super(props);
  //   this.handleClick = this.handleClick.bind(this);
  // }

  state = {
    companies: [
      {
        "id": 156432132,
        "name": "Empresa A",
        "sector": "Textiles",
        "impuestos": [
          {
            "id": 1,
            "type": "1 cuota",
            "name": "retefuente Empresa A",
            "Categoría": "Retefuente",
            "ultimo_digito_nit": "5", 
            "periodos_pago": [
              {
                "mes": "Enero",
                "fehca_limite": "14 De febrero"
              },
              {
                "mes": "Febrero",
                "fehca_limite": "14 De Marzo"
              }
            ]
            }
          ]
      },
    
      {
          "id": 2,
          "type": "2 cuota",
          "name": "retefuente Empresa A",
          "Categoría": "Renta jurídica",
          "ultimo_digito_nit": [1,5], 
          "cuota1": [
            {
              "mes": "Enero",
              "fehca_limite": "14 De febrero"
            },
            {
              "mes": "Febrero",
              "fehca_limite": "14 De Marzo"
            }
          ],
          "cuota2": [
            {
              "mes": "Enero",
              "fehca_limite": "14 De febrero"
            },
            {
              "mes": "Febrero",
              "fehca_limite": "14 De Marzo"
            }
          ]
        },
         
        {
          "id": 3,
          "type": "transferencias",
          "name": "transferencias Empresa A",
          "Categoría": "Declaración informativa de Precios de Transferenca",
          "ultimo_digito_nit": "5", 
          "periodos_pago": [
            {
              "mes": "Enero",
              "fehca_limite": "14 De febrero"
            },
            {
              "mes": "Febrero",
              "fehca_limite": "14 De Marzo"
            }
          ]
        }
    ]
    
  }

  // async componentDidMount() {
  //   await this.fetchCompanies();
  // }

  fetchCompanies = async () => {
    let res = await fetch("http://localhost:3000/api");
    
    let companies = res.json()    
    console.log(companies);
    this.setState({companies})
  }

  handleClick = (e) => {
    console.log(this);
  }
  
  render() {
    return (
      <section>
        <div className="container-sm">
          <div className="container-inner">
            <div className="top-section">
              <h3>Mis Empresas</h3>
               <Link to="companies/new">Crear Nueva empresa</Link>
            </div>
            <div className="filter-section">
              <FilterBar></FilterBar>
            </div>
            <hr />
            <div className="list-section">         
              <CompaniesList companies={this.state.companies}></CompaniesList>       
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Dashboard;
