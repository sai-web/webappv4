import Pulse from '@pulsejs/core'
import { ComputationalError } from './Errors/computationalError'

export const App: Pulse = new Pulse({
    computedDefault: new ComputationalError(),
    logJobs: false,
    waitForMount: false,
    storage: {
        get: (key: string) => localStorage.getItem(key),
        set: (key: string, value: any) => localStorage.setItem(key, value),
        remove: (key: string) => localStorage.removeItem(key),
        async: true,
        prefix: 'vibe-storage'
    },
    globalHistory: true,
    noCore: false
})