import client from '../../tina/__generated__/client';
import LandingPage from './home/landingPage';

export default async function Home() {
  const landing = await client.queries.page({ relativePath: 'landingPage/Welcome-to-Hetrzhub.md' });
  return (
    <div>
    <LandingPage data={landing.data} variables={landing.variables} query={landing.query} />
    </div>
  );
}
