import React from 'react';

import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import { RouteItem } from '../types';

import {
  COLORS,
  SPACING,
  TYPOGRAPHY,
} from '../theme';

interface Props {
  item: RouteItem;
}

export const ItemCard = ({ item }: Props) => {
  return (
    <View style={styles.card}>
      <Text style={styles.routeName}>
        {item.routeName}
      </Text>

      <Text style={styles.text}>
        Conductor: {item.driverName}
      </Text>

      <Text style={styles.text}>
        Vehículo: {item.vehiclePlate}
      </Text>

      <Text style={styles.text}>
        Estudiantes: {item.studentsAssigned}
      </Text>

      <Text
        style={[
          styles.status,
          item.status === 'Activo'
            ? styles.active
            : styles.inactive,
        ]}
      >
        {item.status}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.white,
    padding: SPACING.md,
    borderRadius: 12,
    elevation: 3,
  },

  routeName: {
    fontSize: TYPOGRAPHY.subtitle,
    fontWeight: 'bold',
    color: COLORS.primary,
    marginBottom: SPACING.sm,
  },

  text: {
    fontSize: TYPOGRAPHY.body,
    color: COLORS.text,
    marginBottom: SPACING.xs,
  },

  status: {
    marginTop: SPACING.sm,
    fontWeight: 'bold',
  },

  active: {
    color: COLORS.success,
  },

  inactive: {
    color: COLORS.danger,
  },
});