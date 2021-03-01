import style from "../styles/Components/Profile.module.css";
export default function Profile() {
  return (
    <div className={style.profile}>
      <img src="https://github.com/ScarlateAlves.png" alt="imagem" />
      <div>
        <strong>Scarlate Alves dos Santos</strong>
        <p>
          <img src="icons/level.svg" alt="" />
          Level 1
        </p>
      </div>
    </div>
  );
}
