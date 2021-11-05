import React, { Component } from "react";
import "./style.css";
import { connect } from "react-redux";
import { DELETE_ITEM_NOTE } from "../../constatns/todo_type";

class BlockNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      copySuccess: "",
    };
  }
  copyToClipboard = (e) => {
    this.textArea.select();
    document.execCommand("copy");
    e.target.focus();
    this.setState({ copySuccess: "Copied!" });
  };
  deleteNote = () => {
    this.props.dispatch({
      type: "DELETE_ITEM_NOTE",
      id: this.state.id,
    });
  };
  componentDidMount = () => {
    const idNote = +window.location.pathname.slice(7);
    this.setState({ id: idNote });
  };
  render() {
    return (
      <div>
        {document.queryCommandSupported("copy") &&
          this.props.notes
            .filter((el) => el.id === this.state.id)
            .map((el) => {
              return (
                <div className="detal_inf">
                  <div className="main_note">
                    <h1>{el.subject}</h1>
                    <textarea
                      ref={(textarea) => (this.textArea = textarea)}
                      value={el.note}
                    />
                  </div>
                  <div className="main_move">
                    <button className="but" onClick={this.deleteNote}>
                      Edit note
                    </button>
                    <button className="but" onClick={this.copyToClipboard}>
                      Copy to clipboard
                    </button>
                    {this.state.copySuccess}
                    <button className="but">Share</button>
                  </div>
                </div>
              );
            })}
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    notes: state.todo,
  };
}

export default connect(mapStateToProps)(BlockNote);
