'use client';

import { useState } from 'react';
import { View, Text, ScrollView, Image, Dimensions } from 'react-native';
import { colors } from '@/lib/colors';
import type { Plant } from '@/lib/types';

const { width } = Dimensions.get('window');

interface Props {
  plants: Plant[];
}

export function FeaturedCarousel({ plants }: Props) {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = (event: any) => {
    const x = event.nativeEvent.contentOffset.x;
    const index = Math.round(x / (width - 40));
    setActiveIndex(index);
  };

  return (
    <View style={{ marginBottom: 32 }}>
      <ScrollView
        horizontal
        scrollEventThrottle={32}
        onScroll={handleScroll}
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        contentContainerStyle={{ paddingHorizontal: 20 }}
      >
        {plants.slice(0, 3).map((plant) => (
          <View
            key={plant.id}
            style={{
              width: width - 40,
              marginRight: 16,
              backgroundColor: colors.surface,
              borderRadius: 12,
              overflow: 'hidden',
            }}
          >
            <Image
              source={{ uri: plant.image }}
              style={{
                width: '100%',
                height: 200,
              }}
            />
            <View style={{ padding: 16 }}>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: '700',
                  color: colors.text_primary,
                  marginBottom: 8,
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
                      fontSize: 12,
                      color: colors.primary,
                      fontWeight: '600',
                    }}
                  >
                    {plant.category}
                  </Text>
                </View>
                <Text
                  style={{
                    fontSize: 12,
                    color: colors.text_secondary,
                  }}
                >
                  {plant.difficulty}
                </Text>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          marginTop: 16,
          gap: 8,
        }}
      >
        {plants.slice(0, 3).map((_, index) => (
          <View
            key={index}
            style={{
              width: activeIndex === index ? 24 : 8,
              height: 8,
              backgroundColor:
                activeIndex === index ? colors.primary : colors.border,
              borderRadius: 4,
            }}
          />
        ))}
      </View>
    </View>
  );
}
