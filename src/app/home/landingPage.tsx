
'use client';

import React from 'react';
import '../styles/landingPage.css'
import { PageQuery, PageQueryVariables } from '../../../tina/__generated__/types';
import { useTina } from 'tinacms/dist/react';
import Referral from '../icon/Referral_icon.svg';
import Resource from '../icon/Resource_icon.svg';
import Treferral from '../icon/Treferral_icon.svg';
import HelpIcon from '../icon/Help_img.svg'

const LandingPage = (props: {
  data: PageQuery;
  variables: PageQueryVariables;
  query: string;
}) => {
  const { data } = useTina({
    data: props.data,
    query: props.query,
    variables: props.variables,
  });
  console.log('data', props.data, props.variables)
  return (
    <div>
      <section className='welcome-blk' style={{ backgroundImage: `url(${data?.page?.imgSrc})` }}>
        <div className='welcome-msg'>
          <div className='relative top-2 text-left'>
            <h1> {data?.page?.title} </h1>
            <div className='sub-text'><p>{data?.page?.body}</p></div></div>
        </div>
      </section>
      <section>
        <div className='signup-blk'>
          <div className='sub-blk'>
            <h1>Sign up to HertsHub</h1>
            <p>It’s quick and easy for young people, parents, carers and professionals to create a CYPMHS HertsHub account. Once registered you can select resources and information specifically for your particular needs, make a referral and track progress of a referral.</p>
          </div>
          <div className='side-blk'>
            <section>
              <div className='referral'>
                <div><Referral /></div>
                <p>Make a referral</p>
              </div>
              <div className='sub-text'><p>You can self-refer on the portal and manage it online. Even if you don’t have account on HertsHub, you can make a referral.</p></div>
            </section>
            <section>
              <div className='referral'>
                <div><Resource /></div>
                <p>Make a referral</p>
              </div>
              <div className='sub-text'><p>You can self-refer on the portal and manage it online. Even if you don’t have account on HertsHub, you can make a referral.</p></div>
            </section>
            <section>
              <div className='referral'>
                <div><Treferral /></div>
                <p>Make a referral</p>
              </div>
              <div className='sub-text'><p>You can self-refer on the portal and manage it online. Even if you don’t have account on HertsHub, you can make a referral.</p></div>
            </section>
          </div>
        </div>
      </section>
      <section>
        <div>
          <div>
            <div className='help-blk'>
              <div><HelpIcon /></div>
              <div>
                <h1>What would you like help with
                  today? </h1>
                <p>Search information, self-help resources and services for Hertfordshire’s young people, parents, carers, and professionals to help support children and young people’s emotional wellbeing and mental health.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
