import request from '@/utils/axios';

import { productDataType } from '@/types/product';

interface IResponseType<P = Record<string, unknown>> {
    code?: number;
    status: number;
    msg: string;
    data: P;
}

const getProduct = () => {
    return request<IResponseType<[productDataType]>>({
        url: '/api/product',
        method: 'get',
    });
};

export { getProduct };
