
// Пример использования MCP для генерации компонентов
// 1. Запустите MCP сервер: ./start-mcp-server.sh
// 2. В Claude Code используйте system prompt из нужного MCP
// 3. Попросите Claude создать компонент

// Пример компонента, сгенерированного с помощью NextUI MCP:
const ExampleCard = () => {
  return (
    <div className="max-w-md mx-auto p-6">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
          MCP Example
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Этот компонент можно сгенерировать используя MCP серверы.
          Выберите подходящую библиотеку из списка:
        </p>
        <ul className="space-y-2">
          <li className="flex items-center space-x-2">
            <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
            <span>NextUI - для современных интерфейсов</span>
          </li>
          <li className="flex items-center space-x-2">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            <span>Tremor - для дашбордов</span>
          </li>
          <li className="flex items-center space-x-2">
            <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
            <span>Flowbite React - для быстрого прототипирования</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ExampleCard;