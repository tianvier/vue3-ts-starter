import request from '@/utils/axios';

import { productDataType, IResponseType } from '@/types/product';

const getProduct = () => {
    return request<IResponseType<[productDataType]>>({
        url: '/api/product',
        method: 'get',
    });
};

export { getProduct };
