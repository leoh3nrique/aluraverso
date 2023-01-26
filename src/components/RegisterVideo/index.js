import { StyledRegisterVideo } from "./styled";
import React from "react";

function useForm({ initialValues }) {
  const [values, setValues] = React.useState(initialValues);

  return {
    values,
    handleChange: (e) => {
      const value = e.target.value;
      console.log(value);
      setValues({
        ...values,
        titulo: value,
      });
    },
  };
}

function RegisterVideo() {
  const formCadastro = useForm({
    initialValues: { titulo: " ", url: "" },
  });

  const [formVisivel, setFormVisivel] = React.useState(false);

  return (
    <StyledRegisterVideo>
      <button className="add-video" onClick={() => setFormVisivel(true)}>
        +
      </button>

      {formVisivel ? (
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <div>
            <button
              className="close-modal"
              onClick={() => setFormVisivel(false)}
            >
              X
            </button>
            <input
              placeholder="Titulo"
              value={formCadastro.values.titulo || ""}
              onChange={formCadastro.handleChange}
            />
            <input
              placeholder="Url"
              value={formCadastro.values.url || ""}
              onChange={formCadastro.handleChange}
            />

            <button type="submit">Cadastrar</button>
          </div>
        </form>
      ) : (
        false
      )}
    </StyledRegisterVideo>
  );
}

export default RegisterVideo;
