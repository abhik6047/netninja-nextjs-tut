import Head from "next/head";
import styles from "../../styles/Ninjas.module.css";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return {
    props: {
      ninjas: data,
    },
  };
};

function Ninjas({ ninjas }) {
  return (
    <>
      <Head>
        <title>NinjaList | Ninjas</title>
      </Head>
      <div>
        <h1>All Ninjas List</h1>
        {ninjas.map((ninja) => (
          <div key={ninja.id}>
            <a className={styles.single}>
              <h3>{ninja.name}</h3>
            </a>
          </div>
        ))}
      </div>
    </>
  );
}

export default Ninjas;
