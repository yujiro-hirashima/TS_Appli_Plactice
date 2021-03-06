import { Box, Image, Stack, Text } from "@chakra-ui/react";
import { memo, VFC } from "react";

type Props = {
  id: number;
  onClick: (id: number) => void;
  imageUrl: string;
  userName: string;
  fullName: string;
};

export const UserCard: VFC<Props> = memo((props) => {
  const { id, imageUrl, userName, fullName, onClick } = props;
  return (
    <Box
      onClick={() => onClick(id)}
      p={4}
      w="260px"
      h="260px"
      bg="white"
      borderRadius="10px"
      shadow="md"
      _hover={{ cursor: "pointer", opacity: "0.8" }}
    >
      <Stack textAlign="center">
        <Image
          boxSize="160px"
          borderRadius="full"
          src={imageUrl}
          alt={userName}
          m="auto"
        />
        <Text fontSize="lg" fontWeight="bold">
          {userName}
        </Text>
        <Text fontSize="sm" color="gray">
          {fullName}
        </Text>
      </Stack>
    </Box>
  );
});
