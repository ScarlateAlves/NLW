import styles from "../styles/Components/ExperinceBar.module.css";

export function ExperinceBar() {
  return (
    <header className={styles.experienceBar}>
      <span>0px</span>
      <div>
        <div style={{ width: "50%" }}>
          <span className={styles.currentExperience} style={{ left: "50%" }}>
            300xp
          </span>
        </div>
      </div>
      <span>600px</span>
    </header>
  );
}
