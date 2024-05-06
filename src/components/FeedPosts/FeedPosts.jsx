import { useEffect, useState } from 'react'
import FeedPost from './FeedPost'
import { Box, Container, Flex, Skeleton, SkeletonCircle, VStack } from '@chakra-ui/react'

const FeedPosts = () => {

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, [])

  return (
    <Container maxW={"container.sm"} py={10} px={2}>
      {isLoading && [0, 1, 2, 3, 4, 5, 6, 7].map((_, index) => (
        <VStack key={index} gap={4} alignItems={"flex-start"} mb={10}>
          <Flex gap={2} >
            <SkeletonCircle size={10} />
            <VStack>
              <Skeleton height="10px" width={"200px"}></Skeleton>
              <Skeleton height="10px" width={"200px"}></Skeleton>
            </VStack>
          </Flex>
          <Skeleton w={"full"}>
            <Box h={"500px"}>content wrapped</Box>
          </Skeleton>
        </VStack>
      ))}
      {
        !isLoading && (
          <>
            <FeedPost img='/madara.jpg' username='madara' avatar='madara.jpg' />
            <FeedPost img='/obito.jpg' username='obito_uchiha' avatar='obito.jpg' />
            <FeedPost img='/itachi.jpg' username='genjutsu_god' avatar='itachi.jpg' />
            <FeedPost img='/luffy.jpg' username='king_of_pirates' avatar='luffy.jpg' />
            <FeedPost img='/kakashi.jpg' username='copy_ninja' avatar='kakashi.jpg' />
            <FeedPost img='/aizen.jpg' username='the_goat' avatar='aizen.jpg' />
            <FeedPost img='/naruto.jpg' username='knuclehead_ninja' avatar='naruto.jpg' />
            <FeedPost img='/img1.png' username='nilanchala_samal' avatar='/img1.png' />
            <FeedPost img='/img2.png' username='somya_mohanty' avatar='/img2.png' />
            <FeedPost img='/img3.png' username='biswajit_bhanja' avatar='/img3.png' />
            <FeedPost img='/img4.png' username='surya_ojha' avatar='/img4.png' />
          </>
        )
      }

    </Container>
  )
}

export default FeedPosts