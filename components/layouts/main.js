import Head from 'next/head'

const Main = ({ children, router }) => {
  return (
    <main>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Skate Store</title>
      </Head>
      <div className="container">{children}</div>
    </main>
  )
}

export default Main
