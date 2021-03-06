import * as React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Text } from "..";
import { Theme } from "../../utils";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row"
  },
  optional: {
    color: Theme.color.secondary
  },
  title: {
    textTransform: "capitalize"
  }
});

interface Props {
  title?: string;
  optional?: boolean;
  onPress(): void;
}

export class Title extends React.PureComponent<Props> {
  private optionalText = " - Optional";
  public render() {
    const { title, optional, onPress } = this.props;
    const stylesOptional = [styles.title, styles.optional];
    if (title === undefined || title.length === 0) {
      return null;
    }
    return (
      // TODO: remove touchableopacity and move to button component
      <TouchableOpacity
        activeOpacity={1}
        style={styles.container}
        onPress={onPress}
      >
        <Text title={title} style={styles.title} />
        <Text
          hidden={!optional}
          title={this.optionalText}
          style={stylesOptional}
        />
      </TouchableOpacity>
    );
  }
}
