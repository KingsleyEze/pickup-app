import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { authUser } from "../../redux/actions";
import { Button, Form, Grid, Segment, Message } from "semantic-ui-react";
import axios from "axios";

class Auth extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      error: false
    };
  }

  onChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  onSubmit(event) {
    event.preventDefault();
    const { username, password } = this.state;
    axios
      .post("http://localhost:3000/auth", { username, password })
      .then(res => {
        this.props.setAuthUser({ ...res.data });
        this.props.history.push("/");
      })
      .catch(error => this.setState({ error: true }, () => console.log(error)));
  }

  render() {
    const { username, password } = this.state;

    return (
      <Grid
        textAlign="center"
        style={{ height: "100vh" }}
        verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: 450 }}>
          {this.state.error && (
            <Message error content="Username and/or Password Mismatch" />
          )}

          <Form size="large" onSubmit={this.onSubmit.bind(this)}>
            <Segment stacked>
              <Form.Input
                fluid
                icon="user"
                iconPosition="left"
                placeholder="Username"
                id="username"
                value={username}
                onChange={this.onChange.bind(this)}
              />
              <Form.Input
                fluid
                icon="lock"
                iconPosition="left"
                placeholder="Password"
                type="password"
                id="password"
                value={password}
                onChange={this.onChange.bind(this)}
              />

              <Button color="blue" fluid size="large" type="submit">
                Login
              </Button>
            </Segment>
          </Form>
        </Grid.Column>
      </Grid>
    );
  }
}

const mapStateToProps = state => ({
  authUser: state.auth
});

const mapDispatchToProps = dispatch => ({
  setAuthUser: userData => dispatch(authUser(userData))
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Auth)
);
