import asyncComponent from 'modules/common/components/AsyncComponent';
import React from 'react';
import { Route } from 'react-router-dom';

const Brands = asyncComponent(() =>
  import(/* webpackChunkName: "Brands - Settings" */ './containers/Brands')
) as unknown as React.ComponentType;;

const routes = () => <Route path="/settings/brands/" component={Brands} />;

export default routes;
