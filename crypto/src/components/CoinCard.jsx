import { Heading, Image, Text, VStack, Link } from "@chakra-ui/react";

const CoinCard = ({ id, name, img, symbol, price, currencySymbol = "₨" }) => (
  <Link to={`/coins/${id}`} textDecoration="none">
    <VStack
      width="180px"
      height="220px"
      shadow="md"
      p="4"
      borderRadius="md"
      transition="all 0.3s"
      m="4"
      _hover={{
        transform: "scale(1.05)",
        shadow: "xl",
      }}
      alignItems="center"
      justifyContent="center"
      background="white"
    >
      <Image src={img} w="80px" h="80px" objectFit="contain" />
      <Heading size="md" noOfLines={1} fontWeight="bold">
        {symbol}
      </Heading>
      <Text noOfLines={1} fontSize="sm" color="gray.600">
        {name}
      </Text>
      <Text noOfLines={1} fontSize="md" fontWeight="bold">
        {price ? `${currencySymbol}${price}` : "NA"}
      </Text>
    </VStack>
  </Link>
);

export default CoinCard;
