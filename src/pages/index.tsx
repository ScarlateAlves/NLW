// tudo estatico da pagina fica aqui
import HEAD from "next/head";
import CompletedChallenges from "../Components/CompletedChallenges";
import Contador from "../Components/Contador";
import { ExperinceBar } from "../Components/ExperinceBar";
import Profile from "../Components/Profile";
import TelaCiclo from "../Components/TelaCiclo";
import style from "../styles/pages/Home.module.css";
export default function Home() {
  return (
    <div className={style.containerPrincipal}>
      <ExperinceBar />
      <section>
        <div>
          <Profile />
          <CompletedChallenges />
          <Contador />
        </div>
        <div>
          <TelaCiclo />
        </div>
      </section>
    </div>
  );
}
