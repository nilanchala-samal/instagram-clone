import { Avatar, Button, Flex, Text } from '@chakra-ui/react'
import React from 'react'

const SuggestedHeader = () => {
    return (
        <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
            <Flex alignItems={"center"} gap={2}>

                <Avatar size={"lg"} src='/profilepic.png' />
                <Text fontSize={12} fontWeight={"bold"}>
                    nilanchala_samal
                </Text>
            </Flex>
            <Button
                size={"xs"}
                background={"transparent"}
                _hover={{ background: "transparent" }}
                fontSize={14}
                fontWeight={"medium"}
                color={"blue.400"}
                cursor={"pointer"}
            >
                Log out
            </Button>
        </Flex>
    )
}

export default SuggestedHeader