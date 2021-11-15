import { useState, useEffect } from "react";
import axios from "axios";
import styles from "./Detail.module.css";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const Detail = ({ match }) => {
  const [ditails, setDetails] = useState([]);
  const urlCountry = match.params.name;
  console.log(ditails);

  function urlForSearch(urlCountry) {
    const first = urlCountry.split("");
    first[0] = first[0].toLowerCase();
    return first.join("");
  }
  const url = "https://restcountries.com/v3.1/name/";
  const url2 = urlForSearch(urlCountry);
  console.log(url2);

  useEffect(() => {
    axios.get(url + url2).then(({ data }) => setDetails(data));
  }, []);

  return (
    <>
      <div className={styles.wrapper}>
        <Link to="/countries" className={styles.errow}>
          <FaArrowLeft />
        </Link>
        {ditails.map(
          ({
            region,
            name,
            timezones,
            currencies,
            startOfWeek,
            area,
            population,
            continent,
            flags,
            languages,
            capital,
          }) => {
            return (
              <div className={styles.card}>
                <p className={styles.name}>{name.common}</p>
                <img src={flags.png} className={styles.flag}></img>
                <article>
                  <ul className={styles.text_block}>
                    <p>
                      <b> Official name:</b> {name.official}
                    </p>
                    <p>
                      {" "}
                      <b> Area:</b> {area}{" "}
                    </p>
                    <p>
                      {" "}
                      <b> Population:</b> {population}
                    </p>
                    <p>
                      {" "}
                      <b> Languages:</b>{" "}
                      <li>
                        {" "}
                        {Object.entries(languages).map((arr) => {
                          return <p>{arr[1]}</p>;
                        })}
                      </li>
                    </p>
                    <p>
                      <b>start of week: </b> {startOfWeek}
                    </p>
                    <p>
                      <b>Timezone:</b> {timezones}
                    </p>
                    <p>
                      <b>Region: </b>
                      {region}
                    </p>
                    <p>
                      <b>Capital:</b> {capital}
                    </p>
                  </ul>
                </article>
              </div>
            );
          }
        )}
      </div>
    </>
  );
};

export default Detail;
