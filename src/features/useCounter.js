import { reactive, toRefs } from "vue";

export const useCounterMethod = () => {
  const state = reactive({
    currentCount: 12,
  });

  const incrementCount = (amount = 1) => {
    state.currentCount += amount;
  };

  return {
    ...toRefs(state),
    incrementCount,
  };
};
