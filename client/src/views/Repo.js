import React from "react";
import PropTypes from "prop-types";
import axios from "axios";

const api = {
  baseUrl: "https://api.github.com/",
  client_id: "e7b2f308dd49602e3887",
  client_secret: "3e5fafe97bd925f4b8e242f11622b80abf673a0a",
};

class Repo extends React.Component {
  constructor() {
    super();
    this.state = {
      githubData: [],
    };
  }

  componentDidMount() {
    try {
      axios
        .get(
          api.baseUrl +
            "search/repositories?q=language:java&sort=stars&page=1&client_id=" +
            api.client_id +
            "&client_secret=" +
            api.client_secret
        )
        .then((res) => {
          console.log("infos da API", res);
          this.setState({ githubData: res.data.items });
        });
    } catch (err) {
      return err;
    }
  }

  render() {
    const { params } = this.props;
    const { githubData } = this.state;
    console.log(
      "rota funcionando apenas se digitado o link: http://localhost:8080/repo:(nomeDoRepo) {consertar}"
    );
    return (
      <div className="container app">
        <p>dados do repositorio selecionado</p>
        <div className="row">
          {githubData.map((name) => (
            <div className="col-md-12">
              <p>
                {`:${name.name}` === this.props.match.params.name
                  ? `nome: ${name.name}, id: ${name.id}, Url: ${name.downloads_url}`
                  : ``}
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

Repo.propTypes = {
  params: PropTypes.object,
};

export default Repo;
