import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';

export default function StretchesScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Stretching Routines</Text>
      </View>

      <Text style={styles.sectionTitle}>Dynamic Warm-up</Text>
      <TouchableOpacity style={styles.card}>
        <Text style={styles.cardTitle}>Pre-Workout Mobility</Text>
        <Text style={styles.duration}>~5-10 minutes</Text>
      </TouchableOpacity>

      <Text style={styles.sectionTitle}>Static Cool-down</Text>
      <TouchableOpacity style={styles.card}>
        <Text style={styles.cardTitle}>Full Body Stretch</Text>
        <Text style={styles.duration}>~10-15 minutes</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.card}>
        <Text style={styles.cardTitle}>Lower Body Focus</Text>
        <Text style={styles.duration}>~8-12 minutes</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.card}>
        <Text style={styles.cardTitle}>Upper Body Focus</Text>
        <Text style={styles.duration}>~8-12 minutes</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a',
  },
  header: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FF6B00',
    marginLeft: 15,
    marginTop: 15,
    marginBottom: 10,
  },
  card: {
    margin: 15,
    marginTop: 0,
    padding: 15,
    backgroundColor: '#262626',
    borderRadius: 10,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  duration: {
    fontSize: 12,
    color: '#888',
    marginTop: 8,
  },
});
