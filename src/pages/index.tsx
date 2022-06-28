import type { NextPage } from 'next'
import Head from 'next/head';
import style from './home.module.scss';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home | igNews</title>
      </Head>
      <main className={style.contentContainer}>
        <section className={style.hero}>
          <span>👏 Hey, welcome</span>
          <h1>News about the <span>React</span> world.</h1>
          <p>
            Get access to all the publication <br />
            <span>for $9.90 month</span>
          </p>
        </section>
        <img src="/images/avatar.svg" alt="Girl coding" />
      </main>
    </>

  );
}

export default Home
