/** @type {import('next').NextConfig} */
const path = require('path');

const pathJoin = (target) => {
  return path.resolve(path.join(__dirname, `/${target || ''}`));
};

const { parsed: localEnv } = require('dotenv-safe').config({
  allowEmptyValues: true,
  path: path.resolve(__dirname),
});

const nextConfig = {
  env: localEnv,
  reactStrictMode: true,
  output: 'export',
  distDir: 'out',
  images: {
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    minimumCacheTTL: 120,
    unoptimized: true,
  },
  devIndicators: {
    buildActivity: false,
  },
  compiler: {
    styledComponents: {
      ssr: false,
    },
  },
  webpack: (config) => {
    config.resolve.alias['Config'] = pathJoin('config/');
    config.resolve.alias['Types'] = pathJoin('types/');
    config.resolve.alias['Interfaces'] = pathJoin('interfaces/');
    config.resolve.alias['Styles'] = pathJoin('styles/');
    config.resolve.alias['Hooks'] = pathJoin('hooks/');
    config.resolve.alias['Utils'] = pathJoin('src/utils/');
    config.resolve.alias['Pages'] = pathJoin('pages/');
    config.resolve.alias['Services'] = pathJoin('src/services/');
    config.resolve.alias['Contexts'] = pathJoin('src/contexts/');
    config.resolve.alias['Constants'] = pathJoin('src/constants/');
    config.resolve.alias['Components/atoms'] = pathJoin('components/atoms/');
    config.resolve.alias['Components/molecules'] = pathJoin(
      'components/molecules/',
    );
    config.resolve.alias['Components/organisms'] = pathJoin(
      'components/organisms/',
    );
    config.resolve.alias['Components/templates'] = pathJoin(
      'components/templates/',
    );

    return config;
  },
};

module.exports = nextConfig;
