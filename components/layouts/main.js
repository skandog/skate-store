import Head from 'next/head'
import Nav from '../nav'

const Main = ({ children, router }) => {


  return (
    <main>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Skate Store</title>
        <link rel="icon" type="image/png" href="/img/oster-944x942.png" />
      </Head>
      <Nav path={router.asPath} />
      <div className="main-container">{children}</div>
    </main>
  )
}

export default Main
