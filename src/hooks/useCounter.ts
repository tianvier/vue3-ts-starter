import { ref, watch } from 'vue';
// 全局状态，创建在模块作用域下
const globalCount = ref(0);

export const counterHook = function () {
    const counter = ref(0);

    watch(counter, (newVal, oldVal) => {
        console.log(newVal);
    });

    return { counter, globalCount };
};

export const testCounter = ref(0);
