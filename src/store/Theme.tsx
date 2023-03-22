import { create } from "zustand"

interface ThemeState {
    darkMode: boolean
}

interface ThemeActions {
    enableDarkMode: () => void
    disableDarkMode: () => void
}

const useThemeStore = create<ThemeState & ThemeActions>((set, get) => ({
    darkMode: false,

    enableDarkMode: () =>
        set(() => ({
            darkMode: true
        })),

    disableDarkMode: () =>
        set(() => ({
            darkMode: false
        }))
}))

export default useThemeStore