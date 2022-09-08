export interface productDataType {
    name: string;
    price: string;
    desc: string;
}

export interface IResponseType<P = Record<string, unknown>> {
    code?: number;
    status: number;
    msg: string;
    data: P;
}
