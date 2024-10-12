import React, { useEffect, useState } from "react";
import {
  ChakraProvider,
  Box,
  Text,
  VStack,
  Grid,
  theme,
  Image,
  List,
  HStack,
  Link,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import { links, parentContainer, info, childElement } from "../Data/data";
import { motion } from "framer-motion";
import { AiFillCheckCircle } from "react-icons/ai"; 

function App() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("/");
      if (response.ok) {
        const data = await response.json();
        setData(data);
        setIsLoading(false);
      } else {
        throw new Error("Error fetching data");
      }
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };

  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid
          minH="100vh"
          p={3}
          sx={{
            backgroundImage: "url('../Data/background.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
            backgroundBlendMode: "soft-light",
          }}
        >
          <VStack marginTop="2em">
            <Link href="/" style={{ textDecoration: "none" }}>
              <Image
                src="../Data/Logo.png"
                alt="Logo"
                w="9em"
                borderRadius="50%"
                border="3px solid white"
                boxShadow="0px 0px 30px rgba(0,0,0,0.5)"
                as={motion.img}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition="linear 0.1s"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              />
            </Link>
            <HStack
              as={motion.div}
              initial={{ x: "-50px" }}
              animate={{ x: "0px" }}
              transition="linear 0.1s"
            >
              <Text fontSize={30} fontWeight="bold" color="white">
                {info.name}
              </Text>
              <AiFillCheckCircle color="rgba(3, 177, 252)" fontSize="30" />
            </HStack>
            {isLoading ? (
              <Spinner size="xl" color="rgba(3, 177, 252)" />
            ) : (
              <List as={motion.ul} variants={parentContainer} initial="hidden" animate="show">
                {links.map((link) => (
                  <ListItem key={link.url}>
                    <Link href={link.url} target="_blank" rel="noopener noreferrer">
                      <HStack
                        w="15em"
                        h="3em"
                        borderRadius="12px"
                        boxShadow="0px 0px 20px rgba(0,0,0,0.2)"
                        backgroundColor="rgba(255, 255, 255, 0.9)"
                        padding="10px"
                        margin="10px"
                        _hover={{
                          boxShadow: "0px 0px 25px rgba(188,19,254)",
                          transform: "scale(1.05)",
                          transition: "0.3s"
                        }}
                        as={motion.li}
                        variants={childElement}
                      >
                        {link.icon}
                        <Text>{link.text}</Text>
                      </HStack>
                    </Link>
                  </ListItem>
                ))}
              </List>
            )}
          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
