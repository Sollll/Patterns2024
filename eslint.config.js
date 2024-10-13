import metarhiaConfig from 'eslint-config-metarhia';

export default [
    ...metarhiaConfig,
    {
        languageOptions: {
            sourceType: 'module',
        },
        rules: {
            'no-unused-vars': 'warn',
            'no-console': 'off',
        },
    },
];
