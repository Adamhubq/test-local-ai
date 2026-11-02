// Environment configuration for development
export const environment = {
  production: false,
  apiUrl: 'http://localhost:3000/api',
  mockMode: true,
  featureFlags: {
    enableNewCatalog: true,
    enableUserReviews: true,
    enableDarkMode: false
  },
  appSettings: {
    appName: 'NOVA STORE - Development',
    version: '1.0.0-dev'
  }
};