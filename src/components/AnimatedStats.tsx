import { motion, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  VStack,
  Progress,
  Stat,
  Badge,
} from '@chakra-ui/react'
import BackgroundPaths from './FloatingPaths'

interface StatItem {
  label: string
  value: number
  suffix: string
  description: string
  color: string
}

const stats: StatItem[] = [
  {
    label: 'Success Rate',
    value: 87,
    suffix: '%',
    description: 'Average win rate',
    color: 'green',
  },
  {
    label: 'Patterns Analyzed',
    value: 1.2,
    suffix: 'M+',
    description: 'Daily pattern recognition',
    color: 'blue',
  },
  {
    label: 'Active Users',
    value: 50,
    suffix: 'K+',
    description: 'Global community',
    color: 'purple',
  },
  {
    label: 'Response Time',
    value: 0.3,
    suffix: 'ms',
    description: 'Ultra-fast predictions',
    color: 'orange',
  },
]

const MotionBox = motion(Box)

export default function AnimatedStats() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [animatedValues, setAnimatedValues] = useState(stats.map(() => 0))

  useEffect(() => {
    if (isInView) {
      stats.forEach((stat, index) => {
        const duration = 2000 // 2 seconds
        const steps = 60
        const increment = stat.value / steps
        let current = 0
        
        const timer = setInterval(() => {
          current += increment
          if (current >= stat.value) {
            current = stat.value
            clearInterval(timer)
          }
          
          setAnimatedValues(prev => {
            const newValues = [...prev]
            newValues[index] = current
            return newValues
          })
        }, duration / steps)
      })
    }
  }, [isInView])

  return (
    <Box ref={ref} py={{ base: 16, lg: 24 }} bg="raisinBlack" position="relative" overflow="hidden">
      {/* Animated Background Paths */}
      <Box position="absolute" inset={0} opacity={0.3}>
        <BackgroundPaths />
      </Box>
      
      <Container maxW="container.xl" position="relative" zIndex={1}>
        <VStack gap={{ base: 12, lg: 16 }}>
          {/* Header */}
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            textAlign="center"
          >
            <Badge
              colorScheme="green"
              variant="subtle"
              fontSize="sm"
              mb={4}
            >
              REAL-TIME ANALYTICS
            </Badge>
            <Heading
              fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
              color="beigeCream"
              mb={4}
            >
              Quantum Performance Metrics
            </Heading>
            <Text
              fontSize={{ base: 'md', lg: 'lg' }}
              color="text.secondary"
              maxW="2xl"
              mx="auto"
            >
              Our AI-powered system processes millions of data points every second,
              delivering unprecedented accuracy in pattern recognition.
            </Text>
          </MotionBox>

          {/* Stats Grid */}
          <SimpleGrid columns={{ base: 1, sm: 2, lg: 4 }} gap={{ base: 6, lg: 8 }} w="full">
            {stats.map((stat, index) => (
              <MotionBox
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Stat.Root
                  bg="whiteAlpha.50"
                  backdropFilter="blur(10px)"
                  p={6}
                  rounded="xl"
                  border="1px solid"
                  borderColor="whiteAlpha.100"
                  position="relative"
                  overflow="hidden"
                  _hover={{
                    borderColor: 'limeGreen',
                    boxShadow: 'glow.sm',
                    transform: 'translateY(-4px)',
                  }}
                  transition="all 0.3s"
                >
                  {/* Background gradient */}
                  <Box
                    position="absolute"
                    top={0}
                    left={0}
                    right={0}
                    h="2px"
                    bg={`${stat.color}.500`}
                  />
                  
                  <Stat.Label color="text.secondary" fontSize="sm" mb={2}>
                    {stat.label}
                  </Stat.Label>
                  
                  <Stat.ValueText
                    fontSize={{ base: '3xl', lg: '4xl' }}
                    fontWeight="bold"
                    color="limeGreen"
                    mb={2}
                  >
                    {animatedValues[index].toFixed(stat.value < 10 ? 1 : 0)}{stat.suffix}
                  </Stat.ValueText>
                  
                  <Progress.Root
                    value={(animatedValues[index] / stat.value) * 100}
                    size="xs"
                    colorPalette={stat.color}
                    mb={3}
                  >
                    <Progress.Track rounded="full">
                      <Progress.Range />
                    </Progress.Track>
                  </Progress.Root>
                  
                  <Stat.HelpText color="text.secondary" fontSize="xs">
                    {stat.description}
                  </Stat.HelpText>
                </Stat.Root>
              </MotionBox>
            ))}
          </SimpleGrid>

          {/* Live indicator */}
          <MotionBox
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Badge
              colorScheme="red"
              variant="solid"
              fontSize="xs"
              px={3}
              py={1}
              rounded="full"
              display="flex"
              alignItems="center"
              gap={2}
            >
              <Box
                w={2}
                h={2}
                bg="red.300"
                rounded="full"
                as={motion.div}
              />
              LIVE DATA
            </Badge>
          </MotionBox>
        </VStack>
      </Container>

      {/* Decorative elements */}
      <Box
        position="absolute"
        top="50%"
        left="-10%"
        w="40%"
        h="40%"
        bg="limeGreen"
        opacity={0.05}
        rounded="full"
        filter="blur(100px)"
      />
      <Box
        position="absolute"
        bottom="-10%"
        right="-10%"
        w="40%"
        h="40%"
        bg="pink"
        opacity={0.05}
        rounded="full"
        filter="blur(100px)"
      />
    </Box>
  )
}