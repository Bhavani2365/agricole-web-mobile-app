'use client';

import { View, Text } from 'react-native';
import { colors } from '@/lib/colors';
import type { Review } from '@/lib/types';
import { Star } from 'lucide-react';

interface Props {
  review: Review;
}

export function ReviewCard({ review }: Props) {
  return (
    <View
      style={{
        backgroundColor: colors.surface,
        borderRadius: 12,
        padding: 16,
        marginRight: 12,
        borderWidth: 1,
        borderColor: colors.border,
        width: 280,
      }}
    >
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          marginBottom: 12,
        }}
      >
        <View>
          <Text
            style={{
              fontSize: 14,
              fontWeight: '600',
              color: colors.text_primary,
              marginBottom: 4,
            }}
          >
            {review.userName}
          </Text>
          <Text
            style={{
              fontSize: 12,
              color: colors.text_secondary,
            }}
          >
            {review.date}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            gap: 2,
          }}
        >
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              size={16}
              color={i < review.rating ? colors.rating_star : colors.border}
              fill={i < review.rating ? colors.rating_star : 'none'}
            />
          ))}
        </View>
      </View>

      <Text
        style={{
          fontSize: 13,
          color: colors.text_secondary,
          lineHeight: 20,
        }}
        numberOfLines={3}
      >
        {review.comment}
      </Text>
    </View>
  );
}
