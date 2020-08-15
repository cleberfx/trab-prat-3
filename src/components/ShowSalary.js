import React, { Component } from 'react';
import { calculateSalaryFrom } from '../salary';

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
        <label htmlFor="">Salário bruto</label>
        <input
          type="number"
          min="0"
          defaultValue="0"
          onChange={this.inputFullSalaryChange}
        />
        <label htmlFor="">Base INSS:</label>
        <input type="number" name="" id="" readOnly value={baseINSS} />
        <label htmlFor="">Desconto INSS:</label>
        <input type="number" name="" id="" readOnly value={discountINSS} />
        <label htmlFor="">Base IRPF:</label>
        <input type="number" name="" id="" readOnly value={baseIRPF} />
        <label htmlFor="">Desconto IRPF:</label>
        <input type="number" name="" id="" readOnly value={discountIRPF} />
        <label htmlFor="">Salário líquido:</label>
        <input type="number" name="" id="" readOnly value={netSalary} />
      </div>
    );
  }
}
