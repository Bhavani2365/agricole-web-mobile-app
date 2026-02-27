'use client';

import { View, Text, TouchableOpacity } from 'react-native';
import { colors } from '@/lib/colors';
import type { PlantCategory } from '@/lib/types';
import { Carrot, Sprout, Flower, Cherry, Sun, TreePine } from 'lucide-react';

const categories: { label: PlantCategory; icon: any }[] = [
  { label: 'Vegetables', icon: Carrot },
  { label: 'Herbs', icon: Sprout },
  { label: 'Flowers', icon: Flower },
  { label: 'Fruits', icon: Cherry },
  { label: 'Succulents', icon: Sun },
  { label: 'Trees', icon: TreePine },
];

interface Props {
  onSelectCategory: (category: PlantCategory) => void;
}

export function CategoryGrid({ onSelectCategory }: Props) {
  return (
    <View>
      <Text
        style={{
          fontSize: 18,
          fontWeight: '700',
          color: colors.text_primary,
          marginBottom: 16,
          marginHorizontal: 20,
        }}
      >
        Shop by Category
      </Text>
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          paddingHorizontal: 20,
          gap: 12,
        }}
      >
        {categories.map((cat) => {
          const IconComponent = cat.icon;
          return (
            <TouchableOpacity
              key={cat.label}
              onPress={() => onSelectCategory(cat.label)}
              style={{
                width: '30%',
                aspectRatio: 1,
                backgroundColor: colors.surface,
                borderRadius: 12,
                justifyContent: 'center',
                alignItems: 'center',
                borderWidth: 1,
                borderColor: colors.border,
              }}
            >
              <IconComponent size={24} color={colors.primary} strokeWidth={2} />
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: '600',
                  color: colors.text_primary,
                  marginTop: 8,
                  textAlign: 'center',
                }}
              >
                {cat.label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}
