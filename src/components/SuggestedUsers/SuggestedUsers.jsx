import { Box, Flex, Link, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import SuggestedHeader from './SuggestedHeader'
import SuggestedUser from './SuggestedUser'

const SuggestedUsers = () => {
  return (
    <VStack py={8} px={6} gap={4}>
        <SuggestedHeader />
        <Flex alignItems={"center"} justifyContent={"space-between"} w={"full"}>
            <Text fontSize={12} fontWeight={"bold"} color={"gray.500"}>
                Suggested for you
            </Text>
            <Text fontSize={12} fontWeight={"bold"} _hover={{ color: "gray.400" }} cursor={"pointer"}>
                See All
            </Text>
        </Flex>
        <SuggestedUser name="demo name" followers={234} avatar='https://img.freepik.com/free-vector/mysterious-mafia-man-smoking-cigarette_52683-34828.jpg?w=740&t=st=1714966876~exp=1714967476~hmac=25af33034dbafe6ffbd3968b3e8fc6bb52d37c82aee97c3922ac1b73b05713ad'/>
        <SuggestedUser name="demo name" followers={234} avatar='https://img.freepik.com/free-vector/mysterious-mafia-man-smoking-cigarette_52683-34828.jpg?w=740&t=st=1714966876~exp=1714967476~hmac=25af33034dbafe6ffbd3968b3e8fc6bb52d37c82aee97c3922ac1b73b05713ad'/>
        <SuggestedUser name="demo name" followers={234} avatar='https://img.freepik.com/free-vector/mysterious-mafia-man-smoking-cigarette_52683-34828.jpg?w=740&t=st=1714966876~exp=1714967476~hmac=25af33034dbafe6ffbd3968b3e8fc6bb52d37c82aee97c3922ac1b73b05713ad'/>

        <Box fontSize={12} color={"gray.500"} mt={5} alignSelf={"start"}>
				© 2023 Built By{" "}
				<Link href='https://github.com/nilanchala-samal' target='_blank' color='blue.500' fontSize={14}>
					nilanchala_samal
				</Link>
			</Box>
    </VStack>
  )
}

export default SuggestedUsers