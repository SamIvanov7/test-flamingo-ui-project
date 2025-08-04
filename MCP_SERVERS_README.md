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