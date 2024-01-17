/// <reference types="vitest" />

// Configure Vitest (https://vitest.dev/config/)

/** @type {import('vite').UserConfig} */
export default {
    base: '/sch-js/',
    test: {
        /* for example, use global to avoid globals imports (describe, test, expect): */
        // globals: true,
    },
};
