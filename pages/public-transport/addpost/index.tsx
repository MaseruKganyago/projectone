import React, {FC} from 'react';
import Layout from 'components/global/layout';
import AddPost from 'api/PublicTransportAPIs/addpostAPI';
import AddPostContext from 'api/context/PublicTransportContext/addPostContext';

import './styles.scss';

interface IProps {};

export const Addpost: FC<IProps> = () => (
  <Layout title="Addpost" description="This is the Addpost Page">
   <AddPostContext.Provider>
   <AddPost />
   </AddPostContext.Provider>
  </Layout>
);

export default Addpost;
