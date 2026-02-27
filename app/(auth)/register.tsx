'use client';

import { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import { useRouter } from 'expo-router';
import { useAuth } from '@/lib/auth-context';
import { colors } from '@/lib/colors';
import { Leaf } from 'lucide-react';

export default function RegisterScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { register } = useAuth();
  const router = useRouter();

  const handleRegister = async () => {
    if (!name || !email || !password) {
      setError('All fields are required');
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const success = await register(email, password, name);
      if (success) {
        router.replace('/(main)/home');
      } else {
        setError('Registration failed');
      }
    } catch {
      setError('Registration failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
        backgroundColor: colors.background,
        paddingHorizontal: 20,
        paddingVertical: 40,
      }}
    >
      <View style={{ alignItems: 'center', marginBottom: 40 }}>
        <View
          style={{
            width: 60,
            height: 60,
            backgroundColor: colors.primary,
            borderRadius: 30,
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 16,
          }}
        >
          <Leaf size={32} color={colors.icon_light} strokeWidth={2} />
        </View>
        <Text
          style={{
            fontSize: 32,
            fontWeight: '700',
            color: colors.primary,
            marginBottom: 8,
          }}
        >
          Agricole
        </Text>
        <Text
          style={{
            fontSize: 14,
            color: colors.text_secondary,
            textAlign: 'center',
          }}
        >
          Create your account
        </Text>
      </View>

      <View style={{ marginBottom: 20 }}>
        <Text
          style={{
            fontSize: 14,
            fontWeight: '600',
            color: colors.text_primary,
            marginBottom: 8,
          }}
        >
          Full Name
        </Text>
        <TextInput
          placeholder="Enter your name"
          value={name}
          onChangeText={setName}
          placeholderTextColor={colors.text_disabled}
          style={{
            borderWidth: 1,
            borderColor: colors.border,
            borderRadius: 8,
            paddingHorizontal: 12,
            paddingVertical: 10,
            fontSize: 14,
            color: colors.text_primary,
            backgroundColor: colors.surface,
          }}
          editable={!loading}
        />
      </View>

      <View style={{ marginBottom: 20 }}>
        <Text
          style={{
            fontSize: 14,
            fontWeight: '600',
            color: colors.text_primary,
            marginBottom: 8,
          }}
        >
          Email
        </Text>
        <TextInput
          placeholder="Enter your email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          placeholderTextColor={colors.text_disabled}
          style={{
            borderWidth: 1,
            borderColor: colors.border,
            borderRadius: 8,
            paddingHorizontal: 12,
            paddingVertical: 10,
            fontSize: 14,
            color: colors.text_primary,
            backgroundColor: colors.surface,
          }}
          editable={!loading}
        />
      </View>

      <View style={{ marginBottom: 30 }}>
        <Text
          style={{
            fontSize: 14,
            fontWeight: '600',
            color: colors.text_primary,
            marginBottom: 8,
          }}
        >
          Password
        </Text>
        <TextInput
          placeholder="Enter your password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          placeholderTextColor={colors.text_disabled}
          style={{
            borderWidth: 1,
            borderColor: colors.border,
            borderRadius: 8,
            paddingHorizontal: 12,
            paddingVertical: 10,
            fontSize: 14,
            color: colors.text_primary,
            backgroundColor: colors.surface,
          }}
          editable={!loading}
        />
      </View>

      {error ? (
        <View
          style={{
            backgroundColor: colors.error + '20',
            borderRadius: 8,
            paddingHorizontal: 12,
            paddingVertical: 10,
            marginBottom: 20,
          }}
        >
          <Text
            style={{
              color: colors.error,
              fontSize: 14,
            }}
          >
            {error}
          </Text>
        </View>
      ) : null}

      <TouchableOpacity
        onPress={handleRegister}
        disabled={loading}
        style={{
          backgroundColor: loading ? colors.button_disabled : colors.primary,
          borderRadius: 8,
          paddingVertical: 14,
          alignItems: 'center',
          marginBottom: 16,
        }}
      >
        {loading ? (
          <ActivityIndicator color={colors.text_primary} />
        ) : (
          <Text
            style={{
              color: colors.icon_light,
              fontSize: 16,
              fontWeight: '600',
            }}
          >
            Create Account
          </Text>
        )}
      </TouchableOpacity>

      <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
        <Text style={{ color: colors.text_secondary, fontSize: 14 }}>
          Already have an account?{' '}
        </Text>
        <TouchableOpacity onPress={() => router.push('/(auth)/login')}>
          <Text
            style={{
              color: colors.primary,
              fontSize: 14,
              fontWeight: '600',
            }}
          >
            Sign In
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
