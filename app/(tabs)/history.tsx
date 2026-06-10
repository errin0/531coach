import { View, Text, ScrollView, StyleSheet } from 'react-native';

export default function HistoryScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Workout History</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.date}>Today</Text>
        <Text style={styles.workoutName}>Upper Power - Bench Press</Text>
        <View style={styles.stats}>
          <Text style={styles.stat}>5 exercises</Text>
          <Text style={styles.stat}>45 min</Text>
        </View>
      </View>

      <View style={styles.card}>
        <Text style={styles.date}>Yesterday</Text>
        <Text style={styles.workoutName}>Lower Power - Squat</Text>
        <View style={styles.stats}>
          <Text style={styles.stat}>6 exercises</Text>
          <Text style={styles.stat}>52 min</Text>
        </View>
      </View>
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
  card: {
    margin: 15,
    padding: 15,
    backgroundColor: '#262626',
    borderRadius: 10,
  },
  date: {
    fontSize: 12,
    color: '#888',
    marginBottom: 5,
  },
  workoutName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  stats: {
    flexDirection: 'row',
    gap: 15,
  },
  stat: {
    fontSize: 12,
    color: '#FF6B00',
  },
});
