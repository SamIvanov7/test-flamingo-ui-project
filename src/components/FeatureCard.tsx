import { motion } from 'framer-motion'
import {
  Card,
  Image,
  VStack,
  Heading,
  Text,
  AspectRatio,
  HoverCardRoot,
  HoverCardTrigger,
  HoverCardContent,
  Skeleton,
  Progress,
  Badge,
  Box,
} from '@chakra-ui/react'
import { useState, useEffect } from 'react'

const MotionCard = motion(Card.Root)

interface FeatureCardProps {
  title: string
  description: string
  image: string
  delay: number
}

export default function FeatureCard({ title, description, image, delay }: FeatureCardProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000 + delay * 1000)

    // Simulate progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + 10
      })
    }, 100)

    return () => {
      clearTimeout(timer)
      clearInterval(interval)
    }
  }, [delay])

  const techStats = [
    { label: 'Accuracy', value: '98.7%' },
    { label: 'Speed', value: '0.3ms' },
    { label: 'Patterns', value: '1.2M+' },
  ]

  return (
    <HoverCardRoot>
      <HoverCardTrigger asChild>
        <MotionCard
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay }}
          whileHover={{ y: -10 }}
          bg="rgba(255, 255, 255, 0.1)"
          backdropFilter="blur(10px)"
          border="1px solid"
          borderColor="whiteAlpha.200"
          overflow="hidden"
          cursor="pointer"
          position="relative"
          _hover={{
            '& img': {
              transform: 'scale(1.05)',
            },
            borderColor: 'limeGreen',
            boxShadow: 'glow.sm',
          }}
        >
          {/* Progress indicator at top */}
          {isLoading && (
            <Progress.Root
              value={progress}
              size="xs"
              colorPalette="green"
              position="absolute"
              top={0}
              left={0}
              right={0}
              zIndex={10}
            >
              <Progress.Track>
                <Progress.Range />
              </Progress.Track>
            </Progress.Root>
          )}
          
          <Card.Body p={{ base: 4, sm: 6 }}>
            <AspectRatio ratio={4/3} mb={4}>
              <Skeleton loading={isLoading} rounded="md">
                <Image
                  src={image}
                  alt={title}
                  objectFit="contain"
                  transition="transform 0.3s"
                />
              </Skeleton>
            </AspectRatio>
            
            <VStack align="start" gap={2}>
              <Skeleton loading={isLoading}>
                <Heading size={{ base: 'md', sm: 'lg' }} color="limeGreen">
                  {title}
                </Heading>
              </Skeleton>
              
              <Skeleton loading={isLoading}>
                <Text fontSize={{ base: 'sm', sm: 'md' }} color="text.secondary">
                  {description}
                </Text>
              </Skeleton>
              
              {!isLoading && (
                <Badge
                  colorScheme="green"
                  variant="subtle"
                  mt={2}
                  as={motion.div}
                >
                  AI Powered
                </Badge>
              )}
            </VStack>
          </Card.Body>
        </MotionCard>
      </HoverCardTrigger>
      
      <HoverCardContent
        bg="darkGreen"
        border="1px solid"
        borderColor="limeGreen"
        boxShadow="glow.md"
        p={4}
        maxW="sm"
      >
        <VStack align="start" gap={3}>
          <Heading size="md" color="limeGreen">{title}</Heading>
          <Text fontSize="sm" color="beigeCream">{description}</Text>
          
          <Box w="full">
            <Text fontSize="xs" color="text.secondary" mb={2}>Performance Stats:</Text>
            <VStack align="start" gap={1}>
              {techStats.map((stat) => (
                <Box key={stat.label} w="full" display="flex" justifyContent="space-between">
                  <Text fontSize="xs" color="text.secondary">{stat.label}:</Text>
                  <Text fontSize="xs" color="limeGreen" fontWeight="bold">{stat.value}</Text>
                </Box>
              ))}
            </VStack>
          </Box>
        </VStack>
      </HoverCardContent>
    </HoverCardRoot>
  )
}