'use client';

import { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Modal,
  TextInput,
  ActivityIndicator,
} from 'react-native';
import { useAuth } from '@/lib/auth-context';
import { colors } from '@/lib/colors';
import { PlantCard } from '@/components/PlantCard';
import { mockPlants } from '@/lib/mock/plants';
import { Plus, X } from 'lucide-react';
import type { Plant } from '@/lib/types';

export default function MyPlantsScreen() {
  const { user } = useAuth();
  const [plants] = useState<Plant[]>(mockPlants);
  const [showAddDialog, setShowAddDialog] = useState(false);
  const [newPlantName, setNewPlantName] = useState('');
  const [loading, setLoading] = useState(false);

  const handleAddPlant = async () => {
    if (!newPlantName.trim()) return;

    setLoading(true);
    // Simulate adding plant
    setTimeout(() => {
      setNewPlantName('');
      setShowAddDialog(false);
      setLoading(false);
    }, 1000);
  };

  return (
    <View style={{ flex: 1, backgroundColor: colors.background }}>
      {/* Header */}
      <View
        style={{
          paddingHorizontal: 20,
          paddingVertical: 20,
          paddingTop: 16,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <View>
          <Text
            style={{
              fontSize: 14,
              color: colors.text_secondary,
              marginBottom: 4,
            }}
          >
            My Plants
          </Text>
          <Text
            style={{
              fontSize: 28,
              fontWeight: '700',
              color: colors.primary,
            }}
          >
            {plants.length}
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => setShowAddDialog(true)}
          style={{
            width: 56,
            height: 56,
            backgroundColor: colors.primary,
            borderRadius: 28,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Plus size={24} color={colors.icon_light} strokeWidth={2} />
        </TouchableOpacity>
      </View>

      {/* Plants Grid */}
      <FlatList
        data={plants}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 120,
          gap: 12,
        }}
        columnWrapperStyle={{ gap: 12 }}
        renderItem={({ item }) => <PlantCard plant={item} />}
        scrollEnabled={false}
      />

      {/* Add Plant Modal */}
      <Modal
        visible={showAddDialog}
        transparent
        animationType="fade"
        onRequestClose={() => !loading && setShowAddDialog(false)}
      >
        <View
          style={{
            flex: 1,
            backgroundColor: colors.overlay,
            justifyContent: 'flex-end',
          }}
        >
          <View
            style={{
              backgroundColor: colors.surface,
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
              padding: 20,
              paddingBottom: 40,
            }}
          >
            {/* Header */}
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: 20,
              }}
            >
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: '700',
                  color: colors.text_primary,
                }}
              >
                Add New Plant
              </Text>
              <TouchableOpacity
                onPress={() => setShowAddDialog(false)}
                disabled={loading}
              >
                <X size={24} color={colors.text_primary} strokeWidth={2} />
              </TouchableOpacity>
            </View>

            {/* Input */}
            <View style={{ marginBottom: 20 }}>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: '600',
                  color: colors.text_primary,
                  marginBottom: 8,
                }}
              >
                Plant Name
              </Text>
              <TextInput
                placeholder="Enter plant name"
                value={newPlantName}
                onChangeText={setNewPlantName}
                placeholderTextColor={colors.text_disabled}
                style={{
                  borderWidth: 1,
                  borderColor: colors.border,
                  borderRadius: 8,
                  paddingHorizontal: 12,
                  paddingVertical: 10,
                  fontSize: 14,
                  color: colors.text_primary,
                  backgroundColor: colors.background,
                }}
                editable={!loading}
              />
            </View>

            {/* Button */}
            <TouchableOpacity
              onPress={handleAddPlant}
              disabled={loading || !newPlantName.trim()}
              style={{
                backgroundColor:
                  loading || !newPlantName.trim()
                    ? colors.button_disabled
                    : colors.primary,
                borderRadius: 8,
                paddingVertical: 12,
                alignItems: 'center',
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
                  Add Plant
                </Text>
              )}
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}
