import styles from "./Main.module.css";
import { Link } from "react-router-dom";

const Main = ({ names, setNames, getName }) => {
  return (
    <div className={styles.main}>
      <div className={styles.gradient}>
        <div className={styles.wrapper}>
          {names.map((item) => {
            const { id, name, url, checked } = item;
            return (
              <div className={styles.buttons}>
                <ul key={id}>
                  <article key={id}>
                    <Link to="/countries">
                      <li key={id} onClick={() => getName(item)}>
                        <button className={styles.title}> {name}</button>
                      </li>
                    </Link>
                  </article>
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Main;
