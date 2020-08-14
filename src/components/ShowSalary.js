import React, { Component } from 'react';
import { calculateSalaryFrom } from '../salary';

export default class ShowSalary extends Component {
  constructor() {
    super();
    this.state = {
      currentInputSalary: 0,
      currentBaseINSS: 0,
      currentDiscountINSS: 0,
      currentBaseIRPF: 0,
      currentDiscountIRPF: 0,
      currentNetSalary: 0,
    };
  }
  inputFullSalaryChange = (event) => {
    const {
      baseINSS,
      discountINSS,
      baseIRPF,
      discountIRPF,
      netSalary,
    } = calculateSalaryFrom;
    let fullSalary = event.target.value;
    calculateSalaryFrom(fullSalary);
    console.log(baseINSS);
    this.setState({
      currentBaseINSS: baseINSS,
      currentDiscountINSS: discountINSS,
      currentBaseIRPF: baseIRPF,
      currentDiscountIRPF: discountIRPF,
      currentNetSalary: netSalary,
    });
  };
  render() {
    // const {
    //   currentBaseINSS,
    //   currentDiscountINSS,
    //   currentBaseIRPF,
    //   currentDiscountIRPF,
    //   currentNetSalary,
    // } = this.state;
    return (
      <div>
        <h1>Salário React</h1>
        <label htmlFor="">Salário bruto</label>
        <input
          type="number"
          name=""
          id=""
          min="0"
          onChange={this.inputFullSalaryChange}
        />
        <label htmlFor="">Base INSS:</label>
        <input
          type="number"
          name=""
          id=""
          readOnly
          value={this.state.currentBaseINSS}
        />
        <label htmlFor="">Desconto INSS:</label>
        <input
          type="number"
          name=""
          id=""
          readOnly
          value={this.state.currentDiscountINSS}
        />
        <label htmlFor="">Base IRPF:</label>
        <input
          type="number"
          name=""
          id=""
          readOnly
          value={this.state.currentBaseIRPF}
        />
        <label htmlFor="">Desconto IRPF:</label>
        <input
          type="number"
          name=""
          id=""
          readOnly
          value={this.state.currentDiscountIRPF}
        />
        <label htmlFor="">Salário líquido:</label>
        <input
          type="number"
          name=""
          id=""
          readOnly
          value={this.state.currentNetSalary}
        />
      </div>
    );
  }
}
