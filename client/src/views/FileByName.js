import Axios from "axios";
import React from "react";
import cookie from "react-cookies";

class Files extends React.Component {
  constructor() {
    super();
    this.state = {
      User: {},
      file: {},
      files: [],
      UserId: cookie.load("id"),
      User_isAdm: cookie.load("isAdm"),
    };
  }

  buscaPorNome(event) {
    try {
      Axios.get("/getFileByName", {
        params: {
          name: event.target[0].value,
        },
      }).then((res) => this.setState({ file: res.data }));
      console.log(this.state.file);
    } catch (err) {
      return err;
    }
    event.preventDefault();
  }

  render() {
    console.log(this.state);
    return (
      <div>
        {this.state.User_isAdm == "true" && this.state.UserId ? (
          <form
            class="dark"
            action="/uploadFile"
            method="post"
            enctype="multipart/form-data"
          >
            <label>Usuario Adm -- cadastro de arquivos -- </label>

            <input type="file" name="file" accept="image/png, image/jpeg" />
            <input type="submit" value="Salvar arquivo" />
          </form>
        ) : null}
        {this.state.UserId ? (
          <div>
            <form class="dark" onSubmit={this.buscaPorNome.bind(this)}>
              <label> Busca de arquivos por nome -- </label>
              <input type="text" id={"name"} />
              <input type="submit" value="Buscar" />
            </form>
          </div>
        ) : (
          <div className="row">
            <div className="col-md-12">
              <p> O usuario precisa estar logado para executar pesquisas</p>
            </div>
          </div>
        )}
        {this.state.file !== "{}" && (
          <div className="row">
            <div className="col-md-12">
              <p>
                {`nome: ${this.state.file.name}, 
              id: ${this.state.file.id}, 
              Path: ${this.state.file.path}`}
                <img
                  src={`/files/${this.state.file.path}`}
                ></img>
              </p>
            </div>
          </div>
        )}
        <form
          class="dark"
          action={"/logout"}
          method={"get"}
        >
          <input type="submit" value="Logout" />
        </form>

        <form
          class="dark"
          action={"/files"}
          method={"get"}
        >
          <input type="submit" value="Busca completa ao banco de dados" />
        </form>
      </div>
    );
  }
}
export default Files;
