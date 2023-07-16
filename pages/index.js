import Head from 'next/head';
import { getSession, useSession } from 'next-auth/react';
import Login from '../components/auth/login';
//=====================================================
export default function Home() {
  const { data: session } = useSession();

  if (!session) return <Login />;

  return (
    <>
      <Head>
        <title>clone-netflix</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/logo.png' />
      </Head>

      <main>
        <h1 className='text-3xl font-bold underline'>clone-netflix</h1>
      </main>
    </>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  return {
    props: {
      session,
    },
  };
}
