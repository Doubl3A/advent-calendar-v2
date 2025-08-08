import type {NextConfig} from "next";

const nextConfig: NextConfig = {
    /* config options here */
    experimental: {
        reactCompiler: {
            compilationMode: "all",
        },
        authInterrupts: true,
    }
};

export default nextConfig;
