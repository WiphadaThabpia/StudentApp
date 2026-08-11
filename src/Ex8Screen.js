import { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

// ========== ใบงาน ข้อ 8: แยก vs รวม state ==========
const Ex8Screen = ({ navigation }) => {
  // ===== STATE เติมเอง() =====
  // แบบแยก:
  // (1) ประกาศ loading (boolean, false), error (null), data (null) เป็น 3 state แยกกัน
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  // แบบรวม:
  // (2) ประกาศ status เป็นออบเจกต์เดียว { loading: false, error: null, data: null }
  const [status, setStatus] = useState({
  loading: false,
  error: null,
  data: null,
  });

  // (3) loadSeparate: ตั้ง loading=true, error=null, data=null แล้วหลัง 800ms
  // สุ่มผลสำเร็จ/ล้มเหลว ตั้ง loading=false และ setData/setError ตามผล
  const loadSeparate = () => {
    setLoading(true);
    setError(null);
    setData(null);

    setTimeout(() => {
      const success = Math.random() > 0.5;

      setLoading(false);

      if (success) {
        setData('โหลดข้อมูลสำเร็จ');
      } else {
        setError('เกิดข้อผิดพลาด');
      }
    }, 800);
  };

  // (4) loadCombined: ตั้ง status ทั้งชุดเป็นกำลังโหลด แล้วหลัง 800ms
  // ตั้ง status ใหม่ทั้งก้อนตามผล เปลี่ยนพร้อมกันในครั้งเดียว()
  const loadCombined = () => {
    setStatus({
    loading: true,
    error: null,
    data: null,
  });

  setTimeout(() => {
    const success = Math.random() > 0.5;

    if (success) {
      setStatus({
        loading: false,
        error: null,
        data: 'โหลดข้อมูลสำเร็จ',
      });
    } else {
      setStatus({
        loading: false,
        error: 'เกิดข้อผิดพลาด',
        data: null,
      });
    }
  }, 800);
  };

  return (
    <View style={s.container}>
      <View style={s.panel}>
        <Text style={s.panelTitle}>แบบแยก (3 state)</Text>

        {/* (5) แสดงข้อความตามสถานะ: loading / error / data / ยังไม่โหลด */}
        <Text style={s.result}> 
          {loading && 'กำลังโหลด'}
          {error && error}
          {data && data}
          {!loading && !error && !data && 'ยังไม่โหลด'} </Text>

        <TouchableOpacity style={s.btn} onPress={loadSeparate}>
          <Text style={s.btnText}>โหลดข้อมูล</Text>
        </TouchableOpacity>
      </View>

      <View style={s.panel}>
        <Text style={s.panelTitle}>แบบรวม (1 object)</Text>

        {/* (6) แสดงข้อความตาม status.loading / status.error / status.data / ยังไม่โหลด */}
        <Text style={s.result}>
           {status.loading && 'กำลังโหลด...'}
           {status.error && status.error}
           {status.data && status.data}
           {!status.loading &&
           !status.error &&
           !status.data &&
           'ยังไม่โหลด'}
        </Text>

        <TouchableOpacity style={s.btn} onPress={loadCombined}>
          <Text style={s.btnText}>โหลดข้อมูล</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

}
// ===== STYLE เติมเอง() =====
const s = StyleSheet.create({
  container: { /* ระยะขอบใน 20, เว้นช่องระหว่างลูก 14 */ 
    padding: 20,
    gap: 14,
  },
  panel: { /* พื้น '#161b22', เส้นขอบ 1 สี '#30363d', มุมโค้ง 12, ขอบใน 16, เว้นช่อง 10 */ 
    backgroundColor: '#161b22',
    borderWidth: 1,
    borderColor: '#30363d',
    borderRadius: 12,
    padding: 16,
    gap: 10,
  },
  panelTitle: { /* สีฟ้า '#61dafb', ขนาด 16, ตัวหนา 700 */ 
    color: '#61dafb',
    fontSize: 16,
    fontWeight: '700',
  },
  result: { /* สี '#c9d1d9', ขนาด 18, ตัวหนา 600 */ 
    color: '#c9d1d9',
    fontSize: 18,
    fontWeight: '600',
  },
  btn: { /* พื้นสีเขียว '#238636', ขอบในบนล่าง 12, มุมโค้ง 10, จัดกลาง */ 
    backgroundColor: '#238636',
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
  },
  btnText: { /* สีขาว, ขนาด 15, ตัวหนา 600 */ 
    color: '#fff',
    fontSize: 15,
    fontWeight: '600',
  },
});

export default Ex8Screen;