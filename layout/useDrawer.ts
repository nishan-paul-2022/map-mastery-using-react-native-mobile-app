import { useState, useRef } from 'react';
import { Animated, Dimensions } from 'react-native';

export default function useDrawer() {
  const [isOpen, setIsOpen] = useState(false);
  const animation = useRef(new Animated.Value(-Dimensions.get('window').width * 0.85)).current;

  const toggle = () => {
    Animated.timing(animation, {
      toValue: isOpen ? -Dimensions.get('window').width * 0.85 : 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
    setIsOpen(!isOpen);
  };

  return {
    isOpen,
    animation,
    toggle,
  };
}
