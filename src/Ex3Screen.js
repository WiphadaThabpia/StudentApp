import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Switch } from 'react-native';

const Ex3Screen = ({ navigation }) => {
  const [isDark, setIsDark] = useState(true);
  const [showSecret, setShowSecret] = useState(false);

  const bg = isDark ? '#0d1117' : '#ffffff';
  const fg = isDark ? '#c9d1d9' : '#111111';

  const borderGhostColor = isDark ? '#30363d' : '#cccccc';
  const textGhostColor = isDark ? '#8b949e' : '#555555';

  return (
    <ScrollView contentContainerStyle={[s.container, { backgroundColor: bg }]}>
      <View style={s.row}>
        <Text style={[s.text, { color: fg }]}>โหมดมืด (Dark Mode)</Text>
        <Switch
          value={isDark}
          onValueChange={(value) => setIsDark(value)}
        />
      </View>

      <TouchableOpacity style={s.btn} onPress={() => setShowSecret(!showSecret)}>
        <Text style={s.btnText}>{showSecret ? 'ซ่อนคำตอบ' : 'แสดงคำตอบ'}</Text>
      </TouchableOpacity>

      {showSecret && (
        <Text style={[s.secret, { color: fg }]}>คำตอบของทุกสรรพสิ่งคือ 42</Text>
      )}

      <TouchableOpacity
        style={[s.btnGhost, { borderColor: borderGhostColor, marginTop: 20 }]}
        onPress={() => navigation.navigate('Ex4')}
      >
        <Text style={[s.btnTextGhost, { color: textGhostColor }]}>ไปยัง Ex4</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const s = StyleSheet.create({
  container: {
    padding: 20,
    gap: 18,
    flexGrow: 1
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  text: {
    fontSize: 16
  },
  btn: {
    backgroundColor: '#238636',
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center'
  },
  btnText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600'
  },
  secret: {
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'center',
    marginTop: 4
  },
  btnGhost: {
    borderWidth: 1,
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent'
  },
  btnTextGhost: {
    fontSize: 16,
    fontWeight: '600'
  },
});

export default Ex3Screen;
