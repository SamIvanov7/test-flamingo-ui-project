# MCP Servers для Tailwind UI библиотек

Набор из 11 MCP-серверов для работы с популярными Tailwind CSS библиотеками компонентов в Claude Code.

## Доступные MCP-серверы

1. **ReactComponents** - Utility-first Tailwind + React Components
2. **21st.dev** - Sleek minimalist components
3. **Sailboat UI** - 150+ компонентов + Alpine.js
4. **HyperUI** - Copy-paste HTML/Tailwind snippets
5. **Preline UI** - 60+ компонентов, dark-mode ready
6. **Tremor** - Dashboards & visualisation
7. **NextUI** - High-performance React components
8. **Park UI** - Cross-framework components
9. **Float UI** - Responsive Tailwind components
10. **TailGrids** - 600+ компонентов
11. **Flowbite React** - 100+ бесплатных компонентов

## Как использовать

### Вариант 1: Локальный сервер

1. Запустите MCP сервер:
```bash
node mcp-server.js
```

2. Сервер будет доступен на `http://localhost:3000`

3. Endpoints:
   - `GET /mcp` - список всех доступных MCP-серверов
   - `GET /mcp/:name` - получить конкретный MCP-сервер

### Вариант 2: Прямое использование в Claude Code

1. Откройте нужный JSON файл из папки `mcp_servers/`
2. Скопируйте содержимое поля `system_prompt`
3. Вставьте в System prompt вашей сессии Claude Code
4. Используйте примеры из `example_user` и `example_assistant` для лучших результатов

## Примеры использования

### С NextUI:
```
User: Создай форму регистрации с валидацией
Claude: [создаст форму используя компоненты NextUI]
```

### С Tremor:
```
User: Покажи дашборд с графиками продаж
Claude: [создаст дашборд с графиками из Tremor]
```

## Структура MCP файла

```json
{
  "title": "Название MCP",
  "description": "Описание",
  "system_prompt": "Инструкции для Claude",
  "example_user": "Пример запроса",
  "example_assistant": "Пример ответа"
}
```

## Быстрый старт

### Запуск сервера
```bash
# Установить зависимости
npm install express

# Запустить сервер
./start-mcp-server.sh

# Остановить сервер
./stop-mcp-server.sh
```

### Тестирование
```bash
# Получить список всех MCP
curl http://localhost:3000/mcp

# Получить конкретный MCP
curl http://localhost:3000/mcp/nextui
curl http://localhost:3000/mcp/tremor
```

## Рекомендации

1. **Выбор библиотеки**: Выбирайте MCP в зависимости от задачи:
   - Дашборды → Tremor
   - Современный UI → NextUI, 21st.dev
   - Копипаст → HyperUI, TailGrids
   - Полнофункциональные → Flowbite React, Preline

2. **Комбинирование**: Можно комбинировать несколько библиотек в одном проекте

3. **Кастомизация**: Все компоненты поддерживают дополнительную стилизацию через Tailwind классы

4. **Производительность**: Для production используйте tree-shaking и импортируйте только нужные компоненты

## Интеграция с Claude Code

### Метод 1: Через System Prompt
1. Откройте нужный файл из `mcp_servers/`
2. Скопируйте содержимое `system_prompt`
3. Вставьте в начало вашего промпта в Claude Code

### Метод 2: Через HTTP (если поддерживается)
```
open("http://localhost:3000/mcp/nextui")
```

## Примеры сгенерированного кода

Посмотрите файл `src/examples/MCPExample.tsx` для примера компонента.


🤝 Third-Party Servers

🎖️ Official Integrations

Official integrations are maintained by companies building production ready MCP servers for their platforms.
	•	
	•	 21st.dev Magic - Create crafted UI components inspired by the best 21st.dev design engineers.
	•	
	•	 ActionKit by Paragon - Connect to 130+ SaaS integrations (e.g. Slack, Salesforce, Gmail) with Paragon’s ActionKit API.
	•	
	•	 Adfin - The only platform you need to get paid - all payments in one place, invoicing and accounting reconciliations with Adfin.
	•	
	•	 AgentQL - Enable AI agents to get structured data from unstructured web with AgentQL.
	•	
	•	 AgentRPC - Connect to any function, any language, across network boundaries using AgentRPC.
	•	Agentset - RAG for your knowledge base connected to Agentset.
	•	
	•	 Aiven - Navigate your Aiven projects and interact with the PostgreSQL®, Apache Kafka®, ClickHouse® and OpenSearch® services
	•	
	•	 Alation - Unlock the power of the enterprise Data Catalog by harnessing tools provided by the Alation MCP server.
	•	
	•	 Alby Bitcoin Payments - Connect any bitcoin lightning wallet to your agent to send and receive instant payments globally with your agent.
	•	Algolia - Use AI agents to provision, configure, and query your Algolia search indices.
	•	
	•	 Alibaba Cloud AnalyticDB for MySQL - Connect to a AnalyticDB for MySQL cluster for getting database or table metadata, querying and analyzing data.It will be supported to add the openapi for cluster operation in the future.
	•	
	•	 Alibaba Cloud AnalyticDB for PostgreSQL - An MCP server to connect to AnalyticDB for PostgreSQL instances, query and analyze data.
	•	
	•	 Alibaba Cloud DataWorks - A Model Context Protocol (MCP) server that provides tools for AI, allowing it to interact with the DataWorks Open API through a standardized interface. This implementation is based on the Alibaba Cloud Open API and enables AI agents to perform cloud resources operations seamlessly.
	•	
	•	 Alibaba Cloud OpenSearch - This MCP server equips AI Agents with tools to interact with OpenSearch through a standardized and extensible interface.
	•	
	•	 Alibaba Cloud OPS - Manage the lifecycle of your Alibaba Cloud resources with CloudOps Orchestration Service and Alibaba Cloud OpenAPI.
	•	
	•	 Alibaba Cloud RDS - An MCP server designed to interact with the Alibaba Cloud RDS OpenAPI, enabling programmatic management of RDS resources via an LLM.
	•	
	•	 AlipayPlus - Connect your AI Agents to AlipayPlus Checkout Payment.
	•	
	•	 AllVoiceLab - An AI voice toolkit with TTS, voice cloning, and video translation, now available as an MCP server for smarter agent integration.
	•	
	•	 Alpaca – Alpaca's MCP server lets you trade stocks and options, analyze market data, and build strategies through Alpaca's Trading API
	•	
	•	 AlphaVantage - Connect to 100+ APIs for financial market data, including stock prices, fundamentals, and more from AlphaVantage
	•	
	•	 Antom - Connect your AI Agents to Antom Checkout Payment.
	•	
	•	 Apache Doris - MCP Server For Apache Doris, an MPP-based real-time data warehouse.
	•	
	•	 Apache IoTDB - MCP Server for Apache IoTDB database and its tools
	•	Apache Pinot – MCP server for running real - time analytics queries on Apache Pinot, an open-source OLAP database built for high-throughput, low-latency powering real-time applications.
	•	
	•	 Apify - Actors MCP Server: Use 3,000+ pre-built cloud tools to extract data from websites, e-commerce, social media, search engines, maps, and more
	•	
	•	 APIMatic MCP - APIMatic MCP Server is used to validate OpenAPI specifications using APIMatic. The server processes OpenAPI files and returns validation summaries by leveraging APIMatic's API.
	•	
	•	 Apollo MCP Server - Connect your GraphQL APIs to AI agents
	•	
	•	 Aqara MCP Server - Control Aqara smart home devices, query status, execute scenes, and much more using natural language.
	•	
	•	 Archbee - Write and publish documentation that becomes the trusted source for instant answers with AI. Stop cobbling tools and use Archbee — the first complete documentation platform.
	•	
	•	 Arize Phoenix - Inspect traces, manage prompts, curate datasets, and run experiments using Arize Phoenix, an open-source AI and LLM observability tool.
	•	
	•	 Armor Crypto MCP - MCP to interface with multiple blockchains, staking, DeFi, swap, bridging, wallet management, DCA, Limit Orders, Coin Lookup, Tracking and more.
	•	
	•	 Asgardeo - MCP server to interact with your Asgardeo organization through LLM tools.
	•	
	•	 Astra DB - Comprehensive tools for managing collections and documents in a DataStax Astra DB NoSQL database with a full range of operations such as create, update, delete, find, and associated bulk actions.
	•	
	•	 Atla - Enable AI agents to interact with the Atla API for state-of-the-art LLMJ evaluation.
	•	
	•	 Atlan - The Atlan Model Context Protocol server allows you to interact with the Atlan services through multiple tools.
	•	
	•	 Atlassian - Securely interact with Jira work items and Confluence pages, and search across both.
	•	
	•	 AtomGit - Official AtomGit server for integration with repository management, PRs, issues, branches, labels, and more.
	•	
	•	 Audiense Insights - Marketing insights and audience analysis from Audiense reports, covering demographic, cultural, influencer, and content engagement analysis.
	•	
	•	 Auth0 - MCP server for interacting with your Auth0 tenant, supporting creating and modifying actions, applications, forms, logs, resource servers, and more.
	•	
	•	 Authenticator App · 2FA - A secure MCP (Model Context Protocol) server that enables AI agents to interact with the Authenticator App.
	•	
	•	 AWS - Specialized MCP servers that bring AWS best practices directly to your development workflow.
	•	
	•	 Axiom - Query and analyze your Axiom logs, traces, and all other event data in natural language
	•	
	•	 Azure - The Azure MCP Server gives MCP Clients access to key Azure services and tools like Azure Storage, Cosmos DB, the Azure CLI, and more.
	•	
	•	 Baidu Map - Baidu Map MCP Server provides tools for AI agents to interact with Baidu Maps APIs, enabling location-based services and geospatial data analysis.
	•	
	•	 Bankless Onchain - Query Onchain data, like ERC20 tokens, transaction history, smart contract state.
	•	
	•	 BICScan - Risk score / asset holdings of EVM blockchain address (EOA, CA, ENS) and even domain names.
	•	
	•	 Bitrise - Chat with your builds, CI, and more.
	•	
	•	 BoldSign - Search, request, and manage e-signature contracts effortlessly with BoldSign.
	•	
	•	 Boost.space - An MCP server integrating with Boost.space for centralized, automated business data from 2000+ sources.
	•	
	•	 Box - Interact with the Intelligent Content Management platform through Box AI.
	•	
	•	 BrightData - Discover, extract, and interact with the web - one interface powering automated access across the public internet.
	•	
	•	 Browserbase - Automate browser interactions in the cloud (e.g. web navigation, data extraction, form filling, and more)
	•	
	•	 BrowserStack - Access BrowserStack's Test Platform to debug, write and fix tests, do accessibility testing and more.
	•	
	•	 Bucket - Flag features, manage company data, and control feature access using Bucket
	•	
	•	 Buildkite - Exposing Buildkite data (pipelines, builds, jobs, tests) to AI tooling and editors.
	•	
	•	Buildable (TypeScript) - Official MCP server for Buildable AI-powered development platform. Enables AI assistants to manage tasks, track progress, get project context, and collaborate with humans on software projects.
	•	
	•	 BuiltWith - Identify the technology stack behind any website.
	•	
	•	 Burp Suite - MCP Server extension allowing AI clients to connect to Burp Suite
	•	
	•	 Campertunity - Search campgrounds around the world on campertunity, check availability, and provide booking links.
	•	
	•	 Canva — Provide AI - powered development assistance for Canva apps and integrations.
	•	
	•	 Cartesia - Connect to the Cartesia voice platform to perform text-to-speech, voice cloning etc.
	•	
	•	 Cashfree - Cashfree Payments official MCP server.
	•	CB Insights - Use the CB Insights MCP Server to connect to ChatCBI
	•	
	•	 Chargebee - MCP Server that connects AI agents to Chargebee platform.
	•	
	•	 Cheqd - Enable AI Agents to be trusted, verified, prevent fraud, protect your reputation, and more through cheqd's Trust Registries and Credentials.
	•	
	•	 Chiki StudIO - Create your own configurable MCP servers purely via configuration (no code), with instructions, prompts, and tools support.
	•	
	•	 Chroma - Embeddings, vector search, document storage, and full-text search with the open-source AI application database
	•	
	•	 Chronulus AI - Predict anything with Chronulus AI forecasting and prediction agents.
	•	
	•	 CircleCI - Enable AI Agents to fix build failures from CircleCI.
	•	
	•	 ClickHouse - Query your ClickHouse database server.
	•	
	•	 CloudBase - One-stop backend services for WeChat Mini-Programs and full-stack apps with serverless cloud functions and databases by Tencent CloudBase
	•	
	•	 CloudBees - Enable AI access to your CloudBees Unify environment.
	•	
	•	 Cloudera Iceberg - enabling AI on the Open Data Lakehouse.
	•	
	•	 Cloudflare - Deploy, configure & interrogate your resources on the Cloudflare developer platform (e.g. Workers/KV/R2/D1)
	•	
	•	 Cloudinary - Exposes Cloudinary's media upload, transformation, AI analysis, management, optimization and delivery as tools usable by AI agents
	•	
	•	 Codacy - Interact with Codacy API to query code quality issues, vulnerabilities, and coverage insights about your code.
	•	
	•	 CodeLogic - Interact with CodeLogic, a Software Intelligence platform that graphs complex code and data architecture dependencies, to boost AI accuracy and insight.
	•	
	•	 CoinGecko - Official CoinGecko API MCP Server for Crypto Price & Market Data, across 200+ Blockchain Networks and 8M+ Tokens.
	•	
	•	 Comet Opik - Query and analyze your Opik logs, traces, prompts and all other telemetry data from your LLMs in natural language.
	•	
	•	 
	•	
	•	Conductor - Interact with Conductor (OSS and Orkes) REST APIs.
	•	
	•	 Confluent - Interact with Confluent Kafka and Confluent Cloud REST APIs.
	•	
	•	 Contrast Security - Brings Contrast's vulnerability and SCA data into your coding agent to quickly remediate vulnerabilities.
	•	
	•	 Convex - Introspect and query your apps deployed to Convex.
	•	
	•	 Couchbase - Interact with the data stored in Couchbase clusters.
	•	
	•	 CRIC Wuye AI - Interact with capabilities of the CRIC Wuye AI platform, an intelligent assistant specifically for the property management industry.
	•	
	•	 Cycode - Boost security in your dev lifecycle via SAST, SCA, Secrets & IaC scanning with Cycode.
	•	
	•	 Dart - Interact with task, doc, and project data in Dart, an AI-native project management tool
	•	
	•	 CTERA Portal - CTERA Portal is a multi-tenant, multi-cloud platform that delivers a global namespace and unified management across petabytes of distributed content.
	•	
	•	 CTERA Edge Filer - CTERA Edge Filer delivers intelligent edge caching and multiprotocol file access, enabling fast, secure access to files across core and remote sites.
	•	
	•	 DataHub - Search your data assets, traverse data lineage, write SQL queries, and more using DataHub metadata.
	•	
	•	 Daytona - Fast and secure execution of your AI generated code with Daytona sandboxes
	•	
	•	 Debugg.AI - Zero-Config, Fully AI-Managed End-to-End Testing for any code gen platform via Debugg.AI remote browsing test agents.
	•	
	•	 DeepL - Translate or rewrite text with DeepL's very own AI models using the DeepL API
	•	
	•	 Defang - Deploy your project to the cloud seamlessly with the Defang platform without leaving your integrated development environment
	•	
	•	 Detailer – Instantly generate rich, AI-powered documentation for your GitHub repositories. Designed for AI agents to gain deep project context before taking action.
	•	
	•	 DevHub - Manage and utilize website content within the DevHub CMS platform
	•	
	•	 DevRev - An MCP server to integrate with DevRev APIs to search through your DevRev Knowledge Graph where objects can be imported from diff. Sources listed here.
	•	
	•	 DexPaprika (CoinPaprika) - Access real-time DEX data, liquidity pools, token information, and trading analytics across multiple blockchain networks with DexPaprika by CoinPaprika.
	•	
	•	 Drata - Get hands-on with our experimental MCP server—bringing real-time compliance intelligence into your AI workflows.
	•	
	•	 Dumpling AI - Access data, web scraping, and document conversion APIs by Dumpling AI
	•	
	•	 Dynatrace - Manage and interact with the Dynatrace Platform for real-time observability and monitoring.
	•	
	•	 E2B - Run code in secure sandboxes hosted by E2B
	•	
	•	 Edgee - Deploy and manage Edgee components and projects
	•	
	•	 EduBase - Interact with EduBase, a comprehensive e-learning platform with advanced quizzing, exam management, and content organization capabilities
	•	
	•	 Elasticsearch - Query your data in Elasticsearch
	•	
	•	 Endor Labs - Find and fix security risks in you code. Integrate Endor Labs to scan and secure your code from vulnerabilities and secret leaks.
	•	
	•	 eSignatures - Contract and template management for drafting, reviewing, and sending binding contracts.
	•	
	•	 Exa - Search Engine made for AIs by Exa
	•	FalkorDB - FalkorDB graph database server get schema and read/write-cypher FalkorDB
	•	
	•	 fetchSERP - All-in-One SEO & Web Intelligence Toolkit API fetchSERP
	•	
	•	 Fewsats - Enable AI Agents to purchase anything in a secure way using Fewsats
	•	
	•	 Fibery - Perform queries and entity operations in your Fibery workspace.
	•	
	•	 Financial Datasets - Stock market API made for AI agents
	•	
	•	 Firebase - Firebase's experimental MCP Server to power your AI Tools
	•	
	•	 Firecrawl - Extract web data with Firecrawl
	•	
	•	 Firefly - Integrates, discovers, manages, and codifies cloud resources with Firefly.
	•	
	•	 Fireproof - Immutable ledger database with live synchronization
	•	
	•	 FIXParser - A modern FIX Protocol engine for AI-powered trading agents
	•	
	•	 Fluid Attacks - Interact with the Fluid Attacks API, enabling vulnerability management, organization insights, and GraphQL query execution.
	•	
	•	 ForeverVM - Run Python in a code sandbox.
	•	
	•	 GibsonAI - AI-Powered Cloud databases: Build, migrate, and deploy database instances with AI
	•	
	•	 Gitea - Interact with Gitea instances with MCP.
	•	
	•	 Gitee - Gitee API integration, repository, issue, and pull request management, and more.
	•	
	•	 GitGuardian - GitGuardian official MCP server - Scan projects using GitGuardian's industry-leading API, which features over 500 secret detectors to prevent credential leaks before they reach public repositories. Resolve security incidents directly with rich contextual data for rapid, automated remediation.
	•	
	•	 GitHub - GitHub's official MCP Server.
	•	
	•	 Glean - Enterprise search and chat using Glean's API.
	•	
	•	 Globalping - Access a network of thousands of probes to run network commands like ping, traceroute, mtr, http and DNS resolve.
	•	
	•	 gNucleus Text-To-CAD - Generate CAD parts and assemblies from text using gNucleus AI models.
	•	
	•	 Google Cloud Run - Deploy code to Google Cloud Run
	•	
	•	 GoLogin MCP server - Manage your GoLogin browser profiles and automation directly through AI conversations!
	•	
	•	 gotoHuman - Human-in-the-loop platform - Allow AI agents and automations to send requests for approval to your gotoHuman inbox.
	•	
	•	 Grafana - Search dashboards, investigate incidents and query datasources in your Grafana instance
	•	
	•	 Grafbase - Turn your GraphQL API into an efficient MCP server with schema intelligence in a single command.
	•	
	•	 Grain - Access your Grain meetings notes & transcripts directly in claude and generate reports with native Claude Prompts.
	•	
	•	 Graphlit - Ingest anything from Slack to Gmail to podcast feeds, in addition to web crawling, into a searchable Graphlit project.
	•	
	•	 GreptimeDB - Provides AI assistants with a secure and structured way to explore and analyze data in GreptimeDB.
	•	
	•	 GROWI - Official MCP Server to integrate with GROWI APIs.
	•	
	•	 Gyazo - Search, fetch, upload, and interact with Gyazo images, including metadata and OCR data.
	•	
	•	 Harper - An MCP server providing an interface for MCP clients to access data within Harper.
	•	
	•	 Heroku - Interact with the Heroku Platform through LLM-driven tools for managing apps, add-ons, dynos, databases, and more.
	•	
	•	 Hiveflow - Create, manage, and execute agentic AI workflows directly from your assistant.
	•	
	•	 Hologres - Connect to a Hologres instance, get table metadata, query and analyze data.
	•	
	•	 Homebrew Allows Homebrew users to run Homebrew commands locally.
	•	
	•	 Honeycomb Allows Honeycomb Enterprise customers to query and analyze their data, alerts, dashboards, and more; and cross-reference production behavior with the codebase.
	•	
	•	 HubSpot - Connect, manage, and interact with HubSpot CRM data
	•	
	•	 Hugging Face - Connect to the Hugging Face Hub APIs programmatically: semantic search for spaces and papers, exploration of datasets and models, and access to all compatible MCP Gradio tool spaces!
	•	
	•	 Hunter - Interact with the Hunter API to get B2B data using natural language.
	•	
	•	 Hyperbolic - Interact with Hyperbolic's GPU cloud, enabling agents and LLMs to view and rent available GPUs, SSH into them, and run GPU-powered workloads for you.
	•	
	•	 Hyperbrowser - Hyperbrowser is the next-generation platform empowering AI agents and enabling effortless, scalable browser automation.
	•	IBM wxflows - Tool platform by IBM to build, test and deploy tools for any data source
	•	
	•	 Inbox Zero - AI personal assistant for email Inbox Zero
	•	
	•	 Inflectra Spira - Connect to your instance of the SpiraTest, SpiraTeam or SpiraPlan application lifecycle management platform by Inflectra
	•	
	•	 Inkeep - RAG Search over your content powered by Inkeep
	•	
	•	 Integration App - Interact with any other SaaS applications on behalf of your customers.
	•	
	•	 IP2Location.io - Interact with IP2Location.io API to retrieve the geolocation information for an IP address.
	•	
	•	 JetBrains – Work on your code with JetBrains IDEs
	•	
	•	 JFrog - Model Context Protocol (MCP) Server for the JFrog Platform API, enabling repository management, build tracking, release lifecycle management, and more.
	•	
	•	 Kagi Search - Search the web using Kagi's search API
	•	
	•	 Keboola - Build robust data workflows, integrations, and analytics on a single intuitive platform.
	•	
	•	 KeywordsPeopleUse.com - Find questions people ask online with KeywordsPeopleUse.
	•	
	•	 Klavis ReportGen - Create professional reports from a simple user query.
	•	
	•	 Klaviyo - Interact with your Klaviyo marketing data.
	•	
	•	 kluster.ai - kluster.ai provides MCP servers that bring AI services directly into your development workflow, including guardrails like hallucination detection.
	•	
	•	 Knit MCP Server - Production-ready remote MCP servers that enable you to connect with 10000+ tools across CRM, HRIS, Payroll, Accounting, ERP, Calendar, Expense Management, and Chat categories.
	•	
	•	 Knock MCP Server - Send product and customer messaging across email, in-app, push, SMS, Slack, MS Teams.
	•	
	•	 KurrentDB - This is a simple MCP server to help you explore data and prototype projections faster on top of KurrentDB.
	•	
	•	 Kuzu - This server enables LLMs to inspect database schemas and execute queries on the provided Kuzu graph database. See blog) for a debugging use case.
	•	
	•	 KWDB - Reading, writing, querying, modifying data, and performing DDL operations with data in your KWDB Database.
	•	
	•	 Label Studio - Open Source data labeling platform.
	•	
	•	 Lambda Capture - Macroeconomic Forecasts & Semantic Context from Federal Reserve, Bank of England, ECB.
	•	
	•	 Langfuse Prompt Management - Open-source tool for collaborative editing, versioning, evaluating, and releasing prompts.
	•	
	•	 Lara Translate - MCP Server for Lara Translate API, enabling powerful translation capabilities with support for language detection and context-aware translations.
	•	
	•	 Last9 - Seamlessly bring real-time production context—logs, metrics, and traces—into your local environment to auto-fix code faster.
	•	
	•	 LaunchDarkly - LaunchDarkly is a continuous delivery platform that provides feature flags as a service and allows developers to iterate quickly and safely.
	•	
	•	 LINE - Integrates the LINE Messaging API to connect an AI Agent to the LINE Official Account.
	•	
	•	 Linear - Search, create, and update Linear issues, projects, and comments.
	•	
	•	 Lingo.dev - Make your AI agent speak every language on the planet, using Lingo.dev Localization Engine.
	•	
	•	 LinkedIn MCP Runner - Write, edit, and schedule LinkedIn posts right from ChatGPT and Claude with LiGo.
	•	
	•	 Lisply - Flexible frontend for compliant Lisp-speaking backends.
	•	
	•	 Litmus.io - Official MCP server for configuring Litmus Edge for Industrial Data Collection, Edge Analytics & Industrial AI.
	•	
	•	 Liveblocks - Ready‑made features for AI & human collaboration—use this to develop your Liveblocks app quicker.
	•	
	•	 Logfire - Provides access to OpenTelemetry traces and metrics through Logfire.
	•	
	•	 Magic Meal Kits - Unleash Make's Full Potential by Magic Meal Kits
	•	
	•	 Mailgun - Interact with Mailgun API.
	•	
	•	 Mailjet - Official MCP server which allows AI agents to interact with contact, campaign, segmentation, statistics, workflow (and more) APIs from Sinch Mailjet.
	•	
	•	 Make - Turn your Make scenarios into callable tools for AI assistants.
	•	
	•	 Mapbox - Unlock geospatial intelligence through Mapbox APIs like geocoding, POI search, directions, isochrones and more.
	•	
	•	 MariaDB - A standard interface for managing and querying MariaDB databases, supporting both standard SQL operations and advanced vector/embedding-based search.
	•	
	•	 MCP Discovery - A lightweight CLI tool built in Rust for discovering MCP server capabilities.
	•	
	•	 MCP Toolbox for Databases - Open source MCP server specializing in easy, fast, and secure tools for Databases. Supports AlloyDB, BigQuery, Bigtable, Cloud SQL, Dgraph, MySQL, Neo4j, Postgres, Spanner, and more.
	•	
	•	 Meilisearch - Interact & query with Meilisearch (Full-text & semantic search API)
	•	
	•	 Memgraph - Query your data in Memgraph graph database.
	•	
	•	 Mercado Libre - Mercado Libre's official MCP server.
	•	
	•	 Mercado Pago - Mercado Pago's official MCP server.
	•	
	•	 Metoro - Query and interact with kubernetes environments monitored by Metoro
	•	
	•	 Microsoft Clarity - Official MCP Server to get your behavioral analytics data and insights from Clarity
	•	
	•	 Microsoft Dataverse - Chat over your business data using NL - Discover tables, run queries, retrieve data, insert or update records, and execute custom prompts grounded in business knowledge and context.
	•	
	•	 Microsoft Learn Docs - An MCP server that provides structured access to Microsoft’s official documentation. Retrieves accurate, authoritative, and context-aware technical content for code generation, question answering, and workflow grounding.
	•	
	•	 Milvus - Search, Query and interact with data in your Milvus Vector Database.
	•	
	•	 Mobb - The Mobb Vibe Shield MCP server identifies and remediates vulnerabilities in both human and AI-written code, ensuring your applications remain secure without slowing development.
	•	
	•	 Momento - Momento Cache lets you quickly improve your performance, reduce costs, and handle load at any scale.
	•	
	•	 MongoDB - Both MongoDB Community Server and MongoDB Atlas are supported.
	•	
	•	 MotherDuck - Query and analyze data with MotherDuck and local DuckDB
	•	
	•	 Mulesoft - Build, deploy, and manage MuleSoft applications with natural language, directly inside any compatible IDE.
	•	
	•	 NanoVMs - Easily Build and Deploy unikernels to any cloud.
	•	
	•	 Needle - Production-ready RAG out of the box to search and retrieve data from your own documents.
	•	
	•	 Neo4j - Neo4j graph database server (schema + read/write-cypher) and separate graph database backed memory
	•	
	•	 Neo4j GDS - Neo4j graph data science server with comprehensive graph algorithms that enables complex graph reasoning and Q&A.
	•	
	•	 Neon - Interact with the Neon serverless Postgres platform
	•	
	•	 Nerve - Search and Act on all your company data across all your SaaS apps via Nerve
	•	
	•	 Netdata - Discovery, exploration, reporting and root cause analysis using all observability data, including metrics, logs, systems, containers, processes, and network connections
	•	
	•	 Netlify - Create, build, deploy, and manage your websites with Netlify web platform.
	•	
	•	 Nile - An MCP server that talks to Nile - Postgres re-engineered for B2B apps. Manage and query databases, tenants, users, auth using LLMs
	•	
	•	 Nodit - Official Nodit MCP Server enabling access to multi-chain RPC Nodes and Data APIs for blockchain data.
	•	
	•	 Norman Finance - MCP server for managing accounting and taxes with Norman Finance.
	•	
	•	 Notion - This project implements an MCP server for the Notion API.
	•	
	•	 Nutrient - Create, Edit, Sign, Extract Documents using Natural Language
	•	
	•	 Nx - Makes Nx's understanding of your codebase accessible to LLMs, providing insights into the codebase architecture, project relationships and runnable tasks thus allowing AI to make precise code suggestions.
	•	
	•	 OceanBase - MCP Server for OceanBase database and its tools
	•	
	•	 Octagon - Deliver real-time investment research with extensive private and public market data.
	•	
	•	 OctoEverywhere - A 3D Printing MCP server that allows for querying for live state, webcam snapshots, and 3D printer control.
	•	
	•	 Offorte - Offorte Proposal Software official MCP server enables creation and sending of business proposals.
	•	
	•	 OlaMaps - Official Ola Maps MCP Server for services like geocode, directions, place details and many more.
	•	
	•	 ONLYOFFICE DocSpace - Interact with ONLYOFFICE DocSpace API to create rooms, manage files and folders.
	•	
	•	 OP.GG - Access real-time gaming data across popular titles like League of Legends, TFT, and Valorant, offering champion analytics, esports schedules, meta compositions, and character statistics.
	•	
	•	 OpenMetadata - The first Enterprise-grade MCP server for metadata
	•	
	•	 OpenSearch - MCP server that enables AI agents to perform search and analytics use cases on data stored in OpenSearch.
	•	
	•	 OpsLevel - Official MCP Server for OpsLevel.
	•	
	•	 Optuna - Official MCP server enabling seamless orchestration of hyperparameter search and other optimization tasks with Optuna.
	•	
	•	 Orshot - Official Orshot MCP server to dynamically generate images from custom design templates.
	•	
	•	 Oxylabs - Scrape websites with Oxylabs Web API, supporting dynamic rendering and parsing for structured data extraction.
	•	
	•	 Paddle - Interact with the Paddle API. Manage product catalog, billing and subscriptions, and reports.
	•	PaddleOCR - An MCP server that brings enterprise-grade OCR and document parsing capabilities to AI applications.
	•	
	•	 PagerDuty - Interact with your PagerDuty account, allowing you to manage incidents, services, schedules, and more directly from your MCP-enabled client.
	•	Pagos - Interact with the Pagos API. Query Credit Card BIN Data with more to come.
	•	
	•	 PAIML MCP Agent Toolkit - Professional project scaffolding toolkit with zero-configuration AI context generation, template generation for Rust/Deno/Python projects, and hybrid neuro-symbolic code analysis.
	•	
	•	 Paper - Realistic paper trading platform with market simulation, 22 broker emulations, and professional tools for risk-free trading practice. First trading platform with MCP integration.
	•	Patronus AI - Test, evaluate, and optimize AI agents and RAG apps
	•	
	•	 PayPal - PayPal's official MCP server.
	•	
	•	 Pearl - Official MCP Server to interact with Pearl API. Connect your AI Agents with 12,000+ certified experts instantly.
	•	
	•	 Perplexity - An MCP server that connects to Perplexity's Sonar API, enabling real-time web-wide research in conversational AI.
	•	
	•	 Pinecone - Pinecone's developer MCP Server assist developers in searching documentation and managing data within their development environment.
	•	
	•	 Pinecone Assistant - Retrieves context from your Pinecone Assistant knowledge base.
	•	
	•	 Pipedream - Connect with 2,500 APIs with 8,000+ prebuilt tools.
	•	
	•	 PlayCanvas - Create interactive 3D web apps with the PlayCanvas Editor.
	•	
	•	 Plugged.in - A comprehensive proxy that combines multiple MCP servers into a single MCP. It provides discovery and management of tools, prompts, resources, and templates across servers, plus a playground for debugging when building MCP servers.
	•	
	•	 Port IO - Access and manage your software catalog to improve service quality and compliance.
	•	PostHog - Interact with PostHog analytics, feature flags, error tracking and more with the official PostHog MCP server.
	•	Postman API - Manage your Postman resources using the Postman API.
	•	
	•	 Powerdrill - An MCP server that provides tools to interact with Powerdrill datasets, enabling smart AI data analysis and insights.
	•	
	•	 Prisma - Create and manage Prisma Postgres databases
	•	
	•	 Probe.dev - Comprehensive media analysis and validation powered by Probe.dev. Hosted MCP server with FFprobe, MediaInfo, and Probe Report analysis capabilities.
	•	
	•	 PromptHouse - Personal prompt library with MCP integration for AI clients.
	•	
	•	 proxymock - An MCP server that automatically generates tests and mocks by recording a live app.
	•	
	•	 PubNub - Retrieves context for developing with PubNub SDKs and calling APIs.
	•	
	•	 Pulumi - Deploy and manage cloud infrastructure using Pulumi.
	•	
	•	 Pure.md - Reliably access web content in markdown format with pure.md (bot detection avoidance, proxy rotation, and headless JS rendering built in).
	•	
	•	 Put.io - Interact with your Put.io account to download torrents.
