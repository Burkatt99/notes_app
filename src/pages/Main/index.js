import React from "react";
import AddNotes from "../../components/addNotes";
import Notes from "../../components/listNotes";

function Main() {
  return (
    <div className="postBlock">
      <AddNotes />
      <Notes />
    </div>
  );
}

export default Main;
