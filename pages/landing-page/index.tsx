import React, {FC} from 'react';
import Layout from 'components/global/layout';
import './styles.scss';

interface IProps {};

export const LandingPage: FC<IProps> = () => (
  <Layout title="Landing page" description="This is the Landing page Page">
    <div className="landing-page-page">
      <p>
        This is the <strong>Landing page</strong> page
      </p>
    </div>
  </Layout>
);

export default LandingPage;
