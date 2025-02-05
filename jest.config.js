const nextJest = require('next/jest')

process.env.TZ = 'UTC';

const createJestConfig = nextJest({
    // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
    dir: './'
})

// Add any custom config to be passed to Jest
const customJestConfig = {
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    moduleNameMapper: {
        // Handle module aliases (this will be automatically configured for you soon)
        '^dh-marvel/components/(.*)$': '<rootDir>/components/$1',
        '^components/(.*)$': '<rootDir>/components/$1',
        '^features/(.*)$': '<rootDir>/features/$1',
        '^dh-marvel/services/(.*)$': '<rootDir>/services/$1',
        '^services/(.*)$': '<rootDir>/services/$1',
        '^dh-marvel/pages/(.*)$': '<rootDir>/pages/$1',
        '^pages/(.*)$': '<rootDir>/pages/$1',
        '^utils/(.*)$': '<rootDir>/utils/$1',
        '^dh-marvel/test/(.*)$': '<rootDir>/test/$1',
        '^test/(.*)$': '<rootDir>/test/$1',
        '^hooks/(.*)$': '<rootDir>/hooks/$1',
    },
    testEnvironment: 'jest-environment-jsdom',
    collectCoverageFrom: [
        'components/**/*.ts',
        'components/**/*.tsx',
        '!components/**/*.stories.tsx',
        'features/**/*.ts',
        'features/**/*.tsx',
        'pages/**/*.route.ts',
        'pages/**/*.page.tsx',
        'services/**/*.ts',
        '!pages/_app.page.tsx',
        '!pages/_document.page.tsx',
        '!**/*.test.tsx',
        '!**/*.spec.tsx'
    ],
    coverageThreshold: {
        global: {
            branches: 50,
            functions: 50,
            lines: 50,
            statements: 50
        },
        "./pages/checkout/index.page": {
            branches: 90,
            functions: 90,
            lines: 90,
            statements: 90
        }
    },
}

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig)