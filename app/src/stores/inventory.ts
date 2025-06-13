import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { supabase } from '../supabase'
import { useAuthStore } from './authStore'

interface GameOperation {
  name: string
  element: string
  operation: string
}

export const useOperationsListStore = defineStore('inventory', () => {
  const inventory = ref<GameOperation[]>([])
  const authStore = useAuthStore()

  const fetchOperations = async (): Promise<void> => {
    const { data, error } = await supabase
      .from('users')
      .select('inventory')
      .eq('id', authStore.id)
      .single()

    if (error) {
      console.error('Error fetching operations:', error)
    } else {
      inventory.value = data.inventory || []
    }
  }

  const operations = computed<GameOperation[]>(() => inventory.value)

  return {
    operations,
    fetchOperations,
  }
})

/* export const operationsList = [
    {
        name: 'Freezing Divider',
        element: 'ice',
        operation: '/2',
    },
    {
        name: 'Flaming Multiplier',
        element: 'fire',
        operation: '*2',
    },
    {
        name: 'Earthquake Adder',
        element: 'earth',
        operation: '+10',
    },
    {
        name: 'Thunder Striker Subtractor',
        element: 'electricity',
        operation: '-10',
    },
    {
        name: 'Wind Gust Doubler',
        element: 'air',
        operation: '*2',
    },
    {
        name: 'Water Surge Tripler',
        element: 'water',
        operation: '*   3',
    },
    {
        name: 'Shadow Inverter',
        element: 'darkness',
        operation: '*-1', 
    },
    {
        name: 'Light Amplifier',
        element: 'light',
        operation: '^2', 
    },
    {
        name: "Glacial Tripler",
        element: "ice",
        operation: '*3',
      },
    {
        name: 'Gravity Puller',
        element: 'gravity',
        operation: '-50', 
    },
    {
        name: 'Magnetic Reverser',
        element: 'magnet',
        operation: '+50', 
    },
    {
        name: 'Crystal Splitter',
        element: 'crystal',
        operation: '/2', 
    },
    {
        name: 'Poison Decayer',
        element: 'poison',
        operation: '*0.95', 
    },
    {
        name: 'Time Freezer',
        element: 'time',
        operation: '*1.01', 
    },
    {
        name: 'Vortex Twister',
        element: 'vortex',
        operation: '*-2', 
    },
    {
        name: 'Solar Reflector',
        element: 'solar',
        operation: '*-1', 
    },
    {
        name: 'Lunar Reshaper',
        element: 'moon',
        operation: '*1.5', 
    },
    {
        name: 'Nebula Distorter',
        element: 'nebula',
        operation: '*-1.2', 
    },
    {
        name: 'Magnet Puller',
        element: 'magnet',
        operation: '+50', 
    },
    {
        name: 'Tornado Swapper',
        element: 'wind',
        operation: '*-1', 
    },
    {
        name: 'Plasma Heater',
        element: 'plasma',
        operation: '+200', 
    },
    {
        name: 'Tidal Push',
        element: 'water',
        operation: '+10', 
    }
]; */

