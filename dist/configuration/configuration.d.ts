declare const _default: () => {
    port: number;
    database: {
        type: string;
        host: string;
        port: string;
        username: string;
        password: string;
        database: string;
        entities: string[];
        synchronize: boolean;
        extra: {
            connectionLimit: number;
        };
    };
};
export default _default;
