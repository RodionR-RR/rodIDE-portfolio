/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./src/**/*.{js,jsx}"] ,
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        "2xl": "1280px"
      }
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "serif"]
      },
      colors: {
        ink: "#0a0a0a",
        glass: "rgba(255, 255, 255, 0.08)",
        line: "rgba(255, 255, 255, 0.16)",
        glow: "rgba(255, 255, 255, 0.65)",
        accent: "#f5f5f5"
      },
      backgroundImage: {
        "radial-glow": "radial-gradient(60% 60% at 50% 40%, rgba(255, 255, 255, 0.14), transparent 70%)",
        "mesh": "radial-gradient(40% 40% at 20% 10%, rgba(255, 255, 255, 0.12), transparent 60%), radial-gradient(40% 40% at 80% 20%, rgba(255, 255, 255, 0.08), transparent 60%), radial-gradient(50% 50% at 50% 80%, rgba(255, 255, 255, 0.1), transparent 70%)"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" }
        },
        sheen: {
          "0%": { transform: "translateX(-120%)" },
          "100%": { transform: "translateX(120%)" }
        }
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        sheen: "sheen 6s ease-in-out infinite"
      },
      boxShadow: {
        glass: "0 20px 60px rgba(0, 0, 0, 0.55)",
        glow: "0 0 40px rgba(255, 255, 255, 0.25)"
      }
    }
  },
  plugins: []
};
