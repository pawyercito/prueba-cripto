import { useState, useEffect } from 'react';
import { Box, Button, ChakraProvider, extendTheme, Flex, Heading, Text, useColorMode } from '@chakra-ui/react';
import ColorModeSwitcher from '../components/ColorModeSwitcher';
import { VaultDetails, AboutStrategy } from '../components/Tabs';
import NavBar from '../components/NavBar';

const theme = extendTheme({
  config: {
    useSystemColorMode: false,
    initialColorMode: 'light',
  },
});

const Home = () => {
  const [currentTab, setCurrentTab] = useState('VaultDetails');
  const { colorMode, toggleColorMode } = useColorMode();
  const [balance, setBalance] = useState(0);
  const [autoCompoundCount, setAutoCompoundCount] = useState(0);

  useEffect(() => {
    // Simulación de carga de datos del balance y contador de auto-compound
    setTimeout(() => {
      setBalance(1000); // Actualiza el valor del balance
      setAutoCompoundCount(10); // Actualiza el contador de auto-compound
    }, 2000);
  }, []);

  const handleTabChange = (tab: string) => {
    setCurrentTab(tab);
  };

  return (
    <ChakraProvider theme={theme}>
      <NavBar /> {/* Agrega el componente NavBar */}
      <Box p={4}>
        <Flex justify="space-between" align="center" mb={4}>
          <Heading as="h1" size="lg">
            My App
          </Heading>
          <ColorModeSwitcher />
        </Flex>
        <Flex justifyContent="center" alignItems="flex-start" flexWrap="wrap">
          <Box
            flex={1}
            p={6}
            borderWidth={1}
            borderRadius="md"
            bg="#050c2b"
            color="white"
            mr={2}
            position="relative"
            height="24rem"
            width="45%"
          >
            <Text fontSize="1.4rem" fontWeight={500} letterSpacing=".1rem" color="var(--text-grey)" position="absolute" top={4} right={4}>
              auto-compound
            </Text>
            <Text fontSize="lg" fontWeight="bold" mb={2}>
              Deposit
            </Text>
            <Text fontSize="md" mb={2}>
              Balance: {balance} ETH
            </Text>
            <Flex justifyContent="center" alignItems="flex-start" flexDirection="column">
              <Flex justifyContent="space-between" width="100%" mb={2}>
                <Button
                  colorScheme="white"
                  variant="outline"
                  borderRadius="xl"
                  width="48%"
                >
                  ENTER AMOUNT
                </Button>
                <Button
                  colorScheme="white"
                  variant="outline"
                  borderRadius="xl"
                  width="15%"
                  size="sm"
                  height="20"
                >
                  MAX
                </Button>
              </Flex>
            </Flex>
            <Button
              mt={4}
              width="50%"
              borderRadius="full"
              colorScheme="white"
              variant="outline"
              height="20"
            >
              Deposit
            </Button>
            <Box
              position="absolute"
              right={-16}
              top="50%"
              transform="translateY(-50%)"
              width="3rem"
              height="3rem"
              bg="#050c2b"
              borderRadius="full"
              display="flex"
              justifyContent="center"
              alignItems="center"
              zIndex={1}
            >
              <Text color="white" fontSize="2xl" fontWeight="bold">
                &gt;
              </Text>
            </Box>
          </Box>
          <Box
            flex={1}
            p={6}
            borderWidth={1}
            borderRadius="md"
            ml={2}
            height="24rem"
            width="45%"
          >
            {currentTab === 'AboutStrategy' && <AboutStrategy />}
          </Box>
        </Flex>
        <Flex direction="column" mt={4}>
          <Button onClick={() => handleTabChange('VaultDetails')} variant={currentTab === 'VaultDetails' ? 'solid' : 'outline'}>
            Vault Details {/* Cambia "Deposit" por "Vault Details" */}
          </Button>
          <Button onClick={() => handleTabChange('AboutStrategy')} variant={currentTab === 'AboutStrategy' ? 'solid' : 'outline'}>
            About Strategy
          </Button>
        </Flex>
      </Box>
    </ChakraProvider>
  );
};

export default Home;
