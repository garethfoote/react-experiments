import React, { useState, useEffect } from "react";
import "./App.css";
import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Stat,
  StatLabel,
  StatNumber,
  Spinner,
  Box,
  VStack,
  Center,
} from "@chakra-ui/react";

type User = {
  name: string;
  website: string;
  email: string;
  phone: string;
};

const url = (userId: number) =>
  `https://jsonplaceholder.typicode.com/users/${userId}`;

function App() {
  const [userData, setUserData] = useState<User | undefined>();
  const [userId, setUserId] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(url(userId))
      .then((response) => response.json())
      .then((data) => {
        setIsLoading(false);
        setUserData(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, [userId]);

  return (
    <Box
      p="6"
      m="2"
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
    >
      <NumberInput
        onChange={(v) => setUserId(parseInt(v))}
        defaultValue={userId}
        min={1}
        max={10}
      >
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>

      <VStack mt="2" pos="relative" w="sm" spacing={4} align="stretch">
        <Stat>
          <StatLabel>Name</StatLabel>
          <StatNumber>{userData?.name}</StatNumber>
        </Stat>
        <Stat>
          <StatLabel>Website</StatLabel>
          <StatNumber>{userData?.website}</StatNumber>
        </Stat>
        <Stat>
          <StatLabel>Email</StatLabel>
          <StatNumber>{userData?.email}</StatNumber>
        </Stat>
        <Stat>
          <StatLabel>Phone</StatLabel>
          <StatNumber>{userData?.phone}</StatNumber>
        </Stat>
        {isLoading && (
          <Center
            pos="absolute"
            top="0"
            left="0"
            bg="#ffffffb5"
            h="100%"
            w="100%"
            color="white"
          >
            <Spinner size="xl" color="red.500" />
          </Center>
        )}
      </VStack>
    </Box>
  );
}

export default App;
