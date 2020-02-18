import React from 'react';
import ShowPostList from 'api/PublicTransportAPIs/showpostAPI';
import ShowPostContext from 'api/context/PublicTransportContext/showPostContext'
import Layout from 'components/global/layout';
import './styles.scss';

export default function ShowPost() {
  return (
    <Layout title="FuelWise" description="This is the FuelWisePage">
    <ShowPostContext.Provider>
      <div>
        <ShowPostList />
      </div>
    </ShowPostContext.Provider>
    </Layout>
  )
}

