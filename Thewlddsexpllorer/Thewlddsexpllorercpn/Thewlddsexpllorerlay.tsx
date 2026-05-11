import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';

const Thewlddsexpllorerlay = ({
  children,
  thewlddsexpllorerlayScroll = true,
  bounce = true,
}: {
  children: React.ReactNode;
  thewlddsexpllorerlayScroll?: boolean;
  bounce?: boolean;
}) => {
  return (
    <View style={styles.thewlddsexpllorerlayBackground}>
      {thewlddsexpllorerlayScroll ? (
        <ScrollView
          bounces={bounce}
          contentContainerStyle={styles.thewlddsexpllorerlayScrollContent}
          showsVerticalScrollIndicator={false}>
          {children}
        </ScrollView>
      ) : (
        <View style={styles.thewlddsexpllorerlayFill}>{children}</View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  thewlddsexpllorerlayBackground: {
    flex: 1,
    backgroundColor: '#120A38',
  },
  thewlddsexpllorerlayScrollContent: {
    flexGrow: 1,
  },
  thewlddsexpllorerlayFill: {
    flex: 1,
  },
});

export default Thewlddsexpllorerlay;
