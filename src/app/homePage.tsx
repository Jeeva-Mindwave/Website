'use client';
import styles from './page.module.css';
import { PageQuery, PageQueryVariables } from '../../tina/__generated__/types';
import { useTina } from 'tinacms/dist/react';

const HomePage = (props: {
  data: PageQuery;
  variables: PageQueryVariables;
  query: string;
}) => {
  const { data } = useTina({
    data: props.data,
    query: props.query,
    variables: props.variables,
  });
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <p>{data.page?.title}</p>
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
};

export default HomePage;
