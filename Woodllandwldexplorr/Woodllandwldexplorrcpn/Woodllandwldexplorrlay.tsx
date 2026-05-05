import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';

const Woodllandwldexplorrlay = ({
  children,
  wodllandwldexplorrlayScroll = true,
  bounce = true,
}: {
  children: React.ReactNode;
  wodllandwldexplorrlayScroll?: boolean;
  bounce?: boolean;
}) => {
  return (
    <View style={styles.wodllandwldexplorrlayBackground}>
      {wodllandwldexplorrlayScroll ? (
        <ScrollView
          bounces={bounce}
          contentContainerStyle={styles.wodllandwldexplorrlayScrollContent}
          showsVerticalScrollIndicator={false}>
          {children}
        </ScrollView>
      ) : (
        <View style={styles.wodllandwldexplorrlayFill}>{children}</View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  wodllandwldexplorrlayBackground: {
    flex: 1,
    backgroundColor: '#120A38',
  },
  wodllandwldexplorrlayScrollContent: {
    flexGrow: 1,
  },
  wodllandwldexplorrlayFill: {
    flex: 1,
  },
});

export default Woodllandwldexplorrlay;
