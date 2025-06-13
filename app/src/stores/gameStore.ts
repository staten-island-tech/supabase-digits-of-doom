import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

export const useGameStore = defineStore('game', () => {
  const x = ref(500);
  const round = ref(1);
  const maxRounds = 10;
  const playerSkills = ref<string[]>([]);
  const bosses = ref<{ name: string; skills: string[] }[]>([]);
  const currentBossIndex = ref(0);
  const currentBoss = computed(() => bosses.value[currentBossIndex.value] || { name: '', skills: [] });
  const playerTurn = ref(true);

  const operators = {
    '+': (a: number, b: number) => a + b,
    '-': (a: number, b: number) => a - b,
    '*': (a: number, b: number) => a * b,
    '/': (a: number, b: number) => Math.floor(a / b),
    '^': (a: number, b: number) => a ** b,
    '%': (a: number, b: number) => a % b,
  };

  const applySkill = (currentX: number, skill: string): number => {
    skill = skill.trim();
    if (!skill) return currentX;
    if (skill.startsWith('*')) {
      const operand = parseFloat(skill.slice(1));
      return currentX * operand;
    }
    const operator = skill[0];
    const operandStr = skill.substring(1).trim();
    const operand = parseFloat(operandStr);
    if (isNaN(operand)) throw new Error(`Invalid operand in skill: ${skill}`);
    const operation = operators[operator as keyof typeof operators];
    if (!operation) throw new Error(`Unknown operator in skill: ${skill}`);
    return operation(currentX, operand);
  };

  const minimax = (
    currentX: number,
    depth: number,
    isMaximizing: boolean,
    playerSkills: string[],
    bossSkills: string[]
  ): number => {
    if (depth === 0) {
      return Math.abs(1000 - currentX);
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

  const findBestBossMove = (): string => {
    const depth = 3;
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

  const initializeGame = (
    initialX: number,
    playerInventory: string[],
    bossList: { name: string; skills: string[] }[]
  ) => {
    x.value = initialX;
    playerSkills.value = playerInventory;
    bosses.value = bossList;
    currentBossIndex.value = 0;
    playerTurn.value = true;
    round.value = 1;
  };

  const performOperation = (skill: string) => {
    if (!playerTurn.value || round.value > maxRounds) return;
    x.value = applySkill(x.value, skill);
    playerTurn.value = false;
    aiMove();
  };

  const aiMove = () => {
    if (playerTurn.value || round.value > maxRounds) return;
    setTimeout(() => {
      const bestSkill = findBestBossMove();
      x.value = applySkill(x.value, bestSkill);
      playerTurn.value = true;
      round.value++;
      if (Math.abs(1000 - x.value) <= 1) {
        currentBossIndex.value++;
      }
    }, 1000);
  };

  return {
    x,
    round,
    maxRounds,
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
