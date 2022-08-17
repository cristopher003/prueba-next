
import {NextPage} from 'next';
import {AppProps} from 'next/app';
import { ReactElement } from 'react';
import {  } from '../node_modules/next/app';
import '../styles/globals.css'


type NetxPageWithLayout=NextPage & {
getLayout?:(page:JSX.Element)=>JSX.Element;
}

type AppPropsWithLayout=AppProps & {
  Component:NetxPageWithLayout;
}

function MyApp({ Component, pageProps }:AppPropsWithLayout) {

  const getLayout = Component.getLayout || ((page) => page );

  // return (
  //   <>
  //     <Component {...pageProps} />
  //   </>
  // )
  return getLayout( <Component {...pageProps} /> )
}

export default MyApp
