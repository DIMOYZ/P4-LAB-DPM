import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ScoreBoard from './src/ScoreBoard';
import ScoreControl from './src/ScoreControl';
import ResetButton from './src/ResetButton';

export default function App() {
  const [scoreA, setScoreA] = useState(0);
  const [scoreB, setScoreB] = useState(0);
  const teamA = "Team A";
  const teamB = "Team B";

  const incrementScore = (team: 'A' | 'B') => {
    if (team === 'A') {
      setScoreA(prev => Math.min(prev + 1, 10));
    } else {
      setScoreB(prev => Math.min(prev + 1, 10));
    }
  };

  const decrementScore = (team: 'A' | 'B') => {
    if (team === 'A') {
      setScoreA(prev => Math.max(prev - 1, 0));
    } else {
      setScoreB(prev => Math.max(prev - 1, 0));
    }
  };

  const resetScores = () => {
    setScoreA(0);
    setScoreB(0);
  };

  const getWinner = () => {
    if (scoreA === 10) return teamA;
    if (scoreB === 10) return teamB;
    return null;
  };

  const winner = getWinner();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Futsal Score Keeper</Text>
      <ScoreBoard teamA={teamA} teamB={teamB} scoreA={scoreA} scoreB={scoreB} />
      <View style={styles.controlsContainer}>
        <ScoreControl 
          team="A"
          onIncrement={() => incrementScore('A')}
          onDecrement={() => decrementScore('A')}
        />
        <ScoreControl 
          team="B"
          onIncrement={() => incrementScore('B')}
          onDecrement={() => decrementScore('B')}
        />
      </View>
      <ResetButton onReset={resetScores} />
      {winner && <Text style={styles.winnerText}>{winner} wins!</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  controlsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 20,
  },
  winnerText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    color: 'green',
  },
});

