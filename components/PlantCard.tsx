'use client';

import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { colors } from '@/lib/colors';
import type { Plant } from '@/lib/types';
import { ChevronRight } from 'lucide-react';

interface Props {
  plant: Plant;
}

export function PlantCard({ plant }: Props) {
  const router = useRouter();

  const handlePress = () => {
    router.push({
      pathname: '/(main)/my-plants/[id]',
      params: { id: plant.id },
    });
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      style={{
        backgroundColor: colors.surface,
        borderRadius: 12,
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: colors.border,
      }}
    >
      <Image
        source={{ uri: plant.image }}
        style={{
          width: '100%',
          height: 160,
        }}
      />
      <View style={{ padding: 12 }}>
        <Text
          style={{
            fontSize: 16,
            fontWeight: '700',
            color: colors.text_primary,
            marginBottom: 4,
          }}
        >
          {plant.name}
        </Text>
        <Text
          style={{
            fontSize: 12,
            color: colors.text_secondary,
            marginBottom: 12,
          }}
          numberOfLines={2}
        >
          {plant.description}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <View
            style={{
              backgroundColor: colors.primary + '10',
              paddingHorizontal: 8,
              paddingVertical: 4,
              borderRadius: 4,
            }}
          >
            <Text
              style={{
                fontSize: 11,
                color: colors.primary,
                fontWeight: '600',
              }}
            >
              {plant.difficulty}
            </Text>
          </View>
          <ChevronRight size={18} color={colors.primary} strokeWidth={2} />
        </View>
      </View>
    </TouchableOpacity>
  );
}
