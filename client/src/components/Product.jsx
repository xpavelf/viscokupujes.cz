import React from "react";
import EckoList from "./EckoList";

export default class Product extends React.Component {
  render() {
    let prod = this.props.product;
    return (
      <div className="Product">
        <h2 className="Product__name">{prod.name}</h2>
        <small className="Product__producer">{prod.producer}</small>
        <EckoList list={prod.e} />
        { prod.nutr ?
          <table className="Product__nutrition-facts">
            <caption>Nutriční hodnoty{prod.nutr[0] ? <div>{prod.nutr[0]}</div> : ""}</caption>
            <tbody>
              {prod.nutr.slice(1).map(line => <tr>{line.map(t => <td>{t}</td>)}</tr>)}
            </tbody>
          </table>
          : null
        }
        {prod.ref}
      </div>
    );
  }
};
