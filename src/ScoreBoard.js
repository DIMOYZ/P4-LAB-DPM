import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface ScoreBoardProps {
  teamA: string;
  teamB: string;
  scoreA: number;
  scoreB: number;
}

const ScoreBoard: React.FC<ScoreBoardProps> = ({ teamA, teamB, scoreA, scoreB }) => {
  return (
    <View style={styles.container}>
      <View style={styles.teamContainer}>
        <Text style={styles.teamName}>{teamA}</Text>
        <Text style={styles.score}>{scoreA}</Text>
      </View>
      <Text style={styles.vs}>VS</Text>
      <View style={styles.teamContainer}>
        <Text style={styles.teamName}>{teamB}</Text>
        <Text style={styles.score}>{scoreB}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    marginBottom: 20,
  },
  teamContainer: {
    alignItems: 'center',
  },
  teamName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  score: {
    fontSize: 36,
    fontWeight: 'bold',
  },
  vs: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ScoreBoard;

