Да, ты прав! В первом сообщении много шаблонов-примеров — не только большие блоки, но и короткие "одноразовые" промпты на разные ситуации.
Сделаю полный детальный справочник — **каждый промпт из текста**: английский оригинал, перевод, подробное описание, когда использовать. Будет идти списком по категориям, не только по большим разделам, но и все короткие примеры, как ты и хотел.

---

## 📘 **AI Prompt Reference — Справочник промптов для проектов**

---

### **1. Starting Projects / Запуск проектов**

#### 1.1 Основной промпт для старта

> **EN:**
> I need a **task management** application with:
>
> * **Tech Stack:** Next.js frontend, Tailwind CSS for styling, Supabase for auth and database.
> * **Core Features:** Project and task creation, assigning tasks to users, due date reminders, and a dashboard overview.
>   Start by building the **main dashboard page**, containing:
> * A header with navigation,
> * A list of projects with their status,
> * and a button to create a new project.
>   Provide dummy data for now, and ensure the design is clean and responsive.

> **RU:**
> Мне нужно приложение для управления задачами со следующим:
>
> * **Стек:** Next.js фронт, Tailwind CSS для стилей, Supabase для авторизации и базы.
> * **Фичи:** создание проектов и задач, назначение задач, напоминания о сроках, дашборд.
>   Начни с главной страницы дашборда:
> * Хедер с навигацией,
> * Список проектов со статусом,
> * Кнопка для создания нового проекта.
>   Пока используй тестовые данные, дизайн — чистый и адаптивный.

> **Что делает:**
> Задает структуру нового проекта, сразу ограничивает область работы (начать с дашборда).

> **Когда использовать:**
> При старте любого нового приложения.

---

### **2. Генерация компонентов и UI/UX**

#### 2.1 Создание компонента

> **EN:**
> Create a new component called \[ComponentName] with these features: \[list features]. Make it responsive and accessible with proper keyboard navigation. Include proper TypeScript typings for props, and use Tailwind for styling.

> **RU:**
> Создай компонент \[ComponentName] с такими фичами: \[список]. Сделай его адаптивным, доступным (навигация с клавиатуры), пропиши типы пропсов через TypeScript и используй Tailwind для стилей.

> **Что делает:**
> Генерирует новый компонент с нужным функционалом и стандартами.

> **Когда использовать:**
> При добавлении новых интерфейсных блоков, если важна адаптивность и доступность.

---

#### 2.2 Улучшение визуала компонента

> **EN:**
> Enhance the visual appeal of this component: \[paste component]. Add animations, improve spacing, create a polished look while maintaining accessibility standards and responsive behavior.

> **RU:**
> Улучши внешний вид этого компонента: \[код компонента]. Добавь анимации, увеличь отступы, сделай современно, сохранив доступность и адаптивность.

> **Что делает:**
> Красит, полирует, оживляет компонент — визуал, а не логику.

> **Когда использовать:**
> Если дизайн скучный/старый, нужно освежить интерфейс.

---

#### 2.3 Сделать компонент адаптивным

> **EN:**
> Transform this desktop-only component into a mobile-first design with responsive breakpoints: \[paste component]. Prioritize content and interactions for small screens first, then enhance for larger screens.

> **RU:**
> Переделай этот компонент с десктопа на mobile-first: \[код]. В приоритете удобство на малых экранах, потом — доработка для больших.

> **Что делает:**
> Перестраивает компоненты под адаптив, mobile-first.

> **Когда использовать:**
> Если компонент плохо смотрится/не работает на телефоне.

---

#### 2.4 Улучшить пользовательский поток

> **EN:**
> Analyze and optimize the user flow for \[describe task/goal]. Map out each step of the journey, identify friction points, and suggest UI improvements to create a more intuitive experience with fewer steps.

> **RU:**
> Проанализируй и оптимизируй пользовательский сценарий для \[описание задачи]. Разбей на шаги, найди точки “торможения” и предложи, как сделать интерфейс проще и быстрее.

> **Что делает:**
> Помогает найти и устранить "узкие места" в UX, делает путь пользователя короче и удобнее.

> **Когда использовать:**
> При проектировании новых функций, доработке UX, анализе воронки.

---

#### 2.5 Аудит доступности

> **EN:**
> Review these components for accessibility issues and suggest improvements: \[paste components]. Check for proper keyboard navigation, screen reader support, sufficient color contrast, and appropriate ARIA attributes.

> **RU:**
> Проверь эти компоненты на доступность: \[код]. Проанализируй навигацию с клавиатуры, поддержку скрин-ридеров, контраст цветов, ARIA-атрибуты. Предложи улучшения.

> **Что делает:**
> Делает интерфейс более доступным для всех пользователей.

> **Когда использовать:**
> После завершения верстки, если важна инклюзивность, WCAG.

---

#### 2.6 Добавить анимации

> **EN:**
> Add subtle, performant animations to this component to enhance user experience: \[paste component]. Include enter/exit animations, hover states, and micro-interactions that provide feedback without being distracting.

> **RU:**
> Добавь лёгкие, быстрые анимации в этот компонент: \[код]. Реализуй анимацию появления/ухода, состояния наведения, микровзаимодействия для фидбека — не отвлекая от работы.

> **Что делает:**
> Добавляет "живости", делает UI более современным.

> **Когда использовать:**
> Для оживления интерфейса, но без тяжёлых/раздражающих эффектов.

---

### **3. Responsiveness / Адаптивность**

#### 3.1 Глобальный адаптив

> **EN:**
> Our app needs to be **fully responsive** across mobile, tablet, and desktop.
>
> * Follow a **mobile-first** strategy: prioritize the layout for small screens, then adjust for larger screens.
> * Use modern UI/UX best practices for responsive design. (For Tailwind CSS, use the standard breakpoints `sm, md, lg, xl` – no custom breakpoints unless necessary.)
> * Ensure every page (especially the dashboard and project detail pages) reflows properly on a small screen: elements should stack or resize as needed, text should remain readable, and no content should overflow off-screen.
> * **Do not change the core design or functionality**, just make sure it flexibly adapts to different screen sizes.
>   After making changes, please double-check the layout at iPhone 12 dimensions and a typical desktop width.

> **RU:**
> Приложение должно быть полностью адаптивным — телефон, планшет, десктоп.
>
> * Действуй по mobile-first: сперва маленькие экраны.
> * Используй стандартные брейкпоинты Tailwind.
> * Проверь, чтобы всё корректно перестраивалось, не вылезало за экран, текст читался.
> * Дизайн и функциональность не менять — только адаптивность.
>   Проверь результат на iPhone 12 и на обычном мониторе.

---

### **4. Refactoring / Рефакторинг**

#### 4.1 Рефакторинг файла

> **EN:**
> Refactor this file for clarity and efficiency, but do not alter its functionality or output.

> **RU:**
> Приведи этот файл в порядок — повысить читаемость и эффективность, ничего не меняя в работе/выводе.

---

#### 4.2 Рефакторинг с деталями

> **EN:**
> Refactor the **ProjectList component file**, but **keep its behavior and UI exactly the same**.
> Goals:
>
> * Improve the code structure and readability (simplify complex functions, break into smaller ones if needed).
> * Remove any unused variables or imports.
> * Ensure the file follows best practices and is well-documented.
>   Do **not** introduce any new features or change how the component works for the user – this is purely a code cleanup for maintainability. If any part of the code is unclear, add a brief comment for clarification.

> **RU:**
> Проведи рефакторинг файла ProjectList, чтобы поведение и UI остались прежними.
> Цели:
>
> * Улучшить структуру кода и читаемость;
> * Удалить лишние переменные/импорты;
> * Соблюдай лучшие практики и комментируй всё сложное.
>   Не добавляй новых фич, не меняй работу для пользователя — только уборка кода.

---

#### 4.3 Ревью кода

> **EN:**
> Review this code and suggest improvements for readability, performance, and maintainability: \[paste code]. Focus on TypeScript best practices, proper error handling, and adherence to React patterns.

> **RU:**
> Проверь этот код и предложи улучшения по читаемости, производительности и поддерживаемости: \[код]. Удели внимание best practices TypeScript, обработке ошибок, стандартам React.

---

#### 4.4 Структура проекта

> **EN:**
> Suggest a folder structure for a \[type] application with these features: \[list features]. Include guidelines for organizing components, hooks, utilities, and types with proper separation of concerns.

> **RU:**
> Предложи структуру папок для приложения типа \[тип] с такими фичами: \[фичи]. Объясни, как раскладывать компоненты, хуки, утилиты, типы по папкам.

---

#### 4.5 Ошибка — анализ и решение

> **EN:**
> I'm getting this error: \[paste error]. Here's the relevant code: \[paste code]. Can you help me understand what's causing it and how to fix it? Please explain why the solution works.

> **RU:**
> У меня ошибка: \[ошибка]. Вот код: \[код]. Объясни причину и подскажи, как починить. Объясни, почему решение работает.

---

### **5. App Types / Типовые проекты**

#### 5.1 Интернет-магазин

> **EN:**
> Create a starter e-commerce store with product listing, search, filtering, cart functionality, and checkout process. Include user accounts, order history, and basic product management. Focus on a clean, conversion-oriented UI.

> **RU:**
> Создай стартовый интернет-магазин: каталог, поиск, фильтры, корзина, оформление заказа. Пользовательские аккаунты, история заказов, базовое управление товарами. Чистый UI для продаж.

---

#### 5.2 CMS

> **EN:**
> Build a basic CMS for managing blog posts or articles with an admin dashboard. Include features for creating, editing, and publishing content with rich text formatting, image uploads, and basic SEO management.

> **RU:**
> Создай простую CMS для управления постами/статьями с админкой. Добавь создание, редактирование, публикацию с форматированием текста, загрузкой картинок и базовым SEO.

---

#### 5.3 Доска задач

> **EN:**
> Create a project management app with task boards, lists, and cards. Include features for task assignment, due dates, labels, comments, and progress tracking. Implement drag-and-drop functionality and user collaboration.

> **RU:**
> Создай приложение для управления проектами: доски, списки, карточки задач. Возможность назначать задачи, дедлайны, лейблы, комментарии, отслеживать прогресс. Реализуй drag-and-drop и коллаборацию.

---

#### 5.4 Соцсеть

> **EN:**
> Build a social media feed component with posts, comments, likes, and sharing functionality. Include user profiles, follow/unfollow mechanics, and a notification system. Ensure the design is responsive and supports infinite scrolling.

> **RU:**
> Сделай компонент ленты соцсети: посты, комментарии, лайки, шаринг. Профили, подписки/отписки, система уведомлений. Дизайн — адаптивный, поддержка бесконечной прокрутки.

---

#### 5.5 Дашборд аналитики

> **EN:**
> Create an analytics dashboard with multiple chart types (bar, line, pie), data filtering options, date range selection, and exportable reports. Include responsive design and skeleton loading states for data fetching.

> **RU:**
> Собери дашборд аналитики: разные графики (столбцы, линии, круги), фильтры данных, выбор дат, экспорт отчетов. Сделай дизайн адаптивным, с skeleton-загрузкой данных.

---

#### 5.6 SaaS-стартер

> **EN:**
> Build a SaaS application starter with user authentication, subscription management, a settings page, and a basic dashboard. Include role-based access control, account management, and a well-structured architecture for future expansion.

> **RU:**
> Собери стартер SaaS: авторизация, управление подписками, страница настроек, базовый дашборд. Реализуй роли, управление аккаунтами, продумай архитектуру под масштабирование.

---

#### 5.7 Чат-бот

> **EN:**
> Create a chat interface with an AI assistant that helps users with \[describe task/purpose]. Include conversation history, typing indicators, message threading, and the ability to provide feedback on AI responses.

> **RU:**
> Реализуй чат с AI-ассистентом для \[задача/цель]. Сделай историю сообщений, индикатор набора, треды, возможность оставлять фидбек по ответам AI.

---

#### 5.8 Генерация контента

> **EN:**
> Build a tool that uses AI to generate \[describe content type] based on user inputs and parameters. Include options to refine the generated content, save favorites, and export in different formats.

> **RU:**
> Сделай сервис, где AI генерирует \[тип контента] по параметрам пользователя. Добавь настройку генерации, сохранение избранного, экспорт в разные форматы.

---

#### 5.9 Рекомендации

> **EN:**
> Implement a recommendation component for \[describe items] based on user behavior and preferences. Include the ability to provide feedback on recommendations, see why items were recommended, and discover new options.

> **RU:**
> Сделай блок рекомендаций для \[тип объектов] с учётом поведения и предпочтений пользователя. Добавь фидбек, объяснения рекомендаций и функцию открытия новых вариантов.

---

#### 5.10 Улучшенный поиск

> **EN:**
> Enhance the search experience for \[describe content] with AI-powered features like natural language understanding, semantic search, and intelligent ranking of results. Include search suggestions and auto-complete.

> **RU:**
> Прокачай поиск по \[контент] с помощью AI — понимание естественного языка, семантический поиск, умная сортировка результатов. Добавь подсказки и автокомплит.

---

#### 5.11 AI-дешборд

> **EN:**
> Create a dashboard that uses AI to analyze \[describe data] and present insights in an accessible way. Include visualizations, plain-language explanations of trends, and the ability to ask questions about the data.

> **RU:**
> Сделай дашборд, где AI анализирует \[данные] и выдаёт понятные инсайты: графики, текстовые пояснения трендов, возможность задать вопрос по данным.

---

#### 5.12 Персонализация

> **EN:**
> Implement a system for personalizing the user experience based on behavior and preferences. Include customizable UI elements, content recommendations, and settings that allow users to control their personalization.

> **RU:**
> Реализуй персонализацию интерфейса по интересам и привычкам: настраиваемые элементы UI, рекомендации контента, настройки управления персонализацией.

---

### **6. React Development / Разработка на React**

#### 6.1 Кастомный хук

> **EN:**
> Create a custom React hook called use\[Name] that handles \[functionality]. It should handle proper state initialization, cleanup, memoization of values, and TypeScript typing. Include example usage and error handling.

> **RU:**
> Напиши кастомный React-хук use\[Name] для \[функция]. Обеспечь инициализацию состояния, очистку, мемоизацию, типизацию через TypeScript. Пример использования и обработка ошибок — обязательно.

---

#### 6.2 Контекст вместо проп-дриллинга

> **EN:**
> Refactor this component to use React Context instead of prop drilling: \[paste component]. Create a proper context provider with typed state and actions, and separate the business logic from UI rendering.

> **RU:**
> Переделай этот компонент под Context вместо передачи пропсов: \[код]. Сделай провайдер с типами состояния и экшенов, раздели бизнес-логику и рендеринг.

---

#### 6.3 Оптимизация рендеров

> **EN:**
> Optimize this React component to prevent unnecessary re-renders: \[paste component]. Use memo, useMemo, and useCallback where appropriate. Add explanatory comments about why each optimization is needed.

> **RU:**
> Оптимизируй этот React-компонент — убери лишние рендеры: \[код]. Применяй memo/useMemo/useCallback там, где нужно. Прокомментируй, зачем каждая оптимизация.

---

#### 6.4 Валидация формы

> **EN:**
> Create a form with validation for \[describe form fields and validation rules]. Use react-hook-form with zod schema validation, proper error handling, and submission handling that includes loading states.

> **RU:**
> Создай форму с валидацией по правилам: \[описание полей и правил]. Используй react-hook-form и zod-схему, реализуй обработку ошибок и статусы загрузки при отправке.

---

#### 6.5 Паттерн загрузки данных

> \*\*


EN:\*\*

> Implement a data fetching pattern for \[describe the data] using React Query. Include proper loading states, error handling, optimistic updates, and data synchronization strategies.

> **RU:**
> Реализуй загрузку данных для \[описание данных] через React Query. Учти статусы загрузки, обработку ошибок, оптимистичные обновления, синхронизацию данных.

---

#### 6.6 Анимации перехода

> **EN:**
> Create a smooth transition animation for \[describe the element] when it \[describe the action]. Use CSS transitions or Framer Motion, ensuring the animation works well across devices and doesn't harm performance.

> **RU:**
> Сделай плавную анимацию для \[элемент] при \[действие]. Используй CSS transition или Framer Motion, чтобы анимация работала везде и не тормозила.

---

### **7. Locking Files / Limiting Scope / Ограничение области**

#### 7.1 Ограничение зоны изменений

> **EN:**
> Please **focus only on the Dashboard page** for this change.
>
> * Do **not modify** the `LoginPage.tsx` or `AuthProvider.tsx` files at all (authentication is working well, and we want to keep it intact).
> * Concentrate your code edits on `Dashboard.tsx` and related dashboard components **only**.
>   Task: Add a new section to the Dashboard that shows “Tasks due this week”. Make sure to fetch the relevant tasks from the database.
>   *(Again, no changes to login or auth files – those are off-limits.)*

> **RU:**
> Работай только с Dashboard.
>
> * Не трогай `LoginPage.tsx` и `AuthProvider.tsx` (авторизация работает, менять не надо).
> * Меняй только `Dashboard.tsx` и его компоненты.
>   Добавь секцию “Задачи на этой неделе” с данными из базы.
>   *(Повторяю — логин не трогай!)*

---

### **8. Planning / Планирование**

#### 8.1 План перед кодом

> **EN:**
> Before writing any code, **plan out the implementation** of the new Notifications feature.
>
> * List each step required to add email notifications when a task is overdue.
> * Consider both frontend (UI changes, if any) and backend (creating scheduled checks or triggers) aspects.
> * Ensure the plan keeps the current functionality stable – we can’t break anything existing.
> * Provide the plan as an ordered list (1, 2, 3, ...), with a brief explanation of each step.
>   Once you outline the plan, pause for review. **Do not make any code changes yet.**

> **RU:**
> Прежде чем писать код, опиши план внедрения уведомлений:
>
> * Распиши шаги для email-уведомлений по просроченным задачам;
> * Учти фронт и бэк;
> * Стабильность фичи не нарушать!
> * Дай пошаговый план (1,2,3…) и поясни каждый пункт.
>   После — остановись, не пиши код без одобрения.

---
9. Stripe Setup / Интеграция Stripe
9.1 Добавление Stripe-платежей

    EN:
    I want to add Stripe payments to the app.

        Use Stripe in test mode for now.

        We have a product in Stripe with ID prod_12345 and a price ID price_67890 (one-time purchase).

        Implement a checkout button on the Pricing page that starts a Stripe checkout for that product.

        After successful payment, redirect the user to /payment-success. If the payment is canceled, redirect to /payment-cancelled.
        Important:

        Assume API keys and webhook secrets are configured securely (do not hard-code them).

        Do not modify any other pages or features unrelated to payments.
        Once done, provide any webhook endpoint setup instructions I need (e.g., URL to add in Stripe dashboard for post-payment events).

    RU:
    Я хочу добавить Stripe-платежи в приложение.

        Используй Stripe в тестовом режиме.

        У нас есть продукт с ID prod_12345 и price ID price_67890 (разовая покупка).

        Реализуй кнопку оплаты на странице “Pricing”, чтобы открыть Stripe-оплату для этого товара.

        После успешной оплаты перенаправлять на /payment-success, если отменили — на /payment-cancelled.
        Важно:

        API-ключи и вебхуки считаем настроенными (не хардкодить!).

        Не менять другие страницы и фичи.
        После напиши, какие webhook endpoints добавить в Stripe-кабинете.

    Что делает:
    Добавляет Stripe, интегрирует кнопки и обработку событий.

    Когда использовать:
    Когда внедряешь оплату через Stripe.

10. Supabase & Backend / Работа с Supabase и бэкендом
10.1 Визуальная доработка компонента

    EN:
    Enhance the visual appeal of this component: [paste component]. Add animations, improve spacing, create a polished look while maintaining accessibility standards and responsive behavior.

    RU:
    Улучши внешний вид компонента: [код]. Добавь анимации, увеличь отступы, сохрани адаптивность и доступность.

10.2 Проектирование схемы БД

    EN:
    Design a database schema for [describe your application] with these entity relationships: [describe relationships]. Include foreign key constraints, indexes for performance, and proper data types with considerations for scalability.

    RU:
    Продумай схему базы данных для [описание приложения] со следующими связями: [описание связей]. Добавь внешние ключи, индексы, выбери подходящие типы данных для масштабируемости.

10.3 Сервис для API

    EN:
    Create a service to fetch data from [API name] and implement caching, error retry logic, and request throttling. Set up proper TypeScript interfaces for the response data and handle API versioning gracefully.

    RU:
    Реализуй сервис для получения данных из [название API] с кэшированием, логикой повторных попыток при ошибке и ограничением частоты запросов. Пропиши интерфейсы данных на TypeScript, учти версионирование API.

10.4 Row Level Security

    EN:
    Create Row Level Security policies for a multi-tenant application with these tables: [list tables]. Implement proper user isolation, role-based access, and handle hierarchical data access with considerations for performance.

    RU:
    Настрой политику Row Level Security для мультиарендного приложения (таблицы: [список]). Реализуй изоляцию данных пользователей, разграничение доступа по ролям, учти вложенные права доступа и производительность.

10.5 Edge Function

    EN:
    Create a Supabase Edge Function to handle [describe functionality] with proper error handling, input validation, and security checks. Include rate limiting and proper environment variable usage.

    RU:
    Реализуй Supabase Edge Function для [описание фичи] с валидацией входных данных, обработкой ошибок, проверкой безопасности. Добавь ограничение запросов и использование переменных окружения.

10.6 Реалтайм-синхронизация

    EN:
    Implement real-time data synchronization for [describe feature] using Supabase subscriptions. Handle connection management, graceful degradation when offline, and conflict resolution.

    RU:
    Добавь реалтайм-синхронизацию для [описание] через подписки Supabase. Обеспечь устойчивое соединение, обработку оффлайна, разрешение конфликтов.

10.7 Поиск с фильтрацией

    EN:
    Implement a robust search feature for [describe content type] with filtering, sorting, and highlighting of matched terms. Include typeahead suggestions, recent searches, and proper handling of no-results scenarios.

    RU:
    Реализуй мощный поиск по [тип данных] с фильтрацией, сортировкой и подсветкой совпадений. Добавь автодополнение, историю запросов, обработку “ничего не найдено”.

10.8 Таблица данных

    EN:
    Create a data table/grid for [describe data] with sorting, filtering, pagination, column resizing, and row selection. Include features for exporting data and customizing visible columns.

    RU:
    Сделай таблицу/грид для [описание данных] с сортировкой, фильтрами, пагинацией, изменяемой шириной столбцов, выбором строк. Реализуй экспорт и настройку видимых столбцов.

10.9 Импорт/экспорт данных

    EN:
    Build a system for importing and exporting [describe data] in various formats (CSV, JSON, etc.). Include validation, progress indicators, error handling, and the ability to map fields during import.

    RU:
    Сделай систему импорта/экспорта [данные] в разных форматах (CSV, JSON и др.). Добавь валидацию, прогрессбар, обработку ошибок, сопоставление полей при импорте.

10.10 Графики

    EN:
    Create a set of interactive charts for [describe data/metrics] using Recharts. Include different visualization types (bar, line, pie), time period selection, drill-down capabilities, and responsive behavior.

    RU:
    Сделай набор интерактивных графиков для [метрики/данные] через Recharts: разные типы (столбцы, линии, круги), выбор периода, детализация по клику, адаптивность.

10.11 Offline Sync

    EN:
    Implement a strategy for synchronizing offline data changes with a backend when connectivity is restored. Handle conflict resolution, optimistic UI updates, and provide visual indicators for sync status.

    RU:
    Реализуй синхронизацию оффлайн-данных с сервером после восстановления сети. Добавь разрешение конфликтов, оптимистичные обновления UI, индикатор статуса синхронизации.

10.12 Мультистеп-форма

    EN:
    Create a multi-step form wizard for collecting [describe data] with validation, progress tracking, the ability to save drafts, and a summary review before submission. Handle conditional form fields based on previous answers.

    RU:
    Реализуй мастер-форму из нескольких шагов для сбора [данные] с валидацией, отслеживанием прогресса, сохранением черновика, итоговым просмотром перед отправкой. Учти условия видимости полей на основе предыдущих ответов.

11. Workflow / Рабочий процесс
11.1 Github + CI/CD

    EN:
    Connect this Lovable project to GitHub and set up a good workflow for contributions. Include branch protection rules, PR templates, and CI/CD workflow configuration with automatic preview deployments.

    RU:
    Подключи проект к GitHub, настроить рабочий процесс для командной работы: защита веток, шаблоны PR, CI/CD и автоматический предпросмотр деплоя.

11.2 Рефакторинг больших компонентов

    EN:
    Refactor this large component into smaller, more manageable components: [paste component]. Extract reusable parts, implement proper prop passing, maintain state management, and ensure the refactoring doesn't break existing functionality.

    RU:
    Разбей большой компонент на мелкие, переиспользуемые: [код]. Вынеси повторяющиеся части, правильно прокидывай пропсы, сохрани состояние и работоспособность.

11.3 Стратегия тестирования

    EN:
    Suggest a testing strategy for [component/feature] including what to test and how. Include unit tests for business logic, integration tests for data flow, and UI tests for critical user flows with best practices for mocking dependencies.

    RU:
    Предложи стратегию тестирования для [компонент/фича]: что и как тестировать. Добавь юнит-тесты для логики, интеграционные для потоков данных, UI-тесты для ключевых сценариев, лучшие практики мокирования.

11.4 Обработка ошибок для async-функции

    EN:
    Implement comprehensive error handling for this async function: [paste function]. Include retry logic, fallback mechanisms, proper error reporting, user-friendly error messages, and logging for debugging purposes.

    RU:
    Реализуй полноценную обработку ошибок для этой async-функции: [код]. Добавь логику повторов, фоллбеки, отчёт об ошибках, дружелюбные сообщения для пользователя, логирование для дебага.

11.5 CI/CD Pipeline

    EN:
    Set up a deployment pipeline for this application that includes staging and production environments, automatic database migrations, environment-specific configurations, and rollback capabilities.

    RU:
    Настрой pipeline для деплоя: стейджинг/прод, автоматические миграции БД, разные настройки для окружений, возможность отката.

11.6 Анализ UX-потока

    EN:
    Analyze and optimize this user flow: [describe flow]. Suggest improvements for user experience, reduce friction points, implement progressive enhancement, and ensure accessibility throughout.

    RU:
    Проанализируй и оптимизируй этот пользовательский поток: [описание]. Предложи улучшения UX, убери точки “торможения”, реализуй постепенное улучшение, проконтролируй доступность.

12. Chat Mode vs Default Mode / Обсуждение vs Мгновенные изменения
12.1 Анализ в чат-режиме

    EN:
    I’m seeing some deprecated library warnings. What parts of the code might be outdated, and how should we update them?

    RU:
    Вижу предупреждения о старых библиотеках. Какие части кода устарели и как их лучше обновить?

12.2 Объяснить ошибку

    EN:
    What does this error mean, and how can we fix it?

    RU:
    Что значит эта ошибка и как её исправить?

12.3 Анализ проекта перед изменениями

    EN:
    Review the app and tell me where there is outdated code.

    RU:
    Проверь приложение и скажи, где есть устаревший код.

13. Knowledge Base & PRD / База знаний и требования к проекту
13.1 Подтвердить понимание ТЗ

    EN:
    Before you write any code, please review the Knowledge Base and share your understanding of my project.

    RU:
    Прежде чем писать код, прочитай Knowledge Base и объясни, как ты понимаешь мой проект.

13.2 Обновление Knowledge Base

    EN:
    I have updated the Knowledge Base with new feature requirements. Review them and summarize the changes before proceeding.

    RU:
    Я обновил Knowledge Base — добавил новые требования к фичам. Прочитай их и подытожь изменения перед тем, как что-то делать.