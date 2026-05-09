import React, {
  useState,
  useMemo,
  useCallback,
} from 'react';

import {
  View,
  Text,
  FlatList,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';

import { routesData } from '../data/mockData';

import { ItemCard } from '../components/ItemCard';

import {
  COLORS,
  SPACING,
  TYPOGRAPHY,
} from '../theme';

import { RouteItem } from '../types';

export const HomeScreen = () => {
  const [search, setSearch] = useState('');

  const filteredRoutes = useMemo(() => {
    return routesData.filter((route) => {
      return (
        route.routeName
          .toLowerCase()
          .includes(search.toLowerCase()) ||

        route.driverName
          .toLowerCase()
          .includes(search.toLowerCase())
      );
    });
  }, [search]);

  const renderItem = useCallback(
    ({ item }: { item: RouteItem }) => (
      <ItemCard item={item} />
    ),
    []
  );

  const renderEmptyComponent = useCallback(() => {
    return (
      <Text style={styles.emptyText}>
        No se encontraron rutas
      </Text>
    );
  }, []);

  return (
    <TouchableWithoutFeedback
      onPress={Keyboard.dismiss}
    >
      <KeyboardAvoidingView
        style={styles.container}
        behavior={
          Platform.OS === 'ios'
            ? 'padding'
            : undefined
        }
      >
        <Text style={styles.title}>
          Rutas de Transporte Escolar
        </Text>

        <TextInput
          placeholder='Buscar ruta o conductor'
          value={search}
          onChangeText={setSearch}
          style={styles.input}
          placeholderTextColor={COLORS.gray}
        />

        <FlatList
          data={filteredRoutes}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          ListEmptyComponent={
            renderEmptyComponent
          }
          ItemSeparatorComponent={() => (
            <View style={styles.separator} />
          )}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: 40,
          }}
        />
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    padding: SPACING.md,
  },

  title: {
    fontSize: TYPOGRAPHY.title,
    fontWeight: 'bold',
    color: COLORS.secondary,
    marginBottom: SPACING.md,
  },

  input: {
    backgroundColor: COLORS.white,
    borderRadius: 10,
    paddingHorizontal: SPACING.md,
    paddingVertical: SPACING.sm,
    marginBottom: SPACING.md,
    fontSize: TYPOGRAPHY.body,
  },

  separator: {
    height: SPACING.sm,
  },

  emptyText: {
    textAlign: 'center',
    marginTop: SPACING.xl,
    fontSize: TYPOGRAPHY.body,
    color: COLORS.gray,
  },
});