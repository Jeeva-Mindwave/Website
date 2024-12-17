import client from '../../tina/__generated__/client';
import LandingPage from './home/landingPage';

export default async function Home() {
  const paths = [
    'landingPage/Welcome-to-Hetrzhub.md',
    'landingPage/Sign-up.md',
  ];

  const pages = await Promise.all(
    paths.map((path) => client.queries.page({ relativePath: path }))
  );

  return (
    <div>
      {pages.map((page, index) => (
        <LandingPage
          key={index}
          data={page.data}
          variables={page.variables}
          query={page.query}
        />
      ))}
    </div>
  );
}
