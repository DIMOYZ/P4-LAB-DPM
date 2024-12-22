import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface ScoreControlProps {
  team: 'A' | 'B';
  onIncrement: () => void;
  onDecrement: () => void;
}

const ScoreControl: React.FC<ScoreControlProps> = ({ team, onIncrement, onDecrement }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.teamLabel}>Team {team}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={onDecrement}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={onIncrement}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  teamLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  button: {
    backgroundColor: '#007AFF',
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    marginHorizontal: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default ScoreControl;

