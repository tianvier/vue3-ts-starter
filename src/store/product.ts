import { defineStore } from 'pinia';
import { useAsyncState } from '@vueuse/core';
import api from '@/api';
import { ref } from 'vue';

export const useProductStore = defineStore('product', () => {
    const getProductList = useAsyncState(api.getProduct(), {}, { delay: 2000 });
    const productCount = ref(0);

    return { ...getProductList, productCount };
});
