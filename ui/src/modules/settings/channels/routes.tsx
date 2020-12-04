import asyncComponent from 'modules/common/components/AsyncComponent';
import React from 'react';
import { Route } from 'react-router-dom';

const Channels = asyncComponent(() =>
  import(/* webpackChunkName: "Channels - Settings" */ './containers/Channels')
) as unknown as React.ComponentType;

const routes = () => <Route path="/settings/channels/" component={Channels} />;

export default routes;
