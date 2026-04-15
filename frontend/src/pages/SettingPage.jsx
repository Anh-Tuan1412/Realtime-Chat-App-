import { Check, Palette } from "lucide-react";
import { useThemeStore } from "../store/useThemeStore";

const themes = [
  "light",
  "dark",
  "cupcake",
  "bumblebee",
  "emerald",
  "corporate",
  "synthwave",
  "retro",
  "cyberpunk",
  "forest",
];

const SettingPage = () => {
  const { theme, setTheme } = useThemeStore();

  return (
    <div className="min-h-screen pt-20">
      <div className="mx-auto w-full max-w-5xl p-4 sm:p-6 lg:p-8">
        <div className="mb-8">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-sm text-primary">
            <Palette className="size-4" />
            Appearance
          </div>
          <h1 className="text-2xl font-bold sm:text-3xl">Theme Settings</h1>
          <p className="mt-2 text-base-content/70">
            Choose a theme you like.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {themes.map((themeName) => {
            const isActive = theme === themeName;

            return (
              <button
                key={themeName}
                type="button"
                onClick={() => setTheme(themeName)}
                className={`group rounded-2xl border p-3 text-left transition-all duration-200 ${
                  isActive
                    ? "border-primary ring-2 ring-primary/30"
                    : "border-base-300 hover:border-primary/40"
                }`}
              >
                <div
                  data-theme={themeName}
                  className="rounded-xl border border-base-300 bg-base-100 p-3"
                >
                  <div className="mb-3 flex items-center justify-between">
                    <div className="text-xs font-semibold uppercase tracking-wide text-base-content/70">
                      {themeName}
                    </div>
                    {isActive ? (
                      <Check className="size-4 text-primary" />
                    ) : null}
                  </div>

                  <div className="space-y-2">
                    <div className="h-2 rounded-full bg-primary" />
                    <div className="h-2 rounded-full bg-secondary" />
                    <div className="h-2 rounded-full bg-accent" />
                    <div className="h-2 rounded-full bg-base-300" />
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SettingPage;
