import React, { Component } from 'react';
import { calculateSalaryFrom } from '../salary';

export default class ShowSalary extends Component {
  render() {
    return (
      <div>
        <h1>Salário React</h1>
        <label htmlFor="">Salário bruto</label>
        <input type="number" name="" id="" min="0" />
        <label htmlFor="">Base INSS:</label>
        <input type="number" name="" id="" readOnly />
        <label htmlFor="">Desconto INSS:</label>
        <input type="number" name="" id="" readOnly />
        <label htmlFor="">Base IRPF:</label>
        <input type="number" name="" id="" readOnly />
        <label htmlFor="">Desconto IRPF:</label>
        <input type="number" name="" id="" readOnly />
        <label htmlFor="">Salário líquido:</label>
        <input type="number" name="" id="" readOnly />
      </div>
    );
  }
}
