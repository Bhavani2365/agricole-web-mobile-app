'use client';

import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { colors } from '@/lib/colors';
import { mockPlants } from '@/lib/mock/plants';
import { mockReviews } from '@/lib/mock/reviews';
import { ReviewCard } from '@/components/ReviewCard';
import { Droplets, Sun, AlertCircle, ChevronLeft } from 'lucide-react';

export default function PlantDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  const plant = mockPlants.find((p) => p.id === id);
  const plantReviews = mockReviews.filter((r) => r.targetId === id);

  if (!plant) {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: colors.background,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text style={{ color: colors.text_primary }}>Plant not found</Text>
      </View>
    );
  }

  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: colors.background }}
      showsVerticalScrollIndicator={false}
    >
      {/* Header with Back Button */}
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: 20,
          paddingTop: 16,
          paddingBottom: 16,
          backgroundColor: colors.surface,
          borderBottomWidth: 1,
          borderBottomColor: colors.border,
        }}
      >
        <TouchableOpacity onPress={() => router.back()} style={{ padding: 8 }}>
          <ChevronLeft size={24} color={colors.text_primary} strokeWidth={2} />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 18,
            fontWeight: '700',
            color: colors.text_primary,
            marginLeft: 12,
            flex: 1,
          }}
        >
          Plant Details
        </Text>
      </View>

      {/* Plant Image */}
      <Image
        source={{ uri: plant.image }}
        style={{
          width: '100%',
          height: 280,
        }}
      />

      {/* Plant Info */}
      <View style={{ padding: 20 }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            marginBottom: 16,
          }}
        >
          <View style={{ flex: 1 }}>
            <Text
              style={{
                fontSize: 28,
                fontWeight: '700',
                color: colors.text_primary,
                marginBottom: 8,
              }}
            >
              {plant.name}
            </Text>
            <View
              style={{
                flexDirection: 'row',
                gap: 8,
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
              <View
                style={{
                  backgroundColor: colors.success + '10',
                  paddingHorizontal: 8,
                  paddingVertical: 4,
                  borderRadius: 4,
                }}
              >
                <Text
                  style={{
                    fontSize: 12,
                    color: colors.success,
                    fontWeight: '600',
                  }}
                >
                  {plant.difficulty}
                </Text>
              </View>
            </View>
          </View>
        </View>

        <Text
          style={{
            fontSize: 14,
            color: colors.text_secondary,
            lineHeight: 22,
            marginBottom: 24,
          }}
        >
          {plant.description}
        </Text>

        {/* Care Info */}
        <View
          style={{
            backgroundColor: colors.surface,
            borderRadius: 12,
            padding: 16,
            marginBottom: 24,
            borderWidth: 1,
            borderColor: colors.border,
          }}
        >
          <Text
            style={{
              fontSize: 16,
              fontWeight: '700',
              color: colors.text_primary,
              marginBottom: 16,
            }}
          >
            Care Guide
          </Text>

          <View style={{ gap: 16 }}>
            {/* Watering */}
            <View style={{ flexDirection: 'row', gap: 12 }}>
              <View
                style={{
                  width: 48,
                  height: 48,
                  backgroundColor: colors.primary + '10',
                  borderRadius: 8,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Droplets size={24} color={colors.primary} strokeWidth={2} />
              </View>
              <View style={{ flex: 1 }}>
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: '600',
                    color: colors.text_primary,
                    marginBottom: 4,
                  }}
                >
                  Watering
                </Text>
                <Text
                  style={{
                    fontSize: 13,
                    color: colors.text_secondary,
                  }}
                >
                  {plant.wateringFrequency}
                </Text>
              </View>
            </View>

            {/* Sunlight */}
            <View style={{ flexDirection: 'row', gap: 12 }}>
              <View
                style={{
                  width: 48,
                  height: 48,
                  backgroundColor: colors.warning + '10',
                  borderRadius: 8,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Sun size={24} color={colors.warning} strokeWidth={2} />
              </View>
              <View style={{ flex: 1 }}>
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: '600',
                    color: colors.text_primary,
                    marginBottom: 4,
                  }}
                >
                  Sunlight
                </Text>
                <Text
                  style={{
                    fontSize: 13,
                    color: colors.text_secondary,
                  }}
                >
                  {plant.sunlight}
                </Text>
              </View>
            </View>
          </View>
        </View>

        {/* Growth Stages */}
        <View style={{ marginBottom: 24 }}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: '700',
              color: colors.text_primary,
              marginBottom: 12,
            }}
          >
            Growth Timeline
          </Text>
          {plant.growthStages.map((stage, index) => (
            <View
              key={index}
              style={{
                flexDirection: 'row',
                marginBottom: 16,
                paddingLeft: 20,
              }}
            >
              <View
                style={{
                  position: 'absolute',
                  left: 0,
                  width: 12,
                  height: 12,
                  backgroundColor: colors.primary,
                  borderRadius: 6,
                  marginTop: 4,
                }}
              />
              <View style={{ flex: 1 }}>
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: '600',
                    color: colors.text_primary,
                    marginBottom: 4,
                  }}
                >
                  {stage.stage}
                </Text>
                <Text
                  style={{
                    fontSize: 13,
                    color: colors.text_secondary,
                    marginBottom: 4,
                  }}
                >
                  {stage.description}
                </Text>
                <Text
                  style={{
                    fontSize: 12,
                    color: colors.text_disabled,
                  }}
                >
                  {stage.duration}
                </Text>
              </View>
            </View>
          ))}
        </View>

        {/* Reviews */}
        {plantReviews.length > 0 && (
          <View>
            <Text
              style={{
                fontSize: 16,
                fontWeight: '700',
                color: colors.text_primary,
                marginBottom: 12,
              }}
            >
              Reviews
            </Text>
            {plantReviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </View>
        )}

        <View style={{ height: 40 }} />
      </View>
    </ScrollView>
  );
}
