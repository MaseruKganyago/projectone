// pages/_app.js
import React from 'react';
import App, { Container } from 'next/app';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { configureStore } from 'redux-store/createStore';
import { CustomErrorBoundary } from 'components';
import { RestfulProvider } from 'restful-react';

const { store, persistor } = configureStore();

export default class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <CustomErrorBoundary>
              <RestfulProvider base="https://localhost:44352/api">
                <Component {...pageProps} />
              </RestfulProvider>
            </CustomErrorBoundary>
          </PersistGate>
        </Provider>
      </Container>
    );
  }
}
