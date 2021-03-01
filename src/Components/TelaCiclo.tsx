import style from "../styles/Components/TelaCiclo.module.css";
export default function TelaCiclo() {
  const cicloAtivado = true;
  return (
    <div className={style.ciclo}>
      {cicloAtivado == true ? (
        <div className={style.cicloAtivado}>
          <header>
            <span>Ganhe 400xp</span>
          </header>
          <img src="icons/body.svg" alt="" />
          <strong>Exercite-se</strong>
          <p>
            É agora Scarlate, bora lá. Caminhe por 3 minutos e estique suas
            pernas pra você ficar saudavel
          </p>
          <footer>
            <button>Falhei</button>
            <button>Completei</button>
          </footer>
        </div>
      ) : (
        <div className={`${style.cicloNot} ${style.ciclo}`}>
          <strong>
            Inicie um ciclo para receber desafios a serem completados
          </strong>
          <p>
            <img src="icons/level-up.svg" alt="" />
            Complete-os e ganhe experiência e avance de leve.
          </p>
        </div>
      )}
    </div>
  );
}
