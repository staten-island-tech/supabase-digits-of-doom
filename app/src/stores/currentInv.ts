import { defineStore } from 'pinia'
import { ref } from 'vue'
import { supabase } from '../supabase'
import { useAuthStore } from './authStore'

export const useInventoryStore = defineStore('inventory', () => {
  const selectedOperationList = ref<{ name: string }[]>([])
  const authStore = useAuthStore()

  async function loadInventory() {
    if (!authStore.id) {
      console.error('No user ID found in authStore')
      return
    }

    const { data, error } = await supabase
      .from('users')
      .select('current_inventory')
      .eq('id', authStore.id)
      .single()

    if (error) {
      console.error('Failed to load inventory:', error)
    } else if (data?.current_inventory) {
      selectedOperationList.value = data.current_inventory
    } else {
      selectedOperationList.value = []
    }
  }

  async function addOperation(operation: { name: string }) {
    if (selectedOperationList.value.some(op => op.name === operation.name)) {
      alert('Operation already selected.')
      return
    }

    if (selectedOperationList.value.length >= 3) {
      selectedOperationList.value.shift()
    }

    selectedOperationList.value.push(operation)

    if (!authStore.id) {
      console.error('No user ID found in authStore')
      return
    }

    const { error } = await supabase
      .from('users')
      .update({ currentInventory: selectedOperationList.value })
      .eq('id', authStore.id)

    if (error) {
      console.error('Failed to update inventory:', error)
    }
  }

  return { selectedOperationList, addOperation, loadInventory }
})
