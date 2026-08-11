import React,{ useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

// ========== ใบงาน ข้อ 2: Name Input (string) ==========
  const Ex2Screen = ({ navigation }) => {
  // ===== STATE เติมเอง() =====
  // (1) ประกาศ state ชื่อ name ชนิดข้อความ ค่าเริ่มต้นเป็นสตริงว่าง ''
  const [name, setName] = useState('');

  return (
    <View style={s.container}>
      <Text style={s.label}>ชื่อของคุณ</Text>
      <TextInput
        style={s.input}
        placeholder="พิมพ์ชื่อที่นี่..."
        placeholderTextColor="#6e7681"
        value={name} // (2) ผูกค่ากับ state name
        onChangeText={(text) => setName(text)} // (3) อัปเดต name ทุกครั้งที่พิมพ์
      />
      <View style={s.preview}>
        {/* (4) แสดง: สวัสดี ชื่อ<name> ครับ ถ้ายังว่างให้ขึ้น (...) */}
        <Text style={s.greet}>
          สวัสดี {name.trim() === '' ? '...' : name} ค่ะ
        </Text>
        {/* (5) แสดงจำนวนตัวอักษรของ name */}
        <Text style={s.meta}>
          จำนวนตัวอักษร: {name.length}
        </Text>

        {/* ปุ่มไปยัง Ex3 */}
        <TouchableOpacity
          style={[s.btn, s.ghost]}
          onPress={() => navigation.navigate('Ex3')}
        >
          <Text style={s.btnTextGhost}>ไปยัง Ex3</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

// ===== STYLE เติมเอง() =====
const s = StyleSheet.create({
  container: { /* ระยะขอบใน 20, เว้นช่องระหว่างลูก 8 */ 
    padding: 20,
    gap: 8,
  },
  label: { /* สี '#8b949e', ขนาด 14, เว้นล่าง 4 */ 
    color: '#8b949e',
    fontSize: 4,
    marginBottom: 4,
  },
  input: { /* เส้นขอบ 1 สี '#30363d', พื้น '#161b22', สีตัวอักษร '#c9d1d9', ขอบใน 14, มุมโค้ง 10, ขนาด 16 */ 
    borderWidth: 1,
    borderColor: '#30363d',
    backgroundColor: '#161b22',
    color: '#c9d1d9',
    borderRadius: 14,
    padding: 14,
    fontSize: 16,
  },
  preview: { /* เว้นบน 16, พื้น '#161b22', มุมโค้ง 10, ขอบใน 16, เส้นขอบ 1 สี '#30363d' */ 
    marginTop: 16,
    backgroundColor: '#161b22',
    borderRadius: 10,
    padding: 16,
    borderWidth: 1,
    borderColor: '#30363d',
  },
  greet: { /* สีฟ้า '#61dafb', ขนาด 20, ตัวหนา 700 */ 
    color: '#61dafb',
    fontSize: 20,
    fontWeight: '700',
  },
  meta: { /* สี '#8b949e', ขนาด 14, เว้นบน 6 */ 
    color: '#8b949e',
    fontSize: 14,
    marginTop: 6,
  },
  //3styleล่างนี้ คือ ปุ่มกดไปหน้าถัดไป
   btn: { 
    backgroundColor: '#d0d4da', 
    borderWidth: 1, 
    borderColor: '#c6cacf', 
    paddingVertical: 12, 
    paddingHorizontal: 24, 
    borderRadius: 10, 
    alignItems: 'center',
    justifyContent: 'center'
  },
  ghost: { 
    backgroundColor: 'transparent' 
  },
  btnTextGhost: { 
    color: '#8b949e', 
    fontSize: 16, 
    fontWeight: '600' 
  },
});
export default Ex2Screen