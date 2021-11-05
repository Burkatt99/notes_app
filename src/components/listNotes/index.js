import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./style.css";
import twitter from "../../images/bird.png";
import facebook from "../../images/facebook.png";
import copy from "../../images/copy.png";

class Notes extends Component {
  render() {
    console.log(this.props.notes);
    return (
      <div className="noteBlock">
        {this.props.notes.map((el) => {
          return (
            <div className="note">
              <div className="subj">
                <Link className="link" to={`/detal/${el.id}`}>
                  {el.subject}
                </Link>
              </div>
              <div className="note_text">
                {el.note}
                <p>{el.date}</p>
              </div>
              <div class="icons">
                <img id="twitter" alt="twitter" src={twitter} />
                <img id="facebook" alt="facebook" src={facebook} />
                <img id="copy" alt="copy" src={copy} />
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
export default connect(mapStateToProps)(Notes);
