import React, { Component } from "react";
import { connect } from "react-redux";
import {ADD_ITEM_NOTE} from "../../constatns/todo_type";
import "./style.css";



class AddNotes extends Component {
  state = {
    subject: "",
    note: "",
    date: "",
    id: ""
  };
  handleSubmit(event) {
    event.preventDefault();
  }
  changeSubject = (e) => {
    this.setState({ subject: e.target.value });
  };
  changeNote = (e) => {
    this.setState({ note: e.target.value });
  };
  getRandomNum = (min, max) => {
    this.setState({ id: Math.random() * (max - min) + min });
  };
 
  addNewNote = () => {
      console.log(this.getRandomNum(0,100));
    this.props.dispatch({
      type: "ADD_ITEM_NOTE",
      id: this.state.id,
      subject: this.state.subject,
      note: this.state.note
    });
    this.setState({
        subject: "",
        note: ""
    });
  };

  render() {
    return (
      <div className="form_note">
        <form onSubmit={this.handleSubmit} className="addForm">
          <input
            type="text"
            value={this.state.subject}
            onChange={this.changeSubject}
            placeholder="Subject"
          ></input>
          <input
            className = "note"
            type="text"
            value={this.state.note}
            onChange={this.changeNote}
            placeholder="Note"
          ></input>
          <button onClick={this.addNewNote}>Add</button>
        </form>
      </div>
    );
  }
}

export default connect() (AddNotes);
