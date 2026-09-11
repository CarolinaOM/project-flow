<template>
  <div class="flex h-screen bg-gray-900 text-white">
    <aside class="w-64 bg-gray-800 border-r border-gray-700 p-4 flex flex-col justify-between">
      <div>
        <h1 class="text-xl font-bold text-emerald-400 mb-6 flex items-center gap-2">
          🚀 ProjectFlow
        </h1>
        <nav class="space-y-2">
          <a href="#" class="block px-3 py-2 rounded bg-emerald-600 text-white font-medium">Tablero</a>
          <a href="#" class="block px-3 py-2 rounded text-gray-400 hover:bg-gray-700 hover:text-white">Mis Tareas</a>
          <a href="#" class="block px-3 py-2 rounded text-gray-400 hover:bg-gray-700 hover:text-white">Reportes</a>
        </nav>
      </div>
      <div class="text-sm text-gray-400">
        <p>Sesión activa</p>
        <p class="font-semibold text-white">Desarrollador</p>
      </div>
    </aside>

    <main class="flex-1 flex flex-col overflow-hidden">
      <header class="h-16 bg-gray-800 border-b border-gray-700 flex items-center justify-between px-6">
        <h2 class="text-lg font-semibold">Tablero General del Proyecto</h2>
        <button class="bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-2 rounded text-sm font-medium transition">
          + Nueva Tarea
        </button>
      </header>

      <div class="flex-1 bg-gray-900 p-6 flex gap-6 overflow-x-auto">
        <div class="w-80 bg-gray-800/60 rounded-lg p-4 flex flex-col border border-gray-700">
          <div class="flex justify-between items-center mb-4">
            <h3 class="font-semibold text-gray-300">Por Hacer</h3>
            <span class="bg-gray-700 text-xs px-2 py-1 rounded-full text-gray-300">2</span>
          </div>
          <div class="space-y-3 flex-1 overflow-y-auto">
            <div class="bg-gray-800 p-3 rounded border border-gray-700 shadow hover:border-emerald-500 cursor-pointer transition">
              <span class="text-xs bg-red-900 text-red-300 px-2 py-0.5 rounded font-medium">Urgente</span>
              <p class="mt-2 text-sm">Diseñar la interfaz de autenticación</p>
            </div>
          </div>
        </div>

        <div class="w-80 bg-gray-800/60 rounded-lg p-4 flex flex-col border border-gray-700">
          <div class="flex justify-between items-center mb-4">
            <h3 class="font-semibold text-gray-300">En Proceso</h3>
            <span class="bg-gray-700 text-xs px-2 py-1 rounded-full text-gray-300">1</span>
          </div>
          <div class="space-y-3 flex-1 overflow-y-auto">
            <div class="bg-gray-800 p-3 rounded border border-gray-700 shadow hover:border-emerald-500 cursor-pointer transition">
              <span class="text-xs bg-yellow-900 text-yellow-300 px-2 py-0.5 rounded font-medium">Media</span>
              <p class="mt-2 text-sm">Configurar rutas y Tailwind CSS</p>
            </div>
          </div>
        </div>

        <div class="w-80 bg-gray-800/60 rounded-lg p-4 flex flex-col border border-gray-700">
          <div class="flex justify-between items-center mb-4">
            <h3 class="font-semibold text-gray-300">Hecho</h3>
            <span class="bg-gray-700 text-xs px-2 py-1 rounded-full text-gray-300">1</span>
          </div>
          <div class="space-y-3 flex-1 overflow-y-auto">
            <div class="bg-gray-800 p-3 rounded border border-gray-700 shadow hover:border-emerald-500 cursor-pointer transition">
              <span class="text-xs bg-green-900 text-green-300 px-2 py-0.5 rounded font-medium">Baja</span>
              <p class="mt-2 text-sm">Inicializar proyecto con Vite y Vue 3</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>