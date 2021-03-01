import { useState, useEffect } from "react";
import style from "../styles/Components/Contador.module.css";
export default function Contador() {
  const [terminado, sendoterminado] = useState(false);
  const [active, setActive] = useState(false);
  const [tempo, setTime] = useState(0.1 * 60);

  const minutos = Math.floor(tempo / 60);
  const segundos = tempo % 60;

  const [minutoleft, minutoright] = String(minutos).padStart(2, "0").split("");
  const [segundoleft, segundoight] = String(segundos)
    .padStart(2, "0")
    .split("");

  let contadorTimeout: NodeJS.Timeout;

  function startContador() {
    setActive(true);
  }

  function paraContador() {
    clearTimeout(contadorTimeout);
    setActive(false);
    setTime(25 * 60);
  }

  useEffect(() => {
    if (active && tempo > 0) {
      contadorTimeout = setTimeout(() => {
        setTime(tempo - 1);
      }, 1000);
    } else if (active && tempo == 0) {
      sendoterminado(true);
      setActive(false);
    }
  }, [active, tempo]);

  return (
    <div>
      <div className={style.contador}>
        <div>
          <span>{minutoleft}</span>
          <span>{minutoright}</span>
        </div>
        <span>:</span>
        <div>
          <span>{segundoleft}</span>
          <span>{segundoight}</span>
        </div>
      </div>
      {terminado == true ? (
        <button disabled type="button" className={style.botao}>
          Terminou
        </button>
      ) : (
        <>
          {active == false ? (
            <button
              type="button"
              className={style.botao}
              onClick={startContador}
            >
              Inicia um ciclo
            </button>
          ) : (
            <button
              type="button"
              className={`${style.botao} ${style.segundobotao}`}
              onClick={paraContador}
            >
              Terminar um ciclo
            </button>
          )}
          ;
        </>
      )}
    </div>
  );
}
