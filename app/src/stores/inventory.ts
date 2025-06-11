import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useInventoryStore = defineStore('inventory', () => {
  const selectedOperationList = ref<string[]>([])

  function addOperation(name: string) {
    if (selectedOperationList.value.includes(name)) {
      alert('Operation already selected.')
      return
    }

    if (selectedOperationList.value.length >= 3) {
      selectedOperationList.value.shift()
    }

    selectedOperationList.value.push(name)
  }

  return { selectedOperationList, addOperation }
})