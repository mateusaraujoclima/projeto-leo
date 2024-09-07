/** @type {import('next').NextConfig} */

const nextConfig = {
    reactStrictMode: true,
    webpack(config) {
      config.module.rules.push({
        test: /\.(mp4|webm|ogg|swf|ogv)$/,
        type: 'asset/resource',
      });
  
      return config;
    },
  };
  
  export default nextConfig;