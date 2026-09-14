import { defineStore } from 'pinia'
import { ref } from 'vue'

export interface Task {
  id: number
  title: string
  description?: string
  priority: 'Baja' | 'Media' | 'Urgente'
  column: 'todo' | 'in-progress' | 'done'
}

export const useKanbanStore = defineStore('kanban', () => {
  const tasks = ref<Task[]>([
    { id: 1, title: 'Diseñar la interfaz de autenticación', description: 'Crear vistas de login y registro', priority: 'Urgente', column: 'todo' },
    { id: 2, title: 'Configurar rutas y Tailwind CSS', description: 'Instalar estilos y definir vistas', priority: 'Media', column: 'in-progress' },
    { id: 3, title: 'Inicializar proyecto con Vite y Vue 3', description: 'Configuración inicial del repositorio', priority: 'Baja', column: 'done' }
  ])

  function addTask(taskData: Omit<Task, 'id'>) {
    tasks.value.push({
      id: Date.now(),
      ...taskData
    })
  }

  function moveTask(taskId: number, newColumn: 'todo' | 'in-progress' | 'done') {
    const task = tasks.value.find(t => t.id === taskId)
    if (task) {
      task.column = newColumn
    }
  }

  function deleteTask(taskId: number) {
    tasks.value = tasks.value.filter(t => t.id !== taskId)
  }

  return { tasks, addTask, moveTask, deleteTask }
})