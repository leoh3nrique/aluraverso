import { StyledRegisterVideo } from "./styled";
import React from "react";



function useForm({initialValues}){
    const [values, setValues] = React.useState(initialValues);



    return{
        values,
        handleChange:(e) => {
            const value = e.target.value;
            console.log(value);
            setValues({
              ...values,
              titulo: value,
            });
          }
    }
}


function RegisterVideo() {
    const formCadastro=useForm({
        initialValues: {titulo: "FrostPunk" , url:"blbalbal"}
    })

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
            console.log(values);
            setValues("")
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
              placeholder="Titulo do Video"
              value={formCadastro.values.titulo || ""}
              onChange={formCadastro.handleChange}
            />
            <input
              placeholder="Url"
              value={formCadastro.values.url || ""}
              onChange={formCadastro.handleChange}
            />

            {/* <input placeholder="URL" value={values.url} onChange= {(e) => setValues(e.target.value)}/> */}
            <button type="submit">Cadastrar</button>
          </div>
        </form>
      ) : (
        false
      )}
      <Styled>
        <p>AVI LOGO</p>
        <h2>Hahaha</h2>
        <h3>haa</h3>
      </Styled>
    </StyledRegisterVideo>
  );
}

export default RegisterVideo;
