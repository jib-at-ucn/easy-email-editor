import React, { Suspense } from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Page from '@demo/components/Page';
import store from '@demo/store';
import { history } from './utils/history';
import '@demo/styles/common.scss';

const Editor = React.lazy(() => import('@demo/pages/Editor'));

function App() {
  return (
    <Provider store={store}>
      <Page>
        <Suspense
          fallback={
            <div
              style={{
                width: '100vw',
                height: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <p
                style={{
                  fontSize: 24,
                  color: 'rgba(0, 0, 0, 0.65)',
                }}
              >
                Please wait a moment.
              </p>
            </div>
          }
        >
          <Router history={history}>
            <Switch>
              <Route
                path='/'
                exact
                component={Editor}
              />
            </Switch>
          </Router>
        </Suspense>
      </Page>
    </Provider>
  );
}

export default App;
