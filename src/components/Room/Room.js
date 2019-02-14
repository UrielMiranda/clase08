import React from "react";
import { connect } from "react-redux";
const styles = {
  img: {
    width: "40px",
    borderRadius: "50px"
  },
  container: {
    display: "flex",
    alignItems: "center"
  },
  box: {
    display: "flex",
    flexDirection: "column",
    padding: "10px",
    textAlign: "left"
  },
  name: {
    fontSize: "12px"
  }
};

class Room extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const messages = this.props.messages;
    const template = messages ? (
      messages.map((item, i) => {
        return (
          <div style={styles.container} key={i}>
            <img style={styles.img} src={item.photoURL} alt="" />
            <div style={styles.box}>
              <strong style={styles.name}>{item.displayName}</strong>
              {item.message}
            </div>
          </div>
        );
      })
    ) : (
      <div>No Messages</div>
    );

    return template;
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
    messages: state.messages
  };
};
export default connect(mapStateToProps)(Room);
