import React from "react";
import { browserHistory } from "react-router";

class Login extends React.Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     user: {},
  //   };
  // }

  // componentDidMount() {
  //   Axios.get("http://localhost:3333/getUser").then((res) =>
  //     this.setState({ user: res.data })
  //   );
  // }

  render() {
    return (
      <form
        class="dark"
        action={"/sessions"}
        method={"post"}
      >
        <label for="username">E-mail</label>
        <input type="text" name="email" />
        <label for="password">Senha</label>
        <input type="password" name="password" />
        <input
          type="submit"
          value="Entrar"
          // onClick={browserHistory.push("/content")}
        />
      </form>
    );
  }
}
export default Login;
