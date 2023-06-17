import React from 'react';
import Head from 'next/head';
import 'antd/dist/antd';
import Proptypes from 'prop-types';

// eslint-disable-next-line react/prop-types
const App = ({Component}) => {
     return (
          <>
               <Head>
                    <meta charSet='utf-8' />
                    <title>NodeBird</title>
               </Head>
               <Component />
          </>
     );
};

App.proptypes = {
     children: Proptypes.elementType.isRequired,
};

export default App;
