import React from 'react';
import FuelWiseList from 'api/fuelwiseAPI';
import FuelWiseContext from 'api/context/fuelWiseContext'
import Layout from 'components/global/layout';
import './styles.scss';

export default function FuelWise() {
  return (
    <Layout title="FuelWise" description="This is the FuelWisePage">
    <FuelWiseContext.Provider>
      <div>
        <FuelWiseList />
      </div>
    </FuelWiseContext.Provider>
    </Layout>
  )
}
