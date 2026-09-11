<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{
  isOpen: boolean
}>()

const emit = defineEmits(['close', 'add'])

const title = ref('')
const description = ref('')
const priority = ref<'Baja' | 'Media' | 'Urgente'>('Media')
const column = ref<'todo' | 'in-progress' | 'done'>('todo')

const handleSubmit = () => {
  if (!title.value.trim()) return

  emit('add', {
    title: title.value,
    description: description.value,
    priority: priority.value,
    column: column.value
  })

  // Limpiar campos y cerrar modal
  title.value = ''
  description.value = ''
  priority.value = 'Media'
  column.value = 'todo'
  emit('close')
}
</script>

<template>
  <div v-if="isOpen" class="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
    <div class="w-full max-w-md p-6 bg-white rounded-xl shadow-2xl border border-gray-100 text-gray-800">
      <div class="flex justify-between items-center mb-4">
        <h3 class="text-lg font-bold">Crear Nueva Tarea</h3>
        <button @click="$emit('close')" class="text-gray-400 hover:text-gray-600 font-bold text-xl cursor-pointer">&times;</button>
      </div>

      <form @submit.prevent="handleSubmit" class="space-y-4">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Título</label>
          <input 
            v-model="title" 
            type="text" 
            required
            placeholder="Ej: Investigar librería de gráficos" 
            class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none text-gray-900 bg-white"
          />
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Descripción</label>
          <textarea 
            v-model="description" 
            rows="2"
            placeholder="Detalles adicionales..." 
            class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none text-gray-900 bg-white"
          ></textarea>
        </div>

        <div class="grid grid-cols-2 gap-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Prioridad</label>
            <select 
              v-model="priority" 
              class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none text-gray-900 bg-white cursor-pointer"
            >
              <option value="Baja">Baja</option>
              <option value="Media">Media</option>
              <option value="Urgente">Urgente</option>
            </select>
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Columna</label>
            <select 
              v-model="column" 
              class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none text-gray-900 bg-white cursor-pointer"
            >
              <option value="todo">Por Hacer</option>
              <option value="in-progress">En Progreso</option>
              <option value="done">Hecho</option>
            </select>
          </div>
        </div>

        <div class="flex justify-end gap-3 mt-6">
          <button 
            type="button" 
            @click="$emit('close')"
            class="px-4 py-2 text-sm font-medium text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200 transition cursor-pointer"
          >
            Cancelar
          </button>
          <button 
            type="submit"
            class="px-4 py-2 text-sm font-medium text-white bg-emerald-600 rounded-lg hover:bg-emerald-700 transition shadow-md cursor-pointer"
          >
            Guardar Tarea
          </button>
        </div>
      </form>
    </div>
  </div>
</template>