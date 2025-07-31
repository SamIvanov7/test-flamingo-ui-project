Convert the below HTML/CSS code into React components:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AI Helper</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/lucide/0.263.1/lucide.min.css">
</head>
<body class="bg-slate-900 text-white min-h-screen">
    <div class="flex">
        <!-- Sidebar -->
        <div class="w-64 bg-slate-800 min-h-screen p-4 flex flex-col">
            <!-- Logo -->
            <div class="flex items-center gap-3 mb-8">
                <div class="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                    <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                </div>
                <span class="text-xl font-semibold">Ai Helper</span>
            </div>

            <!-- New Project Button -->
            <button class="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-3 rounded-lg mb-6 flex items-center gap-2 font-medium">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
                </svg>
                New Project
            </button>

            <!-- Navigation -->
            <nav class="flex-1 space-y-2">
                <a href="#" class="flex items-center gap-3 px-3 py-2 text-gray-300 hover:text-white hover:bg-slate-700 rounded-lg">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z"/>
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5a2 2 0 012-2h4a2 2 0 012 2v0H8v0z"/>
                    </svg>
                    Dashboard
                </a>
                <a href="#" class="flex items-center gap-3 px-3 py-2 text-gray-300 hover:text-white hover:bg-slate-700 rounded-lg">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
                    </svg>
                    Chat
                </a>
                <a href="#" class="flex items-center gap-3 px-3 py-2 text-gray-300 hover:text-white hover:bg-slate-700 rounded-lg">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
                    </svg>
                    Request Feature
                </a>
                <a href="#" class="flex items-center gap-3 px-3 py-2 text-gray-300 hover:text-white hover:bg-slate-700 rounded-lg">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
                    </svg>
                    Guides
                </a>
                <a href="#" class="flex items-center gap-3 px-3 py-2 text-gray-300 hover:text-white hover:bg-slate-700 rounded-lg">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                    </svg>
                    Settings
                </a>
            </nav>

            <!-- Log Out -->
            <div class="border-t border-slate-700 pt-4">
                <a href="#" class="flex items-center gap-3 px-3 py-2 text-gray-300 hover:text-white hover:bg-slate-700 rounded-lg">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"/>
                    </svg>
                    Log Out
                </a>
            </div>
        </div>

        <!-- Main Content -->
        <div class="flex-1">
            <!-- Header -->
            <header class="bg-slate-800 p-4 flex items-center justify-between">
                <div class="flex items-center gap-4 flex-1 max-w-2xl">
                    <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                    </svg>
                    <input type="text" placeholder="What do you want to create" class="bg-transparent text-gray-300 placeholder-gray-500 flex-1 outline-none">
                </div>
                <div class="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face" alt="Profile" class="w-full h-full object-cover">
                </div>
            </header>

            <!-- Content -->
            <main class="p-6">
                <!-- Choose Template Section -->
                <section class="mb-8">
                    <h1 class="text-2xl font-semibold mb-6">Choose Template</h1>
                    
                    <!-- Template Categories -->
                    <div class="flex gap-3 mb-6 overflow-x-auto">
                        <button class="bg-slate-700 text-white px-4 py-2 rounded-full whitespace-nowrap">All Templates</button>
                        <button class="bg-slate-800 border border-slate-600 text-gray-300 px-4 py-2 rounded-full whitespace-nowrap hover:bg-slate-700">Social Media</button>
                        <button class="bg-slate-800 border border-slate-600 text-gray-300 px-4 py-2 rounded-full whitespace-nowrap hover:bg-slate-700">Digital Ads</button>
                        <button class="bg-slate-800 border border-slate-600 text-gray-300 px-4 py-2 rounded-full whitespace-nowrap hover:bg-slate-700">SEO</button>
                        <button class="bg-slate-800 border border-slate-600 text-gray-300 px-4 py-2 rounded-full whitespace-nowrap hover:bg-slate-700">Product Description</button>
                        <button class="bg-slate-800 border border-slate-600 text-gray-300 px-4 py-2 rounded-full whitespace-nowrap hover:bg-slate-700">Email Writing</button>
                        <button class="bg-slate-800 border border-slate-600 text-gray-300 px-4 py-2 rounded-full whitespace-nowrap hover:bg-slate-700">Website Copy</button>
                        <svg class="w-6 h-6 text-gray-400 flex-shrink-0 mt-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                        </svg>
                    </div>

                    <!-- Template Cards -->
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <!-- Facebook Ads Card -->
                        <div class="bg-slate-800 border border-slate-700 rounded-lg p-6 hover:border-slate-600 cursor-pointer">
                            <div class="flex items-center gap-3 mb-4">
                                <div class="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                                    <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                                    </svg>
                                </div>
                                <h3 class="text-lg font-semibold">Facebook Ads</h3>
                            </div>
                            <p class="text-gray-400 text-sm">Facebook ad copies that make your ads stand out</p>
                        </div>

                        <!-- Blog Post Ideas Card -->
                        <div class="bg-slate-800 border border-slate-700 rounded-lg p-6 hover:border-slate-600 cursor-pointer">
                            <div class="flex items-center gap-3 mb-4">
                                <div class="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center">
                                    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                                    </svg>
                                </div>
                                <h3 class="text-lg font-semibold">Blog Post Ideas</h3>
                            </div>
                            <p class="text-gray-400 text-sm">Entice your audience with captivating blog intros using our AI-powered writing techniques.</p>
                        </div>

                        <!-- Amazon Product Description Card -->
                        <div class="bg-slate-800 border border-slate-700 rounded-lg p-6 hover:border-slate-600 cursor-pointer">
                            <div class="flex items-center gap-3 mb-4">
                                <div class="w-10 h-10 bg-orange-600 rounded-lg flex items-center justify-center">
                                    <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M.045 18.02c.072-.116.187-.124.348-.022 3.636 2.11 8.206 3.166 13.666 3.166 2.814 0 5.789-.613 8.926-1.839.315-.123.57-.025.695.294.12.32-.02.573-.421.758-3.37 1.338-6.708 2.007-10.013 2.007-5.037 0-9.416-.965-13.138-2.895-.298-.154-.434-.392-.346-.615.063-.162.16-.247.283-.854zm-.706-4.32c.1-.137.25-.153.451-.047 4.06 2.29 8.82 3.435 14.28 3.435 2.909 0 5.96-.684 9.154-2.052.315-.135.566-.016.753.357.187.373-.023.674-.63.903-3.395 1.282-6.739 1.923-10.032 1.923-5.454 0-10.28-1.235-14.478-3.705-.298-.176-.407-.422-.3-.63.08-.155.178-.297.302-.184zm-.837-4.49c.128-.152.296-.178.505-.077 4.49 2.506 9.723 3.759 15.698 3.759 3.263 0 6.671-.785 10.224-2.355.315-.14.566-.017.753.37.187.386-.023.697-.63.926-3.815 1.396-7.582 2.094-11.302 2.094-6.045 0-11.677-1.347-16.896-4.041-.298-.154-.407-.406-.3-.614.08-.155.178-.297.302-.184l.646.122z"/>
                                    </svg>
                                </div>
                                <h3 class="text-lg font-semibold">Amazon Product Description</h3>
                            </div>
                            <p class="text-gray-400 text-sm">Description for amazon that ranks first on the first page.</p>
                        </div>
                    </div>
                </section>

                <!-- Generation History Section -->
                <section>
                    <div class="flex items-center justify-between mb-6">
                        <h2 class="text-2xl font-semibold">Generation History</h2>
                        <button class="text-gray-400 hover:text-white">See History</button>
                    </div>

                    <!-- History Timeline -->
                    <div class="relative">
                        <!-- Timeline Line -->
                        <div class="absolute left-4 top-8 bottom-0 w-0.5 bg-slate-700"></div>
                        
                        <!-- History Item -->
                        <div class="relative flex items-start gap-4">
                            <!-- Timeline Dot -->
                            <div class="relative z-10 w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
                                <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                                </svg>
                            </div>
                            
                            <!-- Content -->
                            <div class="flex-1 pb-8">
                                <div class="flex items-center gap-3 mb-4">
                                    <h3 class="text-lg font-medium">Social Media Post</h3>
                                    <span class="text-sm text-gray-400">20 Feb, 2023</span>
                                </div>
                                
                                <!-- Generated Content Card -->
                                <div class="bg-slate-800 border border-slate-700 rounded-lg p-6">
                                    <div class="flex items-center justify-between mb-4">
                                        <div class="flex items-center gap-2">
                                            <span class="text-gray-300">2023-03-03 Untitled</span>
                                            <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                                            </svg>
                                        </div>
                                        <div class="flex items-center gap-2">
                                            <button class="p-1 hover:bg-slate-700 rounded">
                                                <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"/>
                                                </svg>
                                            </button>
                                            <button class="p-1 hover:bg-slate-700 rounded">
                                                <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"/>
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                    
                                    <p class="text-gray-300 mb-4">Hey everyone Have you meet Ai Helper? As an Ai language model, I'm trained to answer your question and have a conversation with you ! Ask me anything, and let's get chatting !</p>
                                    
                                    <div class="flex items-center gap-4 text-sm text-gray-400">
                                        <span>5: