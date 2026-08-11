import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

// ========== ใบงาน ข้อ 1: Counter (number) ==========
const Ex1Screen = ({ navigation }) => {
  // ===== STATE =====
  const [count, setCount] = useState(0);

  return (
    <View style={s.container}>
      <StatusBar style="auto" />

      <Text style={s.number}>{count}</Text>

      <TouchableOpacity
        style={s.btn}
        onPress={() => setCount(count - 1)}
      >
        <Text style={s.btnText}>- ลด</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[s.btn, s.primary]}
        onPress={() => setCount(count + 1)}
      >
        <Text style={s.btnText}>+ เพิ่ม</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[s.btn, s.ghost]}
        onPress={() => setCount(0)}
      >
        <Text style={s.btnTextGhost}>รีเซ็ต</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[s.btn, s.ghost]}
        onPress={() => navigation.navigate('Ex2')}
      >
        <Text style={s.btnTextGhost}>ไป Ex2</Text>
      </TouchableOpacity>
    </View>
  );
};

// ===== STYLE =====
const s = StyleSheet.create({
  container: { 
    padding: 20, 
    alignItems: 'center', 
    gap: 14 
  },
  number: { 
    fontSize: 72, 
    fontWeight: '800', 
    color: '#61dafb', 
    marginVertical: 20 
  },
  row: { 
    flexDirection: 'row', 
    gap: 12 
  },

  btn: {
    backgroundColor: '#21262d',
    borderWidth: 1,
    borderColor: '#30363d',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 10,
    minWidth: 110,
    alignItems: 'center',
  },

  primary: {
    backgroundColor: '#238636',
    borderColor: '#238636',
  },

  ghost: {
    backgroundColor: 'transparent',
  },

  btnText: {
    color: '#c9d1d9',
    fontSize: 16,
    fontWeight: '600',
  },

  btnTextGhost: {
    color: '#8b949e',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default Ex1Screen