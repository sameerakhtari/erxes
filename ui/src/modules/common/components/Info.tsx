import { Info as CommonInfo } from 'erxes-common-ui';
import React from 'react';

type Props = {
  children: React.ReactNode;
  bordered?: boolean;
};

class Info extends React.PureComponent<Props> {
  render() {
    return <CommonInfo {...this.props}>{this.props.children}</CommonInfo>;
  }
}

export default Info;
