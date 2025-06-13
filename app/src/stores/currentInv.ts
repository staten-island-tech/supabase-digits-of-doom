import { defineStore } from 'pinia'
import { ref, watchEffect } from 'vue'
import { supabase } from '../supabase'
import { useAuthStore } from './authStore'

export const useInventoryStore = defineStore('currentinventory', () => {
  const authStore = useAuthStore()
  const selectedOperationList = ref<{ name: string; element: string; operation: string }[]>([])

  const fetchInventory = async () => {
    if (!authStore.id) return

    const { data, error } = await supabase
      .from('users')
      .select('current_inventory')
      .eq('id', authStore.id)
      .single()

    if (error) {
      console.error('Error fetching inventory:', error)
      return
    }

    selectedOperationList.value = data.current_inventory || []
  }

  watchEffect(() => {
    if (authStore.id) {
      fetchInventory()
    }
  })

  async function addOperation(operation: { name: string; element: string; operation: string }) {
    if (selectedOperationList.value.some(op => op.name === operation.name)) {
      alert('Operation already selected.')
      return
    }

    if (selectedOperationList.value.length >= 3) {
      selectedOperationList.value.shift()
    }

    selectedOperationList.value.push(operation)

    if (!authStore.id) {
      console.warn('User not authenticated')
      return
    }

    const { error } = await supabase
      .from('users')
      .update({ current_inventory: selectedOperationList.value }) 
      .eq('id', authStore.id)

    if (error) {
      console.error('Failed to update inventory:', error)
    }
  }

  return { selectedOperationList, addOperation, fetchInventory }
})
