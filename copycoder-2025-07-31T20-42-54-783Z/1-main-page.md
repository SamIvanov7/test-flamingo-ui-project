Convert the below HTML/CSS code into React components:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AI Helper</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/lucide/0.263.1/lucide.min.css" rel="stylesheet">
</head>
<body class="bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 min-h-screen text-white">
    <!-- Header Navigation -->
    <header class="flex items-center justify-between px-6 py-4">
        <div class="flex items-center space-x-2">
            <div class="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                <span class="text-white font-bold text-sm">AI</span>
            </div>
            <span class="text-white font-semibold">AI Helper</span>
        </div>
        
        <nav class="hidden md:flex items-center space-x-6">
            <a href="#" class="text-gray-300 hover:text-white">Home</a>
            <a href="#" class="text-gray-300 hover:text-white">About Us</a>
            <a href="#" class="text-gray-300 hover:text-white">Use Case</a>
            <a href="#" class="text-gray-300 hover:text-white">Pricing</a>
            <a href="#" class="text-gray-300 hover:text-white">Blog</a>
            <a href="#" class="text-gray-300 hover:text-white">Contact</a>
            <a href="#" class="text-gray-300 hover:text-white">Dashboard</a>
            <a href="#" class="text-gray-300 hover:text-white">Chat</a>
            <a href="#" class="text-gray-300 hover:text-white">Request Feature</a>
        </nav>
        
        <button class="border border-gray-600 px-4 py-2 rounded-lg text-gray-300 hover:text-white hover:border-gray-400">
            Log In
        </button>
    </header>

    <!-- Hero Section -->
    <main class="container mx-auto px-6 py-12">
        <div class="text-center mb-12">
            <div class="inline-block bg-gray-800 px-4 py-2 rounded-full text-sm text-gray-300 mb-8">
                Best tool for AI Content writing
            </div>
            
            <h1 class="text-5xl md:text-6xl font-bold mb-6">
                AI-Powered <span class="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Solutions</span>
                <br>for Fastest Copywriting
            </h1>
            
            <p class="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                AI Copywriting is revolutionizing the way content is created. AI can create content for blogs, articles, websites, social media and more.
            </p>
            
            <button class="bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600">
                Get Started For Free
            </button>
        </div>

        <!-- Dashboard Preview -->
        <div class="max-w-4xl mx-auto bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700">
            <!-- Dashboard Header -->
            <div class="flex items-center justify-between mb-6">
                <div class="flex items-center space-x-2">
                    <div class="w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                        <span class="text-white font-bold text-xs">AI</span>
                    </div>
                    <span class="text-white font-semibold">AI Helper</span>
                </div>
                
                <div class="flex items-center space-x-4 flex-1 max-w-md mx-4">
                    <div class="relative flex-1">
                        <i data-lucide="search" class="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400"></i>
                        <input type="text" placeholder="What do you want to create" class="w-full bg-gray-800 border border-gray-600 rounded-lg pl-10 pr-4 py-2 text-white placeholder-gray-400">
                    </div>
                </div>
                
                <div class="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
            </div>

            <!-- Sidebar and Content -->
            <div class="flex gap-6">
                <!-- Sidebar -->
                <div class="w-48 space-y-2">
                    <button class="w-full bg-gradient-to-r from-purple-500 to-pink-500 px-4 py-2 rounded-lg text-white font-medium flex items-center space-x-2">
                        <i data-lucide="plus" class="w-4 h-4"></i>
                        <span>New Project</span>
                    </button>
                    
                    <div class="space-y-1">
                        <a href="#" class="flex items-center space-x-3 px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg">
                            <i data-lucide="layout-dashboard" class="w-4 h-4"></i>
                            <span>Dashboard</span>
                        </a>
                        <a href="#" class="flex items-center space-x-3 px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg">
                            <i data-lucide="message-circle" class="w-4 h-4"></i>
                            <span>Chat</span>
                        </a>
                        <a href="#" class="flex items-center space-x-3 px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg">
                            <i data-lucide="flag" class="w-4 h-4"></i>
                            <span>Request Feature</span>
                        </a>
                        <a href="#" class="flex items-center space-x-3 px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg">
                            <i data-lucide="book-open" class="w-4 h-4"></i>
                            <span>Guides</span>
                        </a>
                        <a href="#" class="flex items-center space-x-3 px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg">
                            <i data-lucide="settings" class="w-4 h-4"></i>
                            <span>Settings</span>
                        </a>
                    </div>
                    
                    <div class="pt-4">
                        <a href="#" class="flex items-center space-x-3 px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg">
                            <i data-lucide="log-out" class="w-4 h-4"></i>
                            <span>Log Out</span>
                        </a>
                    </div>
                </div>

                <!-- Main Content -->
                <div class="flex-1">
                    <!-- Choose Template Section -->
                    <div class="mb-8">
                        <h2 class="text-xl font-semibold mb-4">Choose Template</h2>
                        
                        <!-- Template Categories -->
                        <div class="flex space-x-2 mb-4 overflow-x-auto">
                            <button class="px-4 py-2 bg-gray-700 text-white rounded-lg whitespace-nowrap">All Templates</button>
                            <button class="px-4 py-2 bg-gray-800 text-gray-300 rounded-lg whitespace-nowrap hover:bg-gray-700">Social Media</button>
                            <button class="px-4 py-2 bg-gray-800 text-gray-300 rounded-lg whitespace-nowrap hover:bg-gray-700">Digital Ads</button>
                            <button class="px-4 py-2 bg-gray-800 text-gray-300 rounded-lg whitespace-nowrap hover:bg-gray-700">SEO</button>
                            <button class="px-4 py-2 bg-gray-800 text-gray-300 rounded-lg whitespace-nowrap hover:bg-gray-700">Product Description</button>
                            <button class="px-4 py-2 bg-gray-800 text-gray-300 rounded-lg whitespace-nowrap hover:bg-gray-700">Email Writing</button>
                            <button class="px-4 py-2 bg-gray-800 text-gray-300 rounded-lg whitespace-nowrap hover:bg-gray-700">Website Copy</button>
                        </div>
                        
                        <!-- Template Cards -->
                        <div class="grid grid-cols-3 gap-4">
                            <div class="bg-gray-800 p-4 rounded-lg border border-gray-700">
                                <div class="flex items-center space-x-3 mb-3">
                                    <div class="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                                        <i data-lucide="facebook" class="w-4 h-4 text-white"></i>
                                    </div>
                                    <h3 class="font-semibold">Facebook Ads</h3>
                                </div>
                                <p class="text-sm text-gray-400">Facebook ad copies that make your ads stand out.</p>
                            </div>
                            
                            <div class="bg-gray-800 p-4 rounded-lg border border-gray-700">
                                <div class="flex items-center space-x-3 mb-3">
                                    <div class="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
                                        <i data-lucide="edit" class="w-4 h-4 text-white"></i>
                                    </div>
                                    <h3 class="font-semibold">Blog Post Ideas</h3>
                                </div>
                                <p class="text-sm text-gray-400">Entice your audience with captivating blog ideas using our AI-powered writing techniques.</p>
                            </div>
                            
                            <div class="bg-gray-800 p-4 rounded-lg border border-gray-700">
                                <div class="flex items-center space-x-3 mb-3">
                                    <div class="w-8 h-8 bg-orange-600 rounded-lg flex items-center justify-center">
                                        <i data-lucide="shopping-bag" class="w-4 h-4 text-white"></i>
                                    </div>
                                    <h3 class="font-semibold">Amazon Product Description</h3>
                                </div>
                                <p class="text-sm text-gray-400">Description for amazon that ranks first on the first page.</p>
                            </div>
                        </div>
                    </div>

                    <!-- Generation History -->
                    <div>
                        <div class="flex items-center justify-between mb-4">
                            <h2 class="text-xl font-semibold">Generation History</h2>
                            <button class="text-purple-400 hover:text-purple-300">See History</button>
                        </div>
                        
                        <div class="space-y-4">
                            <div class="flex items-start space-x-3">
                                <div class="w-2 h-2 bg-gray-400 rounded-full mt-2"></div>
                                <div class="flex-1">
                                    <div class="flex items-center space-x-2 mb-1">
                                        <span class="font-medium">Social Media Post</span>
                                        <span class="text-sm text-gray-400">03 Feb 2023</span>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="bg-gray-800 p-4 rounded-lg border border-gray-700">
                                <div class="flex items-center justify-between mb-2">
                                    <span class="text-sm text-gray-400">2023-03-03 Untitled</span>
                                    <div class="flex items-center space-x-2">
                                        <i data-lucide="copy" class="w-4 h-4 text-gray-400"></i>
                                        <i data-lucide="more-horizontal" class="w-4 h-4 text-gray-400"></i>
                                    </div>
                                </div>
                                <p class="text-sm mb-3">Hey everyone have you meet AI Helper? As an AI language model, I'm trained to answer your question and have a conversation with you ! Ask me anything, and let's get chatting !</p>
                                <div class="text-xs text-gray-500">6:22 PM • 30 Words/129 Characters</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>

    <!-- Companies Section -->
    <section class="py-16">
        <div class="container mx-auto px-6">
            <h2 class="text-center text-2xl font-semibold mb-12">Join 4,000+ companies already growing</h2>
            
            <div class="flex items-center justify-center space-x-12 opacity-60">
                <div class="flex items-center space-x-2">
                    <i data-lucide="zap" class="w-6 h-6"></i>
                    <span class="font-semibold">Boltshift</span>
                </div>
                <div class="flex items-center space-x-2">
                    <i data-lucide="box" class="w-6 h-6"></i>
                    <span class="font-semibold">Lightbox</span>
                </div>
                <div class="flex items-center space-x-2">
                    <i data-lucide="feather" class="w-6 h-6"></i>
                    <span class="font-semibold">FeatherDev</span>
                </div>
                <div class="flex items-center space-x-2">
                    <i data-lucide="circle" class="w-6 h-6"></i>
                    <span class="font-semibold">Spherule</span>
                </div>
                <div class="flex items-center space-x-2">
                    <i data-lucide="globe" class="w-6 h-6"></i>
                    <span class="font-semibold">GlobalBank</span>
                </div>
                <div class="flex items-center space-x-2">
                    <i data-lucide="sun" class="w-6 h-6"></i>
                    <span class="font-semibold">Nietzsche</span>
                </div>
            </div>
        </div>
    </section>

    <!-- Features Section -->
    <section class="py-16">
        <div class="container mx-auto px-6">
            <h2 class="text-center text-4xl font-bold mb-16">
                Our Core <span class="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Features</span>
            </h2>
            
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div class="bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700">
                    <div class="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-6">
                        <i data-lucide="edit-3" class="w-6 h-6 text-white"></i>
                    </div>
                    <h3 class="text-xl font-semibold mb-4">Articles Ideas</h3>
                    <p class="text-gray-400">Unleash your creativity with AI Helper's article ideas feature. Get a steady stream of fresh and engaging topics to write about.</p>
                </div>
                
                <div class="bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700">
                    <div class="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-6">
                        <i data-lucide="target" class="w-6 h-6 text-white"></i>
                    </div>
                    <h3 class="text-xl font-semibold mb-4">Automation Process</h3>
                    <p class="text-gray-400">Experience the power of automation with AI Helper. Streamline your content creation workflow and save valuable time.</p>
                </div>
                
                <div class="bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700">
                    <div class="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-6">
                        <i data-lucide="file-text" class="w-6 h-6 text-white"></i>
                    </div>
                    <h3 class="text-xl font-semibold mb-4">Write Content Faster</h3>
                    <p class="text-gray-400">With AI Helper, you can write content faster than ever. Its advanced algorithms help you generate text quickly and efficiently.</p>
                </div>
            </div>
        </div>
    </section>

    <script src="https://unpkg.com/lucide@latest/dist/umd/lucide.js"></script>
    <script>
        lucide.createIcons();
    </script>
</body>
</html>
```