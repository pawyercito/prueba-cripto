import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { IconButton, useColorMode, ColorMode } from '@chakra-ui/react';

const ColorModeSwitcher = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const SwitchIcon = colorMode === 'light' ? MoonIcon : SunIcon;

  return (
    <IconButton
      aria-label="Toggle color mode"
      icon={<SwitchIcon />}
      onClick={toggleColorMode}
      variant="ghost"
      colorScheme="teal"
      size="md"
      fontSize="lg"
    />
  );
};

export default ColorModeSwitcher;
