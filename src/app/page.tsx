import client from '../../tina/__generated__/client';
import HomePage from './homePage';

export default async function Home() {
  const res = await client.queries.page({ relativePath: 'new-subtitle.md' });
  return (
    <HomePage data={res.data} variables={res.variables} query={res.query} />
  );
}
