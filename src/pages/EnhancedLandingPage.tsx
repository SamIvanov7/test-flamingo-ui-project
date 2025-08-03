import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import {
  Box,
  Container,
  Heading,
  Text,
  Button,
  SimpleGrid,
  Image,
  VStack,
  HStack,
  Stack,
  Flex,
  Grid,
  GridItem,
  Icon,
  Link,
  Input,
  IconButton,
  Center,
  Group,
  Badge,
  Span,
} from '@chakra-ui/react'
import { FaPlay, FaEnvelope, FaChevronDown, FaRocket, FaBrain, FaChartLine } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { BsLink45Deg, BsLightningChargeFill } from 'react-icons/bs'
import { RiSparklingFill } from 'react-icons/ri'
import { Tooltip } from '../components/ui/tooltip'
import { toaster } from '../components/ui/toaster'
import { DialogRoot, DialogBackdrop, DialogContent, DialogCloseTrigger } from '../components/ui/dialog'
import { ProgressRoot, ProgressBar } from '../components/ui/progress'
import VideoBackground from '../components/VideoBackground'
import Header from '../components/Header'

const MotionBox = motion(Box)
const MotionButton = motion(Button)
const MotionImage = motion(Image)
const MotionHeading = motion(Heading)
const MotionText = motion(Text)

// Floating animation variants
const floatAnimation = {
  initial: { y: 0 },
  animate: {
    y: [-20, 20, -20],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
}

// Glow pulse animation
const glowPulse = {
  initial: { boxShadow: '0 0 20px rgba(171,248,11,0.3)' },
  animate: {
    boxShadow: [
      '0 0 20px rgba(171,248,11,0.3)',
      '0 0 60px rgba(171,248,11,0.6)',
      '0 0 20px rgba(171,248,11,0.3)',
    ],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
}

export default function EnhancedLandingPage() {
  const navigate = useNavigate()
  const { t } = useTranslation()
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  
  // Parallax scroll effects
  const { scrollY } = useScroll()
  const heroY = useTransform(scrollY, [0, 500], [0, -100])
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0])
  const scaleProgress = useTransform(scrollY, [0, 100], [1, 0.95])

  const handlePlayVideo = () => {
    setIsVideoPlaying(true)
    if (videoRef.current) {
      videoRef.current.play()
    }
  }

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    toaster.create({
      title: 'Welcome aboard! 🚀',
      description: 'Get ready to revolutionize your gaming experience.',
      duration: 5000,
    })
    
    setEmail('')
    setIsLoading(false)
  }

  const features = [
    {
      title: 'Quantum Neural Engine',
      description: 'Revolutionary AI that decodes the matrix of chance',
      icon: FaBrain,
      color: 'pink',
      gradient: 'linear(to-br, pink.400, purple.600)',
    },
    {
      title: 'Real-Time Analysis',
      description: 'Lightning-fast predictions that adapt as you play',
      icon: BsLightningChargeFill,
      color: 'limeGreen',
      gradient: 'linear(to-br, limeGreen, green.600)',
    },
    {
      title: 'Pattern Recognition',
      description: 'Advanced algorithms that see what others miss',
      icon: FaChartLine,
      color: 'blue',
      gradient: 'linear(to-br, blue.400, cyan.600)',
    },
    {
      title: 'Smart Insights',
      description: 'Personalized strategies tailored to your style',
      icon: RiSparklingFill,
      color: 'purple',
      gradient: 'linear(to-br, purple.400, pink.600)',
    },
  ]

  const stats = [
    { value: '99.7%', label: 'Accuracy Rate', delay: 0.1 },
    { value: '50K+', label: 'Active Players', delay: 0.2 },
    { value: '$2.5M', label: 'Won This Month', delay: 0.3 },
    { value: '24/7', label: 'Live Support', delay: 0.4 },
  ]

  return (
    <MotionBox
      ref={containerRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      bg="#1a1a1a"
      minH="100vh"
      overflow="hidden"
    >
      <Header onLogin={() => navigate('/dashboard')} />
      
      {/* Enhanced Hero Section */}
      <Box as="section" position="relative" minH="100vh" overflow="hidden">
        <VideoBackground videoSrc="/assets/videos/intro-loop-desktop.mp4" />
        
        {/* Animated particles overlay */}
        <Box position="absolute" inset={0} pointerEvents="none">
          {[...Array(20)].map((_, i) => (
            <MotionBox
              key={i}
              position="absolute"
              w="2px"
              h="2px"
              bg="limeGreen"
              rounded="full"
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                opacity: 0
              }}
              animate={{
                y: [null, -window.innerHeight],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                delay: Math.random() * 5,
                ease: "linear"
              }}
            />
          ))}
        </Box>
        
        <MotionBox
          position="relative"
          zIndex={10}
          h="full"
          display="flex"
          alignItems="center"
          justifyContent="center"
          style={{ y: heroY, opacity: heroOpacity, scale: scaleProgress }}
        >
          <Container maxW="container.xl">
            <VStack gap={8} align="center" textAlign="center">
              {/* Animated Badge */}
              <MotionBox
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Badge
                  size="lg"
                  variant="subtle"
                  bg="limeGreen/20"
                  color="limeGreen"
                  px={4}
                  py={2}
                  rounded="full"
                  fontSize="sm"
                  fontWeight="bold"
                  boxShadow="0 0 30px rgba(171,248,11,0.3)"
                >
                  <HStack gap={2}>
                    <Box w="2" h="2" bg="limeGreen" rounded="full" className="animate-pulse" />
                    <Text>AI GAMING REVOLUTION</Text>
                  </HStack>
                </Badge>
              </MotionBox>
              
              {/* Main Heading with gradient */}
              <MotionBox
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                <VStack gap={0}>
                  <MotionHeading
                    fontSize={{ base: '5xl', sm: '7xl', md: '8xl', lg: '9xl' }}
                    fontWeight={900}
                    lineHeight="0.9"
                    fontFamily="var(--font-heading)"
                    bgGradient="linear(to-r, #FFF7E6, #ABF80B)"
                    bgClip="text"
                    {...floatAnimation}
                  >
                    PLAYING
                  </MotionHeading>
                  <MotionHeading
                    fontSize={{ base: '5xl', sm: '7xl', md: '8xl', lg: '9xl' }}
                    fontWeight={900}
                    lineHeight="0.9"
                    fontFamily="var(--font-heading)"
                    color="#FF0099"
                    textShadow="0 0 80px rgba(255,0,153,0.5)"
                  >
                    REDEFINED
                  </MotionHeading>
                </VStack>
              </MotionBox>
              
              {/* Animated subtitle */}
              <MotionText
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                fontSize={{ base: 'lg', sm: 'xl', lg: '2xl' }}
                color="whiteAlpha.800"
                maxW="600px"
                fontFamily="var(--font-accent)"
                fontStyle="italic"
              >
                {t('landing.hero.subtitle')}
              </MotionText>
              
              {/* CTA Buttons */}
              <MotionBox
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <HStack gap={4}>
                  <MotionButton
                    onClick={() => navigate('/onboarding')}
                    size="xl"
                    bg="limeGreen"
                    color="black"
                    fontSize="lg"
                    fontWeight="bold"
                    px={8}
                    _hover={{
                      transform: 'translateY(-2px)',
                      boxShadow: '0 10px 40px rgba(171,248,11,0.4)',
                    }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    {...glowPulse}
                  >
                    Start Winning Now
                  </MotionButton>
                  
                  <Tooltip content={t('landing.hero.watchStory')}>
                    <MotionButton
                      onClick={handlePlayVideo}
                      variant="outline"
                      size="xl"
                      borderColor="whiteAlpha.400"
                      color="white"
                      _hover={{
                        borderColor: 'limeGreen',
                        bg: 'whiteAlpha.100',
                      }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Icon as={FaPlay} mr={2} />
                      Watch Demo
                    </MotionButton>
                  </Tooltip>
                </HStack>
              </MotionBox>
              
              {/* Scroll indicator */}
              <MotionBox
                position="absolute"
                bottom={8}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                <VStack gap={2}>
                  <Text fontSize="sm" color="whiteAlpha.600">Scroll to explore</Text>
                  <MotionBox
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <Icon as={FaChevronDown} boxSize={6} color="limeGreen" />
                  </MotionBox>
                </VStack>
              </MotionBox>
            </VStack>
          </Container>
        </MotionBox>
      </Box>

      {/* Stats Section */}
      <Box as="section" py={20} bg="blackAlpha.900" position="relative">
        <Container maxW="container.xl">
          <SimpleGrid columns={{ base: 2, md: 4 }} gap={8}>
            {stats.map((stat, index) => (
              <MotionBox
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: stat.delay }}
                viewport={{ once: true }}
                textAlign="center"
              >
                <VStack>
                  <MotionHeading
                    fontSize={{ base: '3xl', md: '5xl' }}
                    fontWeight={900}
                    bgGradient="linear(to-r, limeGreen, pink)"
                    bgClip="text"
                  >
                    {stat.value}
                  </MotionHeading>
                  <Text color="whiteAlpha.700" fontSize={{ base: 'sm', md: 'md' }}>
                    {stat.label}
                  </Text>
                </VStack>
              </MotionBox>
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      {/* Enhanced Features Section */}
      <Box as="section" py={20} bg="#1a1a1a" position="relative">
        <Container maxW="container.xl">
          <MotionBox
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            textAlign="center"
            mb={16}
          >
            <Badge
              size="lg"
              variant="subtle"
              bg="pink/20"
              color="pink"
              px={4}
              py={2}
              rounded="full"
              mb={4}
            >
              FEATURES
            </Badge>
            <Heading
              fontSize={{ base: '3xl', md: '5xl' }}
              fontWeight={900}
              mb={4}
            >
              <Text as="span" color="white">Powered by </Text>
              <Text as="span" bgGradient="linear(to-r, pink, limeGreen)" bgClip="text">
                Advanced AI
              </Text>
            </Heading>
            <Text fontSize="xl" color="whiteAlpha.700" maxW="2xl" mx="auto">
              Experience gaming intelligence that adapts, learns, and wins
            </Text>
          </MotionBox>

          <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} gap={6}>
            {features.map((feature, index) => (
              <MotionBox
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                onMouseEnter={() => setHoveredFeature(index)}
                onMouseLeave={() => setHoveredFeature(null)}
              >
                <Box
                  p={8}
                  bg={hoveredFeature === index ? 'whiteAlpha.100' : 'whiteAlpha.50'}
                  backdropFilter="blur(10px)"
                  borderRadius="2xl"
                  border="1px solid"
                  borderColor={hoveredFeature === index ? feature.color : 'whiteAlpha.200'}
                  transition="all 0.3s"
                  transform={hoveredFeature === index ? 'translateY(-5px)' : 'none'}
                  boxShadow={hoveredFeature === index ? `0 20px 40px rgba(0,0,0,0.3)` : 'none'}
                  h="full"
                >
                  <VStack gap={4} align="start">
                    <Box
                      p={3}
                      bgGradient={feature.gradient}
                      rounded="xl"
                      display="inline-flex"
                    >
                      <Icon as={feature.icon} boxSize={8} color="white" />
                    </Box>
                    <VStack align="start" gap={2}>
                      <Heading size="md" color="white">
                        {feature.title}
                      </Heading>
                      <Text color="whiteAlpha.700" fontSize="sm">
                        {feature.description}
                      </Text>
                    </VStack>
                  </VStack>
                </Box>
              </MotionBox>
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      {/* Interactive Demo Section */}
      <Box as="section" py={20} bg="blackAlpha.900" position="relative" overflow="hidden">
        <Container maxW="container.xl">
          <Grid templateColumns={{ base: '1fr', lg: '1fr 1fr' }} gap={12} alignItems="center">
            <MotionBox
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Badge
                size="lg"
                variant="subtle"
                bg="limeGreen/20"
                color="limeGreen"
                px={4}
                py={2}
                rounded="full"
                mb={4}
              >
                LIVE DEMO
              </Badge>
              <Heading fontSize={{ base: '3xl', md: '4xl' }} mb={6} color="white">
                See The Magic In Action
              </Heading>
              <Text fontSize="lg" color="whiteAlpha.700" mb={8}>
                Watch our AI analyze patterns in real-time and predict outcomes with stunning accuracy.
              </Text>
              
              {/* Demo Stats */}
              <VStack gap={4} align="stretch">
                <Box>
                  <HStack justify="space-between" mb={2}>
                    <Text color="white">Pattern Recognition</Text>
                    <Text color="limeGreen" fontWeight="bold">97%</Text>
                  </HStack>
                  <ProgressRoot value={97} colorPalette="green">
                    <ProgressBar />
                  </ProgressRoot>
                </Box>
                <Box>
                  <HStack justify="space-between" mb={2}>
                    <Text color="white">Prediction Accuracy</Text>
                    <Text color="pink" fontWeight="bold">94%</Text>
                  </HStack>
                  <ProgressRoot value={94} colorPalette="pink">
                    <ProgressBar />
                  </ProgressRoot>
                </Box>
                <Box>
                  <HStack justify="space-between" mb={2}>
                    <Text color="white">Response Time</Text>
                    <Text color="blue.400" fontWeight="bold">0.3s</Text>
                  </HStack>
                  <ProgressRoot value={95} colorPalette="blue">
                    <ProgressBar />
                  </ProgressRoot>
                </Box>
              </VStack>
            </MotionBox>
            
            <MotionBox
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              position="relative"
            >
              <Box
                position="relative"
                p={8}
                bg="whiteAlpha.50"
                backdropFilter="blur(20px)"
                borderRadius="3xl"
                border="1px solid"
                borderColor="whiteAlpha.200"
                overflow="hidden"
              >
                <Image
                  src="/assets/images/ui-screenshot-3.png"
                  alt="AI Demo"
                  w="full"
                  h="auto"
                  rounded="xl"
                />
                <Box
                  position="absolute"
                  top={4}
                  right={4}
                  bg="red.500"
                  color="white"
                  px={3}
                  py={1}
                  rounded="full"
                  fontSize="sm"
                  fontWeight="bold"
                  className="animate-pulse"
                >
                  LIVE
                </Box>
              </Box>
            </MotionBox>
          </Grid>
        </Container>
      </Box>

      {/* Newsletter Section */}
      <Box as="section" py={20} bg="#1a1a1a" position="relative">
        <Container maxW="container.md">
          <MotionBox
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            textAlign="center"
            p={12}
            bg="whiteAlpha.50"
            backdropFilter="blur(20px)"
            borderRadius="3xl"
            border="1px solid"
            borderColor="whiteAlpha.200"
          >
            <Icon as={FaRocket} boxSize={12} color="limeGreen" mb={4} />
            <Heading fontSize={{ base: '2xl', md: '3xl' }} mb={4} color="white">
              Join The Revolution
            </Heading>
            <Text fontSize="lg" color="whiteAlpha.700" mb={8}>
              Get exclusive access to beta features and winning strategies
            </Text>
            
            <form onSubmit={handleNewsletterSubmit}>
              <HStack gap={0} maxW="md" mx="auto">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  size="lg"
                  bg="whiteAlpha.100"
                  border="1px solid"
                  borderColor="whiteAlpha.200"
                  color="white"
                  _placeholder={{ color: 'whiteAlpha.500' }}
                  _hover={{ borderColor: 'limeGreen' }}
                  _focus={{ borderColor: 'limeGreen', boxShadow: '0 0 0 1px #ABF80B' }}
                  borderRightRadius={0}
                />
                <Button
                  type="submit"
                  size="lg"
                  bg="limeGreen"
                  color="black"
                  fontWeight="bold"
                  _hover={{ bg: 'limeGreen/90' }}
                  borderLeftRadius={0}
                  disabled={isLoading}
                  minW="120px"
                >
                  {isLoading ? 'Joining...' : 'Join Now'}
                </Button>
              </HStack>
            </form>
          </MotionBox>
        </Container>
      </Box>

      {/* Footer */}
      <Box as="footer" py={12} bg="blackAlpha.900" borderTop="1px solid" borderColor="whiteAlpha.200">
        <Container maxW="container.xl">
          <Flex
            direction={{ base: 'column', md: 'row' }}
            justify="space-between"
            align="center"
            gap={8}
          >
            <HStack gap={3}>
              <Image
                src="/assets/images/logo-variant-3.png"
                alt="flamingo.ai"
                boxSize={12}
                objectFit="contain"
              />
              <Text fontSize="xl" fontWeight="bold" color="white">
                flamingo.ai
              </Text>
            </HStack>
            
            <Text color="whiteAlpha.600" fontSize="sm">
              © 2024 flamingo.ai. All rights reserved.
            </Text>
            
            <Group gap={4}>
              <IconButton
                variant="ghost"
                rounded="full"
                _hover={{ bg: 'whiteAlpha.100' }}
                aria-label="Twitter"
              >
                <Icon as={FaXTwitter} color="whiteAlpha.700" />
              </IconButton>
              <IconButton
                variant="ghost"
                rounded="full"
                _hover={{ bg: 'whiteAlpha.100' }}
                aria-label="Email"
              >
                <Icon as={FaEnvelope} color="whiteAlpha.700" />
              </IconButton>
              <IconButton
                variant="ghost"
                rounded="full"
                _hover={{ bg: 'whiteAlpha.100' }}
                aria-label="Website"
              >
                <Icon as={BsLink45Deg} color="whiteAlpha.700" />
              </IconButton>
            </Group>
          </Flex>
        </Container>
      </Box>

      {/* Video Modal */}
      <DialogRoot
        open={isVideoPlaying}
        onOpenChange={(details) => setIsVideoPlaying(details.open)}
        size="cover"
      >
        <DialogBackdrop bg="blackAlpha.900" />
        <DialogContent
          bg="transparent"
          boxShadow="none"
          p={4}
          maxW="4xl"
          w="full"
        >
          <Box position="relative">
            <video
              ref={videoRef}
              src="/assets/videos/Pinky_Desktop.mp4"
              className="w-full rounded-lg shadow-2xl"
              controls
              autoPlay
            />
            <DialogCloseTrigger
              position="absolute"
              top={4}
              right={4}
              bg="blackAlpha.700"
              color="white"
              rounded="full"
              _hover={{ bg: 'blackAlpha.800' }}
            />
          </Box>
        </DialogContent>
      </DialogRoot>
    </MotionBox>
  )
}