<template>
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

const store = useProductStore();

const { state: DataList, isReady, isLoading } = storeToRefs(store);
</script>

<style lang="scss" scoped>
.title {
    font-size: 12px;
}
</style>
