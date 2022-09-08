import { defineStore } from 'pinia';
import { useAsyncState } from '@vueuse/core';
import api from '@/api';
import { ref } from 'vue';

const defaultResponse = {
    status: 0,
    msg: '',
    data: [
        {
            name: '',
            price: '',
            desc: '',
        },
    ],
};

export const useProductStore = defineStore('product', () => {
    const getProductList = useAsyncState(api.getProduct(), defaultResponse, {
        delay: 2000,
    });
    const productCount = ref(0);

    return { ...getProductList, productCount };
});
