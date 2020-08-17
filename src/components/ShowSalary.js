import React, { Component } from 'react';
import { calculateSalaryFrom } from '../salary';
// import  Num from '@formatjs/intl-numberformat';

export default class ShowSalary extends Component {
  constructor() {
    super();

    this.state = {
      currentInputSalary: 0,

      calculations: {
        baseINSS: 0,
        discountINSS: 0,
        baseIRPF: 0,
        discountIRPF: 0,
        netSalary: 0,
      },
    };
  }

  componentDidUpdate(_, previousState) {
    const { currentInputSalary: oldNumber } = previousState;
    const { currentInputSalary: newNumber } = this.state;

    if (oldNumber !== newNumber) {
      const calc = calculateSalaryFrom(this.state.currentInputSalary);
      console.log(calc);
      this.setState({
        calculations: calc,
      });
    }
  }
  inputFullSalaryChange = (event) => {
    const newNumber = Number(event.target.value);
    this.setState({ currentInputSalary: newNumber });
  };
  toCurrency(number) {
    const formatter = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
    return formatter.format(number);
    // console.log(formatter);
  }
  toPercent(number) {
    const formatter = new Intl.NumberFormat('pt-BR', {
      style: 'percent',
      maximumFractionDigits: 2,
    });
    return formatter.format(number);
  }
  render() {
    const { calculations } = this.state;
    const {
      baseINSS,
      discountINSS,
      baseIRPF,
      discountIRPF,
      netSalary,
    } = calculations;

    return (
      <div>
        <h1>Salário React</h1>
        <label htmlFor="">
          Salário bruto
          <input
            type="number"
            min="0"
            defaultValue="0"
            onChange={this.inputFullSalaryChange}
          />
        </label>
        <br />

        <label htmlFor="">
          Base INSS:
          <input
            type="text"
            name=""
            id=""
            readOnly
            value={this.toCurrency(baseINSS)}
          />
        </label>

        <label htmlFor="">Desconto INSS:</label>
        <input
          type="text"
          name=""
          id=""
          readOnly
          value={this.toPercent(discountINSS)}
        />
        <label htmlFor="">Base IRPF:</label>
        <input
          type="text"
          name=""
          id=""
          readOnly
          value={this.toCurrency(baseIRPF)}
        />
        <label htmlFor="">Desconto IRPF:</label>
        <input
          type="text"
          name=""
          id=""
          readOnly
          value={this.toCurrency(discountIRPF)}
        />
        <label htmlFor="">
          Salário líquido:
          <input
            type="text"
            name=""
            id=""
            readOnly
            value={this.toCurrency(netSalary)}
          />
        </label>
      </div>
    );
  }
}
