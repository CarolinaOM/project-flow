import { defineStore } from 'pinia'
import { ref } from 'vue'

export interface Task {
  id: string
  title: string
  priority: 'Urgente' | 'Media' | 'Baja'
  column: 'todo' | 'in-progress' | 'done'
}

export const useKanbanStore = defineStore('kanban', () => {
  const tasks = ref<Task[]>([
    { id: '1', title: 'Diseñar la interfaz de autenticación', priority: 'Urgente', column: 'todo' },
    { id: '2', title: 'Configurar rutas y Tailwind CSS', priority: 'Media', column: 'in-progress' },
    { id: '3', title: 'Inicializar proyecto con Vite y Vue 3', priority: 'Baja', column: 'done' }
  ])

  function addTask(title: string, priority: Task['priority']) {
    tasks.value.push({
      id: Date.now().toString(),
      title,
      priority,
      column: 'todo'
    })
  }

  return { tasks, addTask }
})