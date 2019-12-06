import React, { Component } from "react";
import "../styles/Opinion.css";

const Opinion = class Opinion extends Component {
  maxDate = new Date().toISOString().slice(0, 10);
  state = {
    date: this.maxDate,
    text: ""
  };
  handleSubmit = e => {
    e.preventDefault();
    if (this.state.date && this.state.text) {
      this.setState({
        date: this.maxDate,
        text: ""
      });
    }
  };
  handleChangeDate = e =>
    this.setState({
      date: e.target.value
    });
  handleChangeTextarea = e =>
    this.setState({
      text: e.target.value
    });

  render() {
    return (
      <div className="opinion">
        <h3>Byłeś już u nas?</h3>
        <p>Czekamy na Twoją opinię</p>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="date">Podaj datę swojej wizyty</label>
          <input
            type="date"
            id="date"
            className="date"
            value={this.state.date}
            onChange={this.handleChangeDate}
            max={this.maxDate}
          />
          <textarea
            className="text"
            placeholder="Wpisz swoją opinię"
            value={this.state.text}
            onChange={this.handleChangeTextarea}
          ></textarea>
          <button>Wyślij</button>
        </form>
      </div>
    );
  }
};

export default Opinion;
