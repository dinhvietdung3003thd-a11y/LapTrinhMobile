import React, { useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  TextInput, 
  TouchableOpacity, 
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard 
} from 'react-native';

export default function App() {
  const [phoneNumber, setPhoneNumber] = useState('');

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={styles.container}>
        {}
        <KeyboardAvoidingView 
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.inner}
        >
          <View style={styles.topContent}>
            <View style={styles.header}>
              <Text style={styles.title}>Đăng nhập</Text>
            </View>

            <View style={styles.content}>
              <Text style={styles.subtitle}>Nhập số điện thoại</Text>
              <Text style={styles.description}>
                Dùng số điện thoại để đăng nhập hoặc đăng ký tài khoản tại OneHousing Pro
              </Text>
              
              <TextInput
                style={styles.input}
                placeholder="Nhập số điện thoại của bạn"
                keyboardType="phone-pad"
                returnKeyType="done" 
                value={phoneNumber}
                onChangeText={setPhoneNumber}
                autoFocus={false} 
              />
            </View>
          </View>

          {}
          <View style={styles.bottomContent}>
            <TouchableOpacity 
              style={[
                styles.button, 
                { backgroundColor: phoneNumber.length >= 10 ? '#10b981' : '#F5F5F5' }
              ]}
              disabled={phoneNumber.length < 10}
            >
              <Text style={[
                styles.buttonText, 
                { color: phoneNumber.length >= 10 ? '#fff' : '#9E9E9E' }
              ]}>
                Tiếp tục
              </Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  inner: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'space-between', 
  },
  topContent: {
    flex: 1,
  },
  header: {
    marginTop: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
    paddingBottom: 15,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  content: {
    marginTop: 40,
  },
  subtitle: {
    fontSize: 22,
    fontWeight: '500',
    marginBottom: 15,
  },
  description: {
    fontSize: 15,
    color: '#4A4A4A',
    lineHeight: 22,
    marginBottom: 30,
  },
  input: {
    fontSize: 18,
    borderBottomWidth: 1,
    borderBottomColor: '#10b981', 
    paddingVertical: 10,
  },
  bottomContent: {
    paddingBottom: 20, 
  },
  button: {
    height: 50,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
  },
});