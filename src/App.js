import React, { useState } from "react";

import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import { intlag } from "./math";
import { TableResults } from "./Table";

import "./styles.css";

function App() {
  const [values, setValues] = useState({
    coordx: "5 10 20 30",
    coordy: "1.519 1.307 1.002 0.796",
    xint: "7.5",
  });
  const [result, setResult] = useState({
    suma: "",
    content: [],
    sumaContent: [],
  });

  function handleSubmit() {
    const { suma, content, sumaContent } = intlag(
      values.coordx,
      values.coordy,
      values.xint
    );

    setResult({ suma, content, sumaContent });
  }

  return (
    <>
      <Typography
        variant="h5"
        component="h5"
        style={{ paddingBottom: ".5rem" }}
      >
        Andrés Mauricio Montoya Sánchez
      </Typography>
      <Typography
        variant="h5"
        component="h5"
        style={{ paddingBottom: ".5rem" }}
      >
        Erika Lorena Barrios Sierra
      </Typography>
      <Typography
        variant="h5"
        component="h5"
        style={{ paddingBottom: ".5rem" }}
      >
        Brayan Mauricio Salamanca Sierra
      </Typography>

      <TextField
        label="Coordenadas de x"
        value={values.coordx}
        onChange={(val) => setValues({ ...values, coordx: val.target.value })}
        helperText="Usar espacios para añadir cada valor"
        variant="outlined"
        style={{ paddingRight: "1rem" }}
      />
      <TextField
        label="Coordenadas de y"
        value={values.coordy}
        onChange={(val) => setValues({ ...values, coordy: val.target.value })}
        helperText="Usar espacios para añadir cada valor"
        variant="outlined"
        style={{ paddingRight: "1rem" }}
      />
      <TextField
        label="Valor a interpolar"
        value={values.xint}
        onChange={(val) => setValues({ ...values, xint: val.target.value })}
        helperText="Añadir un valor"
        variant="outlined"
        style={{ paddingRight: "1rem" }}
      />
      <Button variant="outlined" color="primary" onClick={handleSubmit}>
        Let's go!
      </Button>

      {result.suma && (
        <>
          <div className="text">
            <Typography variant="h5" component="h5">
              Operaciones por grado
            </Typography>
          </div>
          <TableResults result={result.content} />

          <div className="text">
            <Typography variant="h5" component="h5">
              Resultado de operaciones
            </Typography>
          </div>
          <TableResults result={result.sumaContent} />

          <div className="text">
            <Typography variant="h5" component="h5">
              El resultado final es: {result.suma}
            </Typography>
          </div>
        </>
      )}
    </>
  );
}

export default App;
