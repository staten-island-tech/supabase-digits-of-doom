import { defineStore } from 'pinia'
import { ref } from 'vue'
import { supabase } from '../supabase'
import { useAuthStore } from './authStore'

export const useInventoryStore = defineStore('currentinventory', () => {
  const authStore = useAuthStore()
  const selectedOperationList = ref<{ name: string }[]>([])

  async function addOperation(operation: { name: string }) {
    if (selectedOperationList.value.some(op => op.name === operation.name)) {
      alert('Operation already selected.')
      return
    }

    if (selectedOperationList.value.length >= 3) {
      selectedOperationList.value.shift()
    }

    selectedOperationList.value.push(operation)

    const { error } = await supabase
      .from('users')
      .update({ current_inventory: selectedOperationList })
      .eq('id', authStore.id)

    if (error) {
      console.error('Failed to update inventory:', error)
    }
  }

  return { selectedOperationList, addOperation }
})


