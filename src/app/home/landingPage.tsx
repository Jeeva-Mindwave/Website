
'use client';

import React from 'react';
import '../styles/landingPage.css'
import { PageQuery, PageQueryVariables } from '../../../tina/__generated__/types';
import { useTina } from 'tinacms/dist/react';
import Referral from '../icon/Referral_icon.svg';
import Resource from '../icon/Resource_icon.svg';
import Treferral from '../icon/Treferral_icon.svg';
import HelpIcon from '../icon/Help_img.svg'
import SearchAlphabet from '../components/Search';
import { Button } from '@/components/ui/button';
import CustomSlider from '../components/CustomSlider';

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
            <h1>{data?.page?.signup}</h1>
            <p>{data?.page?.signupContent}</p>
            <div className='btn-blk'>
            <Button variant={'default'}>Create an account</Button>
            <Button variant={'secondary'}>Watch demo</Button>
            </div>
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
                <p>Access resources</p>
              </div>
              <div className='sub-text'><p>You can self-refer on the portal and manage it online. Even If you don’t have account on HertsHub, you can make a referral. </p></div>
            </section>
            <section>
              <div className='referral'>
                <div><Treferral /></div>
                <p>Track a referral</p>
              </div>
              <div className='sub-text'><p>You can self-refer on the portal and manage it online. Even if you don’t have account on HertsHub, you can make a referral.</p></div>
            </section>
          </div>
        </div>
      </section>
      <section>
        <div className='help-main-blk'>
          <div>
            <div className='help-blk'>
              <div><HelpIcon /></div>
              <div>
                <h1>What would you like help with
                  today? </h1>
                <p>Search information, self-help resources and services for Hertfordshire’s young people, parents, carers, and professionals to help support children and young people’s emotional wellbeing and mental health.</p>
                  <SearchAlphabet />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <CustomSlider sliderData={data?.page}/>
      </section>
    </div>
  );
};

export default LandingPage;
