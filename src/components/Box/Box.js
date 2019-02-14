import React from "react";
import { connect } from "react-redux";
import { setMsg } from "../../actions/setMsg";
import { db } from "../../config";

class Box extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
    this.onChange = this.onChange.bind(this);
    this.onSend = this.onSend.bind(this);
  }

  onChange(e) {
    e.preventDefault();
    this.setState({ value: e.target.value });
  }

  onSend(e) {
    e.preventDefault();
    const obj = {
      message: this.state.value,
      displayName: this.props.user.displayName,
      photoURL: this.props.user.photoURL
    };
    this.props.setMsg(obj);
    this.setState({ value: "" });
    this.saveData(obj);
  }

  saveData(obj) {
    const users = db.collection("users").exists();
    if (users) {
      db.collection("users")
        .add(obj)
        .then(console.log("Succesfull added"));
    } else {
      db.collection("users")
        .set(obj)
        .then(console.log("Create Collection users"));
    }
  }

  render() {
    return (
      <div>
        <form autoComplete="off" onSubmit={this.onSend}>
          <input
            id="query"
            onChange={this.onChange}
            type="text"
            placeholder="Send Message"
            value={this.state.value}
          />
          <button type="submit">Send</button>
        </form>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    user: state.user,
    messages: state.messages
  };
};
const mapDispatchToProps = dispatch => {
  return {
    setMsg: messages => {
      dispatch(setMsg(messages));
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Box);
