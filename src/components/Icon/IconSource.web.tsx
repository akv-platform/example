// TODO: icons for web

import * as React from "react";
import { Text } from "..";

interface Props {
  name: string;
  size: number;
  color: string;
}

export class IconSource extends React.PureComponent<Props> {
  public render() {
    const { name } = this.props;
    return <Text title={name} />;
  }
}
