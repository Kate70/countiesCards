import styles from "./ListOfCountries.module.css";
import { useContext, useState, useEffect } from "react";
import { CountryContext } from "../../CountryContext";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import Loading from "../Loading";

const ListOfCountries = () => {
  const [list, setList] = useState([]);
  const { names, setNames, country, setCountry } = useContext(CountryContext);
  const [loading, setLoading] = useState(true);

  const urlFromNames = country.url;

  const url = "https://restcountries.com/v3.1/region/" + urlFromNames;

  const featchTour = async () => {
    try {
      const response = await fetch(url);
      const list = await response.json();
      setLoading(false);
      setList(list);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    featchTour();
  }, []);

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  return (
    <>
      <div className={styles.wrapper}>
        <Link to="/" className={styles.errow}>
          <FaArrowLeft />
        </Link>
        {list.map((item) => {
          return (
            <div className={styles.card}>
              <div className={styles.card_border}>
                <ul>
                  <li key={item.name.common}>
                    <Link to={`/countries/${item.name.common}`}>
                      <p className={styles.name}> {item.name.common}</p>
                    </Link>

                    <img src={item.flags.png} className={styles.flags}></img>
                  </li>
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ListOfCountries;
