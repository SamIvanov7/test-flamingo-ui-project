import { motion } from 'framer-motion'
import { useRef, useState } from 'react'
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
  Separator,
  Group,
} from '@chakra-ui/react'
import { FaPlay, FaTimes, FaEnvelope } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { BsLink45Deg } from 'react-icons/bs'
import { Tooltip } from '../components/ui/tooltip'
import { toaster } from '../components/ui/toaster'
import { DialogRoot, DialogBackdrop, DialogContent, DialogCloseTrigger } from '../components/ui/dialog'
import VideoBackground from '../components/VideoBackground'
import Header from '../components/Header'
import GamblingNewsSection from '../components/GamblingNewsSection'
import FeatureCard from '../components/FeatureCard'
import AnimatedStats from '../components/AnimatedStats'

const MotionBox = motion(Box)
const MotionButton = motion(Button)
const MotionImage = motion(Image)

export default function LandingPage() {
  console.log('LandingPage component is mounting')
  const navigate = useNavigate()
  const { t } = useTranslation()
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const handlePlayVideo = () => {
    setIsVideoPlaying(true)
    if (videoRef.current) {
      videoRef.current.play()
    }
  }


  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    toaster.create({
      title: 'Successfully subscribed!',
      description: 'You\'ll receive our latest updates soon.',
      duration: 5000,
    })
    
    setEmail('')
    setIsLoading(false)
  }

  const features = [
    {
      title: 'AI Technology',
      description: 'Advanced neural networks analyze patterns in real-time',
      image: '/assets/images/flamingo_1_restyled.png',
      delay: 0.1,
    },
    {
      title: 'Live Analytics',
      description: 'Real-time probability calculations for every spin',
      image: '/assets/images/flamingo_2_restyled.png',
      delay: 0.2,
    },
    {
      title: 'Smart Insights',
      description: 'Personalized recommendations based on your play style',
      image: '/assets/images/flamingo_3_restyled.png',
      delay: 0.3,
    },
    {
      title: 'Pattern Recognition',
      description: 'Quantum-neural analysis decodes hidden patterns',
      image: '/assets/images/flamingo_4_restyled.png',
      delay: 0.4,
    },
    {
      title: 'Probability Engine',
      description: 'Revolutionary algorithms challenge randomness',
      image: '/assets/images/flamingo_5_restyled.png',
      delay: 0.5,
    },
    {
      title: 'Win Strategy',
      description: 'Beat the house with data-driven insights',
      image: '/assets/images/flamingo_6_restyled.png',
      delay: 0.6,
    },
  ]

  const footerLinks = ['About Us', 'Use Case', 'Pricing', 'Blog', 'Contact']

  return (
    <MotionBox
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Header onLogin={() => navigate('/dashboard')} />
      
      {/* Hero Section */}
      <Box as="section" position="relative" h="100vh" overflow="hidden">
        <VideoBackground videoSrc="/assets/videos/intro-loop-desktop.mp4" />
        
        <Box position="relative" zIndex={10} h="full" display="flex" alignItems="center" justifyContent="center">
          <Container maxW="container.xl">
            <Box position="relative">
              {/* Floating UI Preview */}
              <MotionBox
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                position="absolute"
                right={0}
                top="50%"
                transform="translateY(-50%)"
                display={{ base: 'none', lg: 'block' }}
                w={{ lg: 64, xl: 96 }}
                h={{ lg: 64, xl: 96 }}
              >
                <MotionImage
                  src="/assets/images/ui-screenshot-3.png"
                  alt="UI Preview"
                  w="full"
                  h="full"
                  objectFit="contain"
                  animate={{ 
                    y: [0, -20, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </MotionBox>

              <VStack gap={8} align="center" maxW="4xl" mx="auto">
                <MotionBox
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                  textAlign="center"
                >
                  <VStack gap={0}>
                    <Heading
                      fontSize={{ base: '4xl', sm: '6xl', md: '7xl', lg: '8xl', xl: '9xl' }}
                      fontWeight={700}
                      color="#FFF7E6"
                      textTransform="uppercase"
                      lineHeight="shorter"
                    >
                      {t('landing.hero.title1')}
                    </Heading>
                    <Heading
                      fontSize={{ base: '4xl', sm: '6xl', md: '7xl', lg: '8xl', xl: '9xl' }}
                      fontWeight={700}
                      color="#FF0099"
                      textTransform="uppercase"
                      lineHeight="shorter"
                    >
                      {t('landing.hero.title2')}
                    </Heading>
                  </VStack>
                  
                  <Text
                    mt={6}
                    fontSize={{ base: 'sm', sm: 'md', lg: 'lg' }}
                    color="text.secondary"
                    maxW={{ base: '350px', sm: '500px', lg: '600px' }}
                    mx="auto"
                  >
                    {t('landing.hero.subtitle')}
                  </Text>
                </MotionBox>
                
                {/* Video Play Button */}
                <Tooltip content={t('landing.hero.watchStory')}>
                  <MotionButton
                    onClick={handlePlayVideo}
                    variant="plain"
                    w={{ base: 24, sm: 28, lg: 32 }}
                    h={{ base: 24, sm: 28, lg: 32 }}
                    position="relative"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    _hover={{
                      '& .play-circle': {
                        boxShadow: 'glow.lg',
                      }
                    }}
                  >
                    <Box
                      className="play-circle"
                      position="absolute"
                      inset={0}
                      rounded="full"
                      border="2px solid"
                      borderColor="#ABF80B"
                      bg="transparent"
                      boxShadow="glow.md"
                      transition="all 0.3s"
                    >
                      {/* Rotating Text SVG */}
                      <svg 
                        style={{
                          position: 'absolute',
                          inset: 0,
                          width: '100%',
                          height: '100%',
                          animation: 'spin 20s linear infinite'
                        }}
                        viewBox="0 0 128 128"
                      >
                        <defs>
                          <path id="circle-text-path" d="M 64, 64 m -50, 0 a 50,50 0 1,1 100,0 a 50,50 0 1,1 -100,0" />
                        </defs>
                        <text fill="var(--chakra-colors-limeGreen)" fontSize="12" fontWeight="bold">
                          <textPath href="#circle-text-path" startOffset="0%">
                            {t('landing.hero.watchStory')} • {t('landing.hero.watchStory')} • 
                          </textPath>
                        </text>
                      </svg>
                      
                      {/* Play Icon */}
                      <Center position="absolute" inset={0}>
                        <Icon as={FaPlay} boxSize={{ base: 8, sm: 10, lg: 12 }} color="#ABF80B" ml={2} />
                      </Center>
                    </Box>
                  </MotionButton>
                </Tooltip>
                
                <MotionButton
                  onClick={() => navigate('/onboarding')}
                  size={{ base: 'md', sm: 'lg' }}
                  variant="outline"
                  borderColor="#ABF80B"
                  color="#ABF80B"
                  borderWidth={2}
                  _hover={{
                    bg: 'rgba(171, 248, 11, 0.1)',
                    boxShadow: 'glow.sm',
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Try flamingo.ai
                </MotionButton>
              </VStack>
            </Box>
          </Container>
        </Box>
      </Box>

      {/* Features Gallery Section */}
      <Box
        as="section"
        minH="100vh"
        bg="#3C403D"
        display="flex"
        alignItems="center"
        justifyContent="center"
        overflow="hidden"
        py={{ base: 12, sm: 16, lg: 0 }}
      >
        <Container maxW="container.xl">
          <SimpleGrid columns={{ base: 1, md: 3 }} gap={{ base: 6, sm: 8 }}>
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                {...feature}
              />
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      {/* Animated Stats Section */}
      <AnimatedStats />

      {/* Gambling News Section */}
      <Box
        as="section"
        minH="100vh"
        bg="#554348"
        display="flex"
        alignItems="center"
        justifyContent="center"
        py={{ base: 12, sm: 16, lg: 20 }}
      >
        <GamblingNewsSection />
      </Box>

      {/* Footer Section */}
      <Box as="section" minH="100vh" position="relative" overflow="hidden">
        {/* Gradient Background */}
        <Box position="absolute" inset={0}>
          <Box position="absolute" inset={0} bg="#3C403D" />
          <Box
            position="absolute"
            inset={0}
            bgGradient="linear(to-br, pink.90, transparent)"
          />
        </Box>
        
        {/* Footer Content */}
        <Box
          position="relative"
          zIndex={10}
          minH="100vh"
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          p={{ base: 6, sm: 8, lg: 12 }}
        >
          <Container maxW="container.xl">
            <MotionBox
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Grid
                templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }}
                gap={{ base: 8, sm: 12 }}
              >
                {/* Company Info */}
                <GridItem>
                  <HStack gap={3} mb={{ base: 4, sm: 6 }}>
                    <Image
                      src="/assets/images/logo-variant-3.png"
                      alt="flamingo.ai"
                      boxSize={{ base: 12, sm: 16 }}
                      objectFit="contain"
                    />
                    <Heading size={{ base: 'lg', sm: 'xl' }} color="#FFF7E6">
                      flamingo.ai
                    </Heading>
                  </HStack>
                  <Text fontSize={{ base: 'sm', sm: 'md' }} color="text.secondary" mb={{ base: 4, sm: 6 }}>
                    Revolutionizing gaming with quantum-neural analysis. 
                    We prove that true randomness is a myth.
                  </Text>
                  <Group gap={4}>
                    <Tooltip content="Twitter/X">
                      <IconButton
                        variant="ghost"
                        rounded="full"
                        bg="limeGreen/20"
                        _hover={{ bg: 'limeGreen/30' }}
                        aria-label="Twitter"
                      >
                        <Icon as={FaXTwitter} color="#ABF80B" />
                      </IconButton>
                    </Tooltip>
                    <Tooltip content="Email">
                      <IconButton
                        variant="ghost"
                        rounded="full"
                        bg="limeGreen/20"
                        _hover={{ bg: 'limeGreen/30' }}
                        aria-label="Email"
                      >
                        <Icon as={FaEnvelope} color="#ABF80B" />
                      </IconButton>
                    </Tooltip>
                    <Tooltip content="Website">
                      <IconButton
                        variant="ghost"
                        rounded="full"
                        bg="limeGreen/20"
                        _hover={{ bg: 'limeGreen/30' }}
                        aria-label="Website"
                      >
                        <Icon as={BsLink45Deg} color="#ABF80B" />
                      </IconButton>
                    </Tooltip>
                  </Group>
                </GridItem>

                {/* Quick Links */}
                <GridItem>
                  <Heading size={{ base: 'md', sm: 'lg' }} color="#ABF80B" mb={{ base: 4, sm: 6 }}>
                    Quick Links
                  </Heading>
                  <Stack gap={3}>
                    {footerLinks.map((link) => (
                      <Link
                        key={link}
                        href="#"
                        fontSize={{ base: 'sm', sm: 'md' }}
                        color="text.secondary"
                        _hover={{ color: '#ABF80B' }}
                        transition="colors 0.2s"
                      >
                        {link}
                      </Link>
                    ))}
                  </Stack>
                </GridItem>

                {/* Newsletter */}
                <GridItem>
                  <Heading size={{ base: 'md', sm: 'lg' }} color="#ABF80B" mb={{ base: 4, sm: 6 }}>
                    Stay Updated
                  </Heading>
                  <Text fontSize={{ base: 'sm', sm: 'md' }} color="text.secondary" mb={4}>
                    Get the latest updates on our quantum-neural breakthroughs.
                  </Text>
                  <form onSubmit={handleNewsletterSubmit}>
                    <HStack gap={0}>
                      <Input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        size={{ base: 'md', sm: 'lg' }}
                        bg="whiteAlpha.100"
                        border="1px solid"
                        borderColor="whiteAlpha.200"
                        color="#FFF7E6"
                        _placeholder={{ color: 'whiteAlpha.500' }}
                        _hover={{ borderColor: 'limeGreen/50' }}
                        _focus={{ borderColor: 'limeGreen', boxShadow: 'none' }}
                        borderRightRadius={0}
                      />
                      <Button
                        type="submit"
                        size={{ base: 'md', sm: 'lg' }}
                        bg="#ABF80B"
                        color="#3C403D"
                        fontWeight="bold"
                        _hover={{ bg: 'limeGreen/90' }}
                        borderLeftRadius={0}
                        disabled={isLoading}
                      >
                        {isLoading ? 'Subscribing...' : 'Subscribe'}
                      </Button>
                    </HStack>
                  </form>
                </GridItem>
              </Grid>
            </MotionBox>
          </Container>

          {/* Center CTA */}
          <Container maxW="container.md" textAlign="center" my={{ base: 12, sm: 16 }}>
            <MotionBox
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <Heading
                fontSize={{ base: '3xl', sm: '4xl', md: '5xl', lg: '6xl' }}
                color="#FFF7E6"
                mb={{ base: 4, sm: 6 }}
              >
                Ready to Beat the House?
              </Heading>
              <Text
                fontSize={{ base: 'md', sm: 'lg', md: 'xl' }}
                color="text.secondary"
                mb={{ base: 6, sm: 8 }}
                px={4}
              >
                Join thousands who've discovered that the house doesn't always win.
              </Text>
              <MotionButton
                onClick={() => navigate('/onboarding')}
                size={{ base: 'lg', sm: 'xl' }}
                bg="#ABF80B"
                color="#3C403D"
                fontWeight="bold"
                fontSize={{ base: 'lg', sm: 'xl' }}
                _hover={{
                  boxShadow: 'glow.lg',
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Winning Now
              </MotionButton>
            </MotionBox>
          </Container>

          {/* Bottom Bar */}
          <Container maxW="container.xl">
            <Separator borderColor="whiteAlpha.100" mb={{ base: 6, sm: 8 }} />
            <Flex
              direction={{ base: 'column', md: 'row' }}
              justify="space-between"
              align="center"
              gap={4}
            >
              <Text fontSize={{ base: 'xs', sm: 'sm' }} color="whiteAlpha.600">
                © 2024 flamingo.ai. All rights reserved.
              </Text>
              <Group gap={{ base: 4, sm: 6 }} fontSize={{ base: 'xs', sm: 'sm' }}>
                <Link href="#" color="whiteAlpha.600" _hover={{ color: '#ABF80B' }}>
                  Privacy Policy
                </Link>
                <Link href="#" color="whiteAlpha.600" _hover={{ color: '#ABF80B' }}>
                  Terms of Service
                </Link>
                <Link href="#" color="whiteAlpha.600" _hover={{ color: '#ABF80B' }}>
                  Responsible Gaming
                </Link>
              </Group>
            </Flex>
          </Container>
        </Box>

        {/* Decorative Elements */}
        <Box
          position="absolute"
          bottom={0}
          right={0}
          w={{ base: 64, sm: 96 }}
          h={{ base: 64, sm: 96 }}
          bg="pink/20"
          rounded="full"
          filter="blur(3xl)"
        />
        <Box
          position="absolute"
          top={0}
          left={0}
          w={{ base: 64, sm: 96 }}
          h={{ base: 64, sm: 96 }}
          bg="limeGreen/10"
          rounded="full"
          filter="blur(3xl)"
        />
      </Box>

      {/* Video Modal */}
      <DialogRoot
        open={isVideoPlaying}
        onOpenChange={(details) => setIsVideoPlaying(details.open)}
        size="cover"
      >
        <DialogBackdrop />
        <DialogContent
          bg="transparent"
          boxShadow="none"
          p={4}
          maxW="4xl"
          w="full"
          backdrop={false}
        >
          <Box position="relative">
            <video
              ref={videoRef}
              src="/assets/videos/Pinky_Desktop.mp4"
              className="w-full rounded-lg shadow-2xl"
              controls
              autoPlay
            />
            <DialogCloseTrigger>
              <Icon as={FaTimes} boxSize={6} />
            </DialogCloseTrigger>
          </Box>
        </DialogContent>
      </DialogRoot>
    </MotionBox>
  )
}