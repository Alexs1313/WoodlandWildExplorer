import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';

const WudlanndvildExplorrlay = ({
  children,
  wudlanndvildexplorrlayScroll = true,
  bounce = true,
}: {
  children: React.ReactNode;
  wudlanndvildexplorrlayScroll?: boolean;
  bounce?: boolean;
}) => {
  return (
    <View style={styles.wudlanndvildexplorrlayBackground}>
      {wudlanndvildexplorrlayScroll ? (
        <ScrollView
          bounces={bounce}
          contentContainerStyle={styles.wudlanndvildexplorrlayScrollContent}
          showsVerticalScrollIndicator={false}>
          {children}
        </ScrollView>
      ) : (
        <View style={styles.wudlanndvildexplorrlayFill}>{children}</View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  wudlanndvildexplorrlayBackground: {
    flex: 1,
    backgroundColor: '#120A38',
  },
  wudlanndvildexplorrlayScrollContent: {
    flexGrow: 1,
  },
  wudlanndvildexplorrlayFill: {
    flex: 1,
  },
});

export default WudlanndvildExplorrlay;
