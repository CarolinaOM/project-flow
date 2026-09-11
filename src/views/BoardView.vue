<script setup lang="ts">
import { ref, computed } from 'vue'
import { useKanbanStore } from '../stores/useKanbanStore'
import TaskModal from '../components/TaskModal.vue'

const kanbanStore = useKanbanStore()
const isModalOpen = ref(false)

// Filtrar tareas por columna de forma dinámica
const todoTasks = computed(() => kanbanStore.tasks.filter(t => t.column === 'todo'))
const inProgressTasks = computed(() => kanbanStore.tasks.filter(t => t.column === 'in-progress'))
const doneTasks = computed(() => kanbanStore.tasks.filter(t => t.column === 'done'))

// Función de color según la prioridad
function getPriorityClass(priority: string) {
  switch (priority) {
    case 'Urgente': return 'bg-red-900 text-red-300'
    case 'Media': return 'bg-yellow-900 text-yellow-300'
    case 'Baja': return 'bg-green-900 text-green-300'
    default: return 'bg-gray-700 text-gray-300'
  }
}

const handleAddTask = (taskData: any) => {
  kanbanStore.addTask(taskData)
}
</script>

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
        <button 
          @click="isModalOpen = true"
          class="bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-2 rounded text-sm font-medium transition cursor-pointer"
        >
          + Nueva Tarea
        </button>
      </header>

      <div class="flex-1 bg-gray-900 p-6 flex gap-6 overflow-x-auto">
        
        <div class="w-80 bg-gray-800/60 rounded-lg p-4 flex flex-col border border-gray-700">
          <div class="flex justify-between items-center mb-4">
            <h3 class="font-semibold text-gray-300">Por Hacer</h3>
            <span class="bg-gray-700 text-xs px-2 py-1 rounded-full text-gray-300">{{ todoTasks.length }}</span>
          </div>
          <div class="space-y-3 flex-1 overflow-y-auto">
            <div 
              v-for="task in todoTasks" 
              :key="task.id"
              class="bg-gray-800 p-3 rounded border border-gray-700 shadow hover:border-emerald-500 cursor-pointer transition"
            >
              <span :class="['text-xs px-2 py-0.5 rounded font-medium', getPriorityClass(task.priority)]">
                {{ task.priority }}
              </span>
              <p class="mt-2 text-sm font-medium">{{ task.title }}</p>
              <p v-if="task.description" class="mt-1 text-xs text-gray-400">{{ task.description }}</p>
            </div>
          </div>
        </div>

        <div class="w-80 bg-gray-800/60 rounded-lg p-4 flex flex-col border border-gray-700">
          <div class="flex justify-between items-center mb-4">
            <h3 class="font-semibold text-gray-300">En Proceso</h3>
            <span class="bg-gray-700 text-xs px-2 py-1 rounded-full text-gray-300">{{ inProgressTasks.length }}</span>
          </div>
          <div class="space-y-3 flex-1 overflow-y-auto">
            <div 
              v-for="task in inProgressTasks" 
              :key="task.id"
              class="bg-gray-800 p-3 rounded border border-gray-700 shadow hover:border-emerald-500 cursor-pointer transition"
            >
              <span :class="['text-xs px-2 py-0.5 rounded font-medium', getPriorityClass(task.priority)]">
                {{ task.priority }}
              </span>
              <p class="mt-2 text-sm font-medium">{{ task.title }}</p>
              <p v-if="task.description" class="mt-1 text-xs text-gray-400">{{ task.description }}</p>
            </div>
          </div>
        </div>

        <div class="w-80 bg-gray-800/60 rounded-lg p-4 flex flex-col border border-gray-700">
          <div class="flex justify-between items-center mb-4">
            <h3 class="font-semibold text-gray-300">Hecho</h3>
            <span class="bg-gray-700 text-xs px-2 py-1 rounded-full text-gray-300">{{ doneTasks.length }}</span>
          </div>
          <div class="space-y-3 flex-1 overflow-y-auto">
            <div 
              v-for="task in doneTasks" 
              :key="task.id"
              class="bg-gray-800 p-3 rounded border border-gray-700 shadow hover:border-emerald-500 cursor-pointer transition"
            >
              <span :class="['text-xs px-2 py-0.5 rounded font-medium', getPriorityClass(task.priority)]">
                {{ task.priority }}
              </span>
              <p class="mt-2 text-sm font-medium">{{ task.title }}</p>
              <p v-if="task.description" class="mt-1 text-xs text-gray-400">{{ task.description }}</p>
            </div>
          </div>
        </div>

      </div>
    </main>

    <TaskModal :is-open="isModalOpen" @close="isModalOpen = false" @add="handleAddTask" />
  </div>
</template>