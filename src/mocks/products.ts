import { rest } from 'msw';
import { getToken } from '@/utils/token';

const productListData = [
    {
        name: 'iphone11',
        price: '1299',
        desc: '牛皮 好用',
    },
    {
        name: 'iphone12',
        price: '1899',
        desc: '牛皮 iphone12',
    },
    {
        name: 'iphone13',
        price: '2199',
        desc: '牛皮 iphone13',
    },
    {
        name: 'iphone14',
        price: '7999',
        desc: '牛皮 iphone14',
    },
    {
        name: 'xiaomi 10s',
        price: '1199',
        desc: 'are u ok?',
    },
];

const products = [
    rest.get('/api/product', (req, res, ctx) => {
        const isAuthenticated = getToken();
        if (!isAuthenticated) {
            // If not authenticated, respond with a 403 error
            return res(
                ctx.status(403),
                ctx.json({
                    code: -1,
                    status: 403,
                    msg: 'Not authorized',
                }),
            );
        }
        return res(
            ctx.status(200),
            ctx.json({
                status: 'ok',
                data: productListData,
            }),
        );
    }),
];

export default products;
