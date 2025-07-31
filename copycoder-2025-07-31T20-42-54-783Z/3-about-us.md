Convert the below HTML/CSS code into React components:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AI Platform</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        'purple-gradient': '#8B5CF6',
                        'pink-gradient': '#EC4899'
                    }
                }
            }
        }
    </script>
</head>
<body class="bg-gray-900 text-white">
    <!-- Hero Section -->
    <section class="relative min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
        <div class="container mx-auto px-6 py-20">
            <div class="flex items-center justify-between">
                <div class="max-w-lg">
                    <h1 class="text-5xl font-bold mb-4">
                        AI Does it<br>
                        <span class="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Faster & Better</span>
                    </h1>
                    <p class="text-gray-300 mb-8 leading-relaxed">
                        Have a look at one of the available tools included in your AI helper. Use fill out the keyword and generate your new content for you.
                    </p>
                    <button class="bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity">
                        Get Started
                    </button>
                </div>
                
                <!-- UI Mockup -->
                <div class="relative">
                    <!-- Main Card -->
                    <div class="bg-gray-800 rounded-lg p-6 w-80 shadow-2xl">
                        <div class="mb-4">
                            <label class="block text-sm text-gray-400 mb-2">Keyword</label>
                            <input type="text" value="AI Story" class="w-full bg-gray-700 rounded px-3 py-2 text-white">
                        </div>
                        <div class="mb-4">
                            <label class="block text-sm text-gray-400 mb-2">Creativity</label>
                            <div class="flex items-center space-x-2">
                                <span class="text-sm">Low</span>
                                <div class="flex-1 bg-gray-700 rounded-full h-2">
                                    <div class="bg-purple-500 h-2 rounded-full w-3/4"></div>
                                </div>
                                <span class="text-sm">High</span>
                            </div>
                        </div>
                        <div class="mb-6">
                            <label class="block text-sm text-gray-400 mb-2">Language</label>
                            <div class="flex space-x-2">
                                <button class="bg-purple-600 px-3 py-1 rounded text-sm">English</button>
                                <button class="bg-gray-700 px-3 py-1 rounded text-sm">Professional</button>
                            </div>
                        </div>
                        <button class="w-full bg-gradient-to-r from-purple-500 to-pink-500 py-3 rounded font-semibold">
                            Generate Content
                        </button>
                    </div>
                    
                    <!-- Floating Result Card -->
                    <div class="absolute -right-20 top-20 bg-gray-800 rounded-lg p-4 w-64 shadow-2xl">
                        <div class="flex items-start space-x-3">
                            <div class="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                                <span class="text-sm">AI</span>
                            </div>
                            <div class="flex-1">
                                <p class="text-sm text-gray-300 mb-3">
                                    Here's description: Unlock the power of AI in becoming your ultimate writing companion. Our suite of AI-powered solutions can help streamline your operations and boost productivity.
                                </p>
                                <div class="flex space-x-2">
                                    <button class="w-6 h-6 bg-gray-700 rounded flex items-center justify-center">📋</button>
                                    <button class="w-6 h-6 bg-gray-700 rounded flex items-center justify-center">👍</button>
                                    <button class="w-6 h-6 bg-gray-700 rounded flex items-center justify-center">👎</button>
                                    <button class="w-6 h-6 bg-gray-700 rounded flex items-center justify-center">🔄</button>
                                    <button class="w-6 h-6 bg-gray-700 rounded flex items-center justify-center">ℹ️</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Platform Section -->
    <section class="py-20 bg-gray-900">
        <div class="container mx-auto px-6 text-center">
            <h2 class="text-4xl font-bold mb-16">
                One Platform Multiple<br>
                <span class="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">AI Applications</span>
            </h2>
            
            <!-- Central Hub Diagram -->
            <div class="relative max-w-4xl mx-auto">
                <!-- Central Circle -->
                <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div class="w-32 h-32 rounded-full border-4 border-purple-500 flex items-center justify-center">
                        <div class="w-16 h-16 rounded-full border-2 border-purple-400 flex items-center justify-center">
                            <div class="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                                <span class="text-sm">AI</span>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- App Icons arranged in circle -->
                <div class="relative w-96 h-96 mx-auto">
                    <!-- YouTube -->
                    <div class="absolute top-0 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-red-600 rounded flex items-center justify-center">
                        <span class="text-white font-bold">▶</span>
                    </div>
                    
                    <!-- NotionAI -->
                    <div class="absolute top-8 right-8 w-12 h-12 bg-orange-500 rounded flex items-center justify-center">
                        <span class="text-white">✦</span>
                    </div>
                    
                    <!-- Shopify -->
                    <div class="absolute right-0 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-green-600 rounded flex items-center justify-center">
                        <span class="text-white">S</span>
                    </div>
                    
                    <!-- WhatsApp -->
                    <div class="absolute bottom-8 right-8 w-12 h-12 bg-green-500 rounded flex items-center justify-center">
                        <span class="text-white">📱</span>
                    </div>
                    
                    <!-- LinkedIn -->
                    <div class="absolute bottom-0 right-1/3 w-12 h-12 bg-blue-600 rounded flex items-center justify-center">
                        <span class="text-white">in</span>
                    </div>
                    
                    <!-- WordPress -->
                    <div class="absolute bottom-0 left-1/3 w-12 h-12 bg-blue-800 rounded flex items-center justify-center">
                        <span class="text-white">W</span>
                    </div>
                    
                    <!-- Framer -->
                    <div class="absolute bottom-8 left-8 w-12 h-12 bg-purple-600 rounded flex items-center justify-center">
                        <span class="text-white">F</span>
                    </div>
                    
                    <!-- Slack -->
                    <div class="absolute left-0 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-purple-500 rounded flex items-center justify-center">
                        <span class="text-white">#</span>
                    </div>
                    
                    <!-- Salesforce -->
                    <div class="absolute top-8 left-8 w-12 h-12 bg-blue-400 rounded flex items-center justify-center">
                        <span class="text-white">☁</span>
                    </div>
                    
                    <!-- Gmail -->
                    <div class="absolute top-1/4 left-4 w-12 h-12 bg-red-500 rounded flex items-center justify-center">
                        <span class="text-white">M</span>
                    </div>
                    
                    <!-- Salesforce -->
                    <div class="absolute bottom-1/4 left-4 w-12 h-12 bg-blue-300 rounded flex items-center justify-center">
                        <span class="text-white">△</span>
                    </div>
                    
                    <!-- HubSpot -->
                    <div class="absolute bottom-1/4 right-4 w-12 h-12 bg-orange-600 rounded flex items-center justify-center">
                        <span class="text-white">H</span>
                    </div>
                </div>
                
                <!-- Dotted lines connecting to center -->
                <div class="absolute inset-0 pointer-events-none">
                    <svg class="w-full h-full" viewBox="0 0 400 400">
                        <line x1="200" y1="50" x2="200" y2="150" stroke="#6B7280" stroke-width="1" stroke-dasharray="4,4"/>
                        <line x1="350" y1="200" x2="250" y2="200" stroke="#6B7280" stroke-width="1" stroke-dasharray="4,4"/>
                        <line x1="200" y1="350" x2="200" y2="250" stroke="#6B7280" stroke-width="1" stroke-dasharray="4,4"/>
                        <line x1="50" y1="200" x2="150" y2="200" stroke="#6B7280" stroke-width="1" stroke-dasharray="4,4"/>
                    </svg>
                </div>
                
                <p class="text-gray-400 mt-8 max-w-md mx-auto">
                    Get all your automated Conversations, customer data, and reporting working together seamlessly. Increase team performance by connecting your favorite tools.
                </p>
            </div>
        </div>
    </section>

    <!-- Content Generation Section -->
    <section class="py-20 bg-gray-900">
        <div class="container mx-auto px-6">
            <div class="text-center mb-16">
                <h2 class="text-4xl font-bold mb-4">
                    <span class="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Automatically</span> Generate<br>
                    High-Quality Content
                </h2>
            </div>
            
            <div class="grid grid-cols-2 gap-6 max-w-4xl mx-auto">
                <!-- Website Copy & Seo -->
                <div class="bg-gray-800 rounded-lg p-6 flex items-center space-x-4">
                    <div class="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center">
                        <span class="text-white">🌐</span>
                    </div>
                    <div class="flex-1">
                        <h3 class="font-semibold mb-1">Website Copy & Seo</h3>
                        <p class="text-gray-400 text-sm">Craft captivating website copy while seamlessly integrating essential SEO elements.</p>
                    </div>
                    <button class="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
                        <span class="text-gray-400">→</span>
                    </button>
                </div>
                
                <!-- Ecommerce Copy -->
                <div class="bg-gray-800 rounded-lg p-6 flex items-center space-x-4">
                    <div class="w-12 h-12 bg-pink-600 rounded-lg flex items-center justify-center">
                        <span class="text-white">🛍️</span>
                    </div>
                    <div class="flex-1">
                        <h3 class="font-semibold mb-1">Ecommerce Copy</h3>
                        <p class="text-gray-400 text-sm">Increase your sales with AI-generated ecommerce copy that truly converts.</p>
                    </div>
                    <button class="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
                        <span class="text-gray-400">→</span>
                    </button>
                </div>
                
                <!-- Blog Ideas & Outline -->
                <div class="bg-gray-800 rounded-lg p-6 flex items-center space-x-4">
                    <div class="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center">
                        <span class="text-white">📝</span>
                    </div>
                    <div class="flex-1">
                        <h3 class="font-semibold mb-1">Blog Ideas & Outline</h3>
                        <p class="text-gray-400 text-sm">Craft captivating website copy while seamlessly integrating essential SEO elements.</p>
                    </div>
                    <button class="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
                        <span class="text-gray-400">→</span>
                    </button>
                </div>
                
                <!-- Sales Copy -->
                <div class="bg-gray-800 rounded-lg p-6 flex items-center space-x-4">
                    <div class="w-12 h-12 bg-pink-600 rounded-lg flex items-center justify-center">
                        <span class="text-white">💼</span>
                    </div>
                    <div class="flex-1">
                        <h3 class="font-semibold mb-1">Sales Copy</h3>
                        <p class="text-gray-400 text-sm">Increase your sales with AI-generated ecommerce copy that truly converts.</p>
                    </div>
                    <button class="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
                        <span class="text-gray-400">→</span>
                    </button>
                </div>
                
                <!-- Youtube Scripts -->
                <div class="bg-gray-800 rounded-lg p-6 flex items-center space-x-4">
                    <div class="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center">
                        <span class="text-white">🎥</span>
                    </div>
                    <div class="flex-1">
                        <h3 class="font-semibold mb-1">Youtube Scripts</h3>
                        <p class="text-gray-400 text-sm">Craft captivating youtube video while seamlessly integrating essential SEO elements.</p>
                    </div>
                    <button class="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
                        <span class="text-gray-400">→</span>
                    </button>
                </div>
                
                <!-- Business Ideas -->
                <div class="bg-gray-800 rounded-lg p-6 flex items-center space-x-4">
                    <div class="w-12 h-12 bg-pink-600 rounded-lg flex items-center justify-center">
                        <span class="text-white">💡</span>
                    </div>
                    <div class="flex-1">
                        <h3 class="font-semibold mb-1">Business Ideas</h3>
                        <p class="text-gray-400 text-sm">Increase your sales with AI-generated ecommerce copy that truly converts.</p>
                    </div>
                    <button class="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
                        <span class="text-gray-400">→</span>
                    </button>
                </div>
            </div>
            
            <div class="text-center mt-12">
                <button class="bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity">
                    View All Templates
                </button>
            </div>
        </div>
    </section>

    <!-- Pricing Section -->
    <section class="py-20 bg-gray-900">
        <div class="container mx-auto px-6">
            <div class="text-center mb-16">
                <h2 class="text-4xl font-bold mb-8">
                    Choose The Plan<br>
                    That's <span class="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">For You</span>
                </h2>
                
                <!-- Billing Toggle -->
                <div class="flex items-center justify-center space-x-4 mb-12">
                    <span class="text-gray-400">Bill Monthly</span>
                    <div class="relative">
                        <input type="checkbox" class="sr-only" id="billing-toggle">
                        <div class="w-12 h-6 bg-gray-700 rounded-full relative">
                            <div class="w-5 h-5 bg-white rounded-full absolute top-0.5 left-0.5 transition-transform"></div>
                        </div>
                    </div>
                    <span class="text-white">Bill Annually</span>
                    <span class="bg-purple-600 text-white px-2 py-1 rounded-full text-xs">3 free months</span>
                </div>
            </div>
            
            <div class="grid grid-cols-3 gap-8 max-w-6xl mx-auto">
                <!-- Free Plan -->
                <div class="bg-gray-800 rounded-2xl p-8 border border-gray-700">
                    <h3 class="text-2xl font-bold mb-2">Free</h3>
                    <div class="text-4xl font-bold mb-6">$00</div>
                    <p class="text-gray-400 mb-8">A 10X faster way to writing your professional copy</p>
                    
                    <button class="w-full bg-gray-700 text-white py-3 rounded-lg font-semibold mb-8 hover:bg-gray-600 transition-colors">
                        Choose Plan
                    </button>
                    
                    <ul class="space-y-4">
                        <li class="flex items-center space-x-3">
                            <span class="text-gray-400">✓</span>
                            <span class="text-gray-300">Simple tasks</span>
                        </li>
                        <li class="flex items-center space-x-3">
                            <span class="text-gray-400">✓</span>
                            <span class="text-gray-300">10,000 words per month</span>
                        </li>
                        <li class="flex items-center space-x-3">
                            <span class="text-gray-400">✓</span>
                            <span class="text-gray-300">30+ AI writing tools</span>
                        </li>
                        <li class="flex items-center space-x-3">
                            <span class="text-gray-400">✓</span>
                            <span class="text-gray-300">60+ Copywriting tools</span>
                        </li>
                        <li class="flex items-center space-x-3">
                            <span class="text-gray-400">✓</span>
                            <span class="text-gray-300">90+ languages</span>
                        </li>
                    </ul>
                </div>
                
                <!-- Regular Plan -->
                <div class="bg-gradient-to-b from-purple-600 to-pink-600 rounded-2xl p-8 relative transform scale-105">
                    <div class="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <span class="bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">Most Popular</span>
                    </div>
                    <h3 class="text-2xl font-bold mb-2">Regular</h3>
                    <div class="text-4xl font-bold mb-6">$89</div>
                    <p class="text-white/80 mb-8">A 30X faster way to writing your professional copy</p>
                    
                    <button class="w-full bg-white text-purple-600 py-3 rounded-lg font-semibold mb-8 hover:bg-gray-100 transition-colors">
                        Choose Plan
                    </button>
                    
                    <ul class="space-y-4">
                        <li class="flex items-center space-x-3">
                            <span class="text-white">✓</span>
                            <span class="text-white">5 User seats</span>
                        </li>
                        <li class="flex items-center space-x-3">
                            <span class="text-white">✓</span>
                            <span class="text-white">50,000 words per month</span>
                        </li>
                        <li class="flex items-center space-x-3">
                            <span class="text-white">✓</span>
                            <span class="text-white">50,000 words per month</span>
                        </li>
                        <li class="flex items-center space-x-3">
                            <span class="text-white">✓</span>
                            <span class="text-white">Blog post wizard tool