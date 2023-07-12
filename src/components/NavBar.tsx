import { Box, Flex, IconButton, Link, Stack, Text, useColorModeValue, useDisclosure, Button } from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { useEffect, useState } from "react";
import { MenuItems } from "./MenuItems";

const NavBar = () => {
  const { isOpen, onToggle } = useDisclosure();
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
      const handleScroll = () => {
        const show = window.scrollY > 50;
        if (show) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      };
      
      document.addEventListener("scroll", handleScroll);
      return () => {
        document.removeEventListener("scroll", handleScroll);
      };
  }, []);

  return (
    <Box w={"100%"} bg={useColorModeValue("gray.100", "gray.900")} boxShadow={isScrolled ? '0px 2px 10px 0px rgba(0,0,0,0.1)' : 'none'} 
    borderStyle={isScrolled ? 'none': 'none'} transition={'box-shadow 0.1s ease, background-color 0.1s ease'}>
      <Flex
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        align={"center"}
        justify={"space-between"}
      >
        <IconButton
          onClick={onToggle}
          icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />}
          variant={"ghost"}
          aria-label={"Toggle Navigation"}
        />
        <Flex justify="space-between" width="100%">
          <Stack direction="row" align="center">
            <Text>Logo</Text>
            {MenuItems.map((item, index) => (
              <Link key={index} href={item.url}>
                {item.title}
              </Link>
            ))}
          </Stack>
          <Button>
            Connect Wallet
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default NavBar;
