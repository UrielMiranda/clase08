import React from "react";
import firebase from "firebase";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import { getUser } from "../../actions/getUser";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
  }

  login() {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(response => {
        const user ={
          displayName: response.user.displayName,
          photoURL:response.user.photoURL,
        };
        this.props.getUser(user);
        this.props.history.push("/home");
      });
  }

  render() {
    return (
      <div>
        <Button onClick={this.login} variant="contained" color="primary">
          Login With Google
        </Button>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    user: state.user,
    messages:state.messages
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getUser: user => {
      dispatch(getUser(user));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
