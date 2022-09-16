<template>
    <div>counter:{{ counter }}</div>
    <div><button @click="counter++">click</button></div>
    <div>testCounter:{{ testCounter }}</div>
    <div><button @click="testCounter++">click</button></div>
    <div>globalCount:{{ globalCount }}</div>
    <div><button @click="globalCount++">click</button></div>
    <div>isReady: {{ isReady.toString() }}</div>
    <div>
        <el-table v-loading="isLoading" :data="DataList.data">
            <el-table-column prop="name" label="Name" width="180" />
            <el-table-column prop="price" label="Price" width="180" />
            <el-table-column prop="desc" label="description" />
        </el-table>
    </div>
</template>

<script lang="ts" setup>
import { useProductStore } from '@/store/product';
import { storeToRefs } from 'pinia';
import { counterHook, testCounter } from '@/hooks/useCounter';
import { onMounted } from 'vue';

onMounted(() => {
    console.log(`the product component is now mounted.`);
});

const { counter, globalCount } = counterHook();

const store = useProductStore();

const { state: DataList, isReady, isLoading } = storeToRefs(store);
</script>

<style lang="scss" scoped>
.title {
    font-size: 12px;
}
</style>
