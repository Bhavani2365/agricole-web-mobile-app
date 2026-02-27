'use client';

import { View, Text, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { useAuth } from '@/lib/auth-context';
import { colors } from '@/lib/colors';
import { FeaturedCarousel } from '@/components/FeaturedCarousel';
import { CategoryGrid } from '@/components/CategoryGrid';
import { ReviewCard } from '@/components/ReviewCard';
import { mockPlants } from '@/lib/mock/plants';
import { mockReviews } from '@/lib/mock/reviews';
import type { PlantCategory } from '@/lib/types';

export default function HomeScreen() {
  const { user } = useAuth();
  const router = useRouter();

  const handleSelectCategory = (category: PlantCategory) => {
    // Navigate to marketplace with selected category
    router.push({
      pathname: '/(main)/marketplace',
      params: { category },
    });
  };

  const recentReviews = mockReviews.slice(0, 5);

  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: colors.background }}
      contentContainerStyle={{ paddingVertical: 20 }}
      showsVerticalScrollIndicator={false}
    >
      {/* Header */}
      <View style={{ paddingHorizontal: 20, marginBottom: 24 }}>
        <Text
          style={{
            fontSize: 14,
            color: colors.text_secondary,
            marginBottom: 4,
          }}
        >
          Welcome back,
        </Text>
        <Text
          style={{
            fontSize: 28,
            fontWeight: '700',
            color: colors.primary,
          }}
        >
          {user?.name || 'Gardener'}!
        </Text>
      </View>

      {/* Featured Plants */}
      <FeaturedCarousel plants={mockPlants} />

      {/* Categories */}
      <View style={{ marginBottom: 32 }}>
        <CategoryGrid onSelectCategory={handleSelectCategory} />
      </View>

      {/* Recent Reviews */}
      <View style={{ paddingHorizontal: 20 }}>
        <Text
          style={{
            fontSize: 18,
            fontWeight: '700',
            color: colors.text_primary,
            marginBottom: 16,
          }}
        >
          Recent Reviews
        </Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingRight: 20 }}
        >
          {recentReviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </ScrollView>
      </View>

      {/* Footer Spacing */}
      <View style={{ height: 40 }} />
    </ScrollView>
  );
}
