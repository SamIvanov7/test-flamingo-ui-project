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
  Group,
} from '@chakra-ui/react'
import { FaEnvelope } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { BsLink45Deg } from 'react-icons/bs'
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

export default function LandingPageFixed() {
  console.log('LandingPageFixed component is mounting')
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
      title: 'Risk Analysis',
      description: 'Know when to bet big and when to walk away',
      image: '/assets/images/flamingo_5_restyled.png',
      delay: 0.5,
    },
    {
      title: 'Win Maximizer',
      description: 'Optimize your betting strategy for maximum returns',
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
      <Box as="section" position="relative" minH="100vh" overflow="hidden">
        <VideoBackground videoSrc="/assets/videos/intro-loop-desktop.mp4" />
        
        <Box position="relative" zIndex={10} minH="100vh" display="flex" alignItems="center" justifyContent="center">
          <Container maxW="container.xl" px={{ base: 4, sm: 6 }}>
            <Box position="relative" textAlign="center">
              {/* Floating Image on Right */}
              <MotionBox
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                position="absolute"
                right={0}
                top="50%"
                transform="translateY(-50%)"
                display={{ base: 'none', lg: 'block' }}
                w={{ base: '20rem', lg: '24rem' }}
                h={{ base: '20rem', lg: '24rem' }}
              >
                <MotionImage
                  src="/assets/images/ui-screenshot-3.png"
                  alt="UI Preview"
                  w="100%"
                  h="100%"
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

              <VStack gap={{ base: 6, sm: 8 }} maxW="4xl" mx="auto">
                <MotionBox
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                >
                  <VStack gap={4}>
                    <Heading 
                      size={{ base: '3xl', sm: '4xl', md: '5xl', lg: '6xl' }}
                      textTransform="uppercase"
                      lineHeight="tight"
                      letterSpacing="tight"
                    >
                      <Text as="span" color="beigeCream">{t('landing.hero.title1')}</Text>
                      <br />
                      <Text as="span" color="pink">{t('landing.hero.title2')}</Text>
                    </Heading>
                    <Text 
                      fontSize={{ base: 'sm', sm: 'md', lg: 'lg' }}
                      color="text.secondary"
                      maxW="600px"
                    >
                      {t('landing.hero.subtitle')}
                    </Text>
                  </VStack>
                </MotionBox>
                
                {/* Video Play Button - Without Tooltip */}
                <MotionButton
                  onClick={handlePlayVideo}
                  variant="plain"
                  w={{ base: 24, sm: 28, lg: 32 }}
                  h={{ base: 24, sm: 28, lg: 32 }}
                  p={0}
                  position="relative"
                  _hover={{ transform: 'scale(1.1)' }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Box
                    position="absolute"
                    inset={0}
                    rounded="full"
                    border="2px solid"
                    borderColor="limeGreen"
                    bg="transparent"
                    css={{
                      boxShadow: '0 0 50px rgba(171,248,11,0.6)',
                      '&:hover': {
                        boxShadow: '0 0 70px rgba(171,248,11,0.8)',
                      },
                    }}
                  />
                  
                  {/* Rotating Text */}
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
                    <text fill="#ABF80B" fontSize="10px" fontWeight="bold">
                      <textPath href="#circle-text-path" startOffset="0%">
                        {t('landing.hero.watchStory')} • {t('landing.hero.watchStory')} • 
                      </textPath>
                    </text>
                  </svg>
                  
                  {/* Play Icon */}
                  <Center position="absolute" inset={0}>
                    <Icon w={{ base: 8, sm: 10, lg: 12 }} h={{ base: 8, sm: 10, lg: 12 }} color="limeGreen" ml={{ base: 1, sm: 2 }}>
                      <path fill="currentColor" d="M8 5v14l11-7z"/>
                    </Icon>
                  </Center>
                </MotionButton>
                
                <MotionButton
                  onClick={() => navigate('/onboarding')}
                  size={{ base: 'md', sm: 'lg' }}
                  variant="outline"
                  borderColor="limeGreen"
                  color="limeGreen"
                  borderWidth={2}
                  _hover={{
                    bg: 'limeGreen/10',
                    boxShadow: '0 0 30px rgba(171,248,11,0.5)',
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {t('landing.hero.cta')}
                </MotionButton>
              </VStack>
            </Box>
          </Container>
        </Box>

        {/* Scroll indicator */}
        <MotionBox
          position="absolute"
          bottom={8}
          left="50%"
          transform="translateX(-50%)"
          color="limeGreen"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <Icon viewBox="0 0 24 24" w={6} h={6}>
            <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </Icon>
        </MotionBox>
      </Box>

      {/* Features Grid Section */}
      <Box as="section" minH="100vh" py={{ base: 16, sm: 20 }} px={{ base: 4, sm: 6 }}>
        <Container maxW="container.xl">
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            textAlign="center"
            mb={{ base: 12, sm: 16 }}
          >
            <Heading size={{ base: '2xl', sm: '3xl', lg: '4xl' }} mb={4}>
              <Text as="span" color="beigeCream">AI-Powered</Text>{' '}
              <Text as="span" color="pink">Gaming Revolution</Text>
            </Heading>
            <Text fontSize={{ base: 'md', sm: 'lg' }} color="text.secondary" maxW="3xl" mx="auto">
              Experience the future of gaming with our quantum-neural prediction system
            </Text>
          </MotionBox>

          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={{ base: 6, sm: 8 }}>
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </SimpleGrid>

          {/* Newsletter Section */}
          <MotionBox
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            mt={{ base: 16, sm: 20 }}
            textAlign="center"
          >
            <Box
              bg="limeGreen/10"
              backdropFilter="blur(10px)"
              borderRadius="2xl"
              border="1px solid"
              borderColor="limeGreen/30"
              p={{ base: 8, sm: 12 }}
              maxW="2xl"
              mx="auto"
            >
              <Heading size={{ base: 'lg', sm: 'xl' }} color="limeGreen" mb={4}>
                Stay Ahead of the Game
              </Heading>
              <Text color="text.secondary" mb={6}>
                Get exclusive tips, updates, and early access to new features
              </Text>
              <form onSubmit={handleNewsletterSubmit}>
                <HStack gap={4} maxW="md" mx="auto">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    size={{ base: 'md', sm: 'lg' }}
                    bg="background.dark/50"
                    borderColor="limeGreen/50"
                    _hover={{ borderColor: 'limeGreen' }}
                    _focus={{ borderColor: 'limeGreen', boxShadow: '0 0 0 1px #ABF80B' }}
                  />
                  <Button
                    type="submit"
                    size={{ base: 'md', sm: 'lg' }}
                    bg="limeGreen"
                    color="darkGreen"
                    _hover={{ bg: 'limeGreen/80' }}
                    disabled={isLoading}
                  >
                    {isLoading ? 'Subscribing...' : 'Subscribe'}
                  </Button>
                </HStack>
              </form>
            </Box>
          </MotionBox>
        </Container>
      </Box>

      {/* Gambling News Section */}
      <Box as="section" minH="100vh" py={{ base: 16, sm: 20 }}>
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
                    <IconButton
                      variant="ghost"
                      rounded="full"
                      bg="limeGreen/20"
                      _hover={{ bg: 'limeGreen/30' }}
                      aria-label="Twitter"
                    >
                      <FaXTwitter color="#ABF80B" />
                    </IconButton>
                    <IconButton
                      variant="ghost"
                      rounded="full"
                      bg="limeGreen/20"
                      _hover={{ bg: 'limeGreen/30' }}
                      aria-label="Email"
                    >
                      <FaEnvelope color="#ABF80B" />
                    </IconButton>
                    <IconButton
                      variant="ghost"
                      rounded="full"
                      bg="limeGreen/20"
                      _hover={{ bg: 'limeGreen/30' }}
                      aria-label="Website"
                    >
                      <BsLink45Deg color="#ABF80B" />
                    </IconButton>
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

                {/* Newsletter Signup */}
                <GridItem>
                  <Heading size={{ base: 'md', sm: 'lg' }} color="#E59FCE" mb={{ base: 4, sm: 6 }}>
                    Newsletter
                  </Heading>
                  <Text fontSize={{ base: 'sm', sm: 'md' }} color="text.secondary" mb={4}>
                    Subscribe to get the latest updates and exclusive offers
                  </Text>
                  <form onSubmit={handleNewsletterSubmit}>
                    <VStack gap={3} align="stretch">
                      <Input
                        type="email"
                        placeholder="Your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        size={{ base: 'sm', sm: 'md' }}
                        bg="background.dark/30"
                        borderColor="pink/50"
                        _hover={{ borderColor: 'pink' }}
                        _focus={{ borderColor: 'pink', boxShadow: '0 0 0 1px #E59FCE' }}
                      />
                      <Button
                        type="submit"
                        size={{ base: 'sm', sm: 'md' }}
                        bg="pink"
                        color="darkGreen"
                        _hover={{ bg: 'pink/80' }}
                        disabled={isLoading}
                        w="100%"
                      >
                        {isLoading ? 'Subscribing...' : 'Subscribe'}
                      </Button>
                    </VStack>
                  </form>
                </GridItem>
              </Grid>
            </MotionBox>

            {/* Bottom Footer */}
            <MotionBox
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              mt={{ base: 12, sm: 16 }}
              pt={{ base: 6, sm: 8 }}
              borderTop="1px solid"
              borderColor="whiteAlpha.200"
            >
              <Flex
                direction={{ base: 'column', sm: 'row' }}
                justify="space-between"
                align="center"
                gap={4}
              >
                <Text fontSize={{ base: 'xs', sm: 'sm' }} color="text.secondary">
                  © 2024 Flamingo AI. All rights reserved.
                </Text>
                <HStack gap={6} fontSize={{ base: 'xs', sm: 'sm' }} color="text.secondary">
                  <Link href="#" _hover={{ color: '#ABF80B' }}>Privacy Policy</Link>
                  <Link href="#" _hover={{ color: '#ABF80B' }}>Terms of Service</Link>
                  <Link href="#" _hover={{ color: '#ABF80B' }}>Cookie Policy</Link>
                </HStack>
              </Flex>
            </MotionBox>

            {/* Stats Section */}
            <AnimatedStats />
          </Container>
        </Box>
      </Box>

      {/* Video Modal */}
      <DialogRoot open={isVideoPlaying} onOpenChange={(e) => setIsVideoPlaying(e.open)}>
        <DialogBackdrop />
        <DialogContent maxW="4xl" p={0}>
          <video
            ref={videoRef}
            src="/assets/videos/Pinky_Desktop.mp4"
            className="w-full rounded-lg"
            controls
            autoPlay
          />
          <DialogCloseTrigger />
        </DialogContent>
      </DialogRoot>
    </MotionBox>
  )
}