import { getSession, useSession } from 'next-auth/react';
import SelectedMovie from '../../components/videos/selected-movie';
import { getMovieById } from '../../utils/requests/fetchers';
import useSWR from 'swr';
import Login from '../../components/auth/login';
//=======================================
const ShowVideoById = ({ movie }) => {
  const { data: session } = useSession();
  // if (!session) return <Login />;
  return <SelectedMovie movie={movie} />;
};

export default ShowVideoById;
//========================================

export async function getServerSideProps(context) {
  const session = await getSession(context);

  const { id } = context.query;
  const movie = await getMovieById(id);

  return {
    props: {
      session,
      movie,
    },
  };
}
