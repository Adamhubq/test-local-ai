// Environment configuration for production
export const environment = {
  production: true,
  apiUrl: 'https://api.novastore.com/api',
  mockMode: false,
  featureFlags: {
    enableNewCatalog: true,
    enableUserReviews: true,
    enableDarkMode: true
  },
  appSettings: {
    appName: 'NOVA STORE',
    version: '1.0.0'
  }
};