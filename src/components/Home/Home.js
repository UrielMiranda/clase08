import React from "react";
import { connect } from "react-redux";
import { db } from "../../config";
import Box from "../Box/Box";
import Room from "../Room/Room";
import Button from "@material-ui/core/es/Button/Button";
import firebase from "firebase";
import { initData } from "../../actions/initData";
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.getMessage = this.getMessage.bind(this);
    this.logOut = this.logOut.bind(this);
  }

  componentDidMount() {
    if (this.props.user) {
      this.getMessage();
    } else {
      this.props.history.push("/");
    }
  }

  getMessage() {
    db.collection("users")
      .get()
      .then(querySnapshot => {
        const data = querySnapshot.docs.map(doc => {
          return doc.data();
        });
        this.props.initData(data);
      });
  }

  logOut() {
    firebase
      .auth()
      .signOut()
      .then(() => {
        console.log("log out");
        this.props.history.push("/");
      });
  }

  render() {
    return (
      <div>
        <Button onClick={this.logOut}>Log out</Button>
        <Box />
        <Room />
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
    initData: messages => {
      dispatch(initData(messages));
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
