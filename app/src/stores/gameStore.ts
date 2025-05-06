// src/stores/gameStore.ts
import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

export const useGameStore = defineStore('game', () => {
  
  const x = ref(500); 
  const playerSkills = ref<string[]>([]); // Dynamically set player skills
  const bosses = ref<{ name: string; skills: string[] }[]>([]); // Dynamically set bosses
  const currentBossIndex = ref(0);
  const playerTurn = ref(true);

  // Operator mapping
  const operators = {
    '+': (a: number, b: number) => a + b,
    '-': (a: number, b: number) => a - b,
    '*': (a: number, b: number) => a * b,
    '/': (a: number, b: number) => Math.floor(a / b),
    '^': (a: number, b: number) => a ** b,
    '%': (a: number, b: number) => a % b,
  };

  // Helper function to apply a skill
  const applySkill = (currentX: number, skill: string): number => {
    const operatorMatch = skill.match(/^[+\-*/^%])(\d+)$/);
    if (!operatorMatch) throw new Error(`Invalid skill format: ${skill}`);

    const [, operator, operand] = operatorMatch;
    const operation = operators[operator as keyof typeof operators];
    if (!operation) throw new Error(`Unknown operator: ${operator}`);

    return operation(currentX, parseInt(operand, 10));
  };

  // Minimax algorithm
  const minimax = (
    currentX: number,
    depth: number,
    isMaximizing: boolean,
    playerSkills: string[],
    bossSkills: string[]
  ): number => {
    if (depth === 0) {
      return Math.abs(1000 - currentX); // Terminal state: return the score
    }

    if (isMaximizing) {
      let bestScore = -Infinity;
      for (const skill of playerSkills) {
        const newX = applySkill(currentX, skill);
        const score = minimax(newX, depth - 1, false, playerSkills, bossSkills);
        bestScore = Math.max(bestScore, score);
      }
      return bestScore;
    } else {
      let bestScore = Infinity;
      for (const skill of bossSkills) {
        const newX = applySkill(currentX, skill);
        const score = minimax(newX, depth - 1, true, playerSkills, bossSkills);
        bestScore = Math.min(bestScore, score);
      }
      return bestScore;
    }
  };

  // Find the best move for the boss
  const findBestBossMove = (): string => {
    const depth = 3; // Lookahead depth
    let bestSkill = '';
    let bestScore = Infinity;

    for (const skill of currentBoss.value.skills) {
      const newX = applySkill(x.value, skill);
      const score = minimax(newX, depth - 1, true, playerSkills.value, currentBoss.value.skills);

      if (score < bestScore) {
        bestScore = score;
        bestSkill = skill;
      }
    }

    return bestSkill;
  };

  // Actions
  const initializeGame = (initialX: number, playerInventory: string[], bossList: { name: string; skills: string[] }[]) => {
    x.value = initialX;
    playerSkills.value = playerInventory;
    bosses.value = bossList;
    currentBossIndex.value = 0;
    playerTurn.value = true;
  };

  const performOperation = (skill: string) => {
    if (!playerTurn.value) return;

    x.value = applySkill(x.value, skill);
    playerTurn.value = false;
    aiMove();
  };

  const aiMove = () => {
    if (playerTurn.value) return;

    const bestSkill = findBestBossMove();
    x.value = applySkill(x.value, bestSkill);
    playerTurn.value = true;

    if (Math.abs(1000 - x.value) <= 0) {
      currentBossIndex.value++; // Progress to the next boss
    }
  };

  return {
    x,
    playerSkills,
    bosses,
    currentBossIndex,
    playerTurn,
    score: computed(() => Math.abs(1000 - x.value)),
    currentBoss: computed(() => bosses.value[currentBossIndex.value]),
    initializeGame,
    performOperation,
    aiMove,
  };
});