const nextConfig = {
  reactStrictMode: false,
  env: {
    dev_server: process.env.dev_server,
    backend_server: process.env.backend_server,

    PAYFAST_DEV: process.env.PAYFAST_DEV,
    PAYFAST_PROD: process.env.PAYFAST_PROD,
  },
};

export default nextConfig;
