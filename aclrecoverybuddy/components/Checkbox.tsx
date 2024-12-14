import React, { useState } from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface CheckboxProps {
  label: string;
  onValueChange?: (value: boolean) => void;
}

export const Checkbox = ({ label, onValueChange }: CheckboxProps) => {
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheckbox = () => {
    const newValue = !isChecked;
    setIsChecked(newValue);
    if (onValueChange) {
      onValueChange(newValue); // Call the parent function if provided
    }
  };

  return (
    <TouchableOpacity onPress={toggleCheckbox} style={styles.container}>
      <View style={[styles.checkbox, isChecked && styles.checked]}>
        {isChecked && (
          <Ionicons name="checkmark" size={20} color="white" />
        )}
      </View>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderWidth: 2,
    borderColor: '#007bff',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  checked: {
    backgroundColor: '#007bff',
  },
  label: {
    fontSize: 16,
    color: '#333',
  },
});
