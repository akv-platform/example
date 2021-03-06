import * as React from "react";
import { ViewStyle } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

interface Props {
  name: string;
  size: number;
  color: string;
  style?: ViewStyle | {};
}

export class IconSource extends React.PureComponent<Props> {
  public render() {
    const { name, size, color, style } = this.props;
    return <Icon name={name} size={size} color={color} style={style} />;
  }
}
