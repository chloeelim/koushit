// import tailwindTypographyConfig from "@tailwindcss/typography";
import type { Config } from "tailwindcss";
import tailwindAnimateConfig from "tailwindcss-animate";

const config: Config = {
  darkMode: ["class"],
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        "fade-in": "fade-in 1s ease-in-out 0.25s 1",
        "fade-in-bounce-left": "fade-in-bounce-left 1s ease-in-out 0.25s 1",
        "fade-in-bounce-up": "fade-in-bounce-up 1s ease-in-out 0.25s 1",
        "fade-in-bounce-down": "fade-in-bounce-down 1s ease-in-out 0.25s 1",
        shake: "shake 0.82s cubic-bezier(.36,.07,.19,.97) both",
        "slide-in-left": "slide-in-left 1s ease-in-out 0.25s 1",
        "zoom-in-down": "zoom-in-down 0.5s ease-out 0.25s 1",
        "bouncing-loader-dot": "bouncing-loader 0.6s infinite alternate",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        disabled: {
          DEFAULT: "hsl(var(--disabled))",
          foreground: "hsl(var(--disabled-foreground))",
        },
        error: "hsl(var(--error))",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      fontWeight: {
        "medium-light": "450",
      },
      height: {
        "top-nav": "var(--top-nav-height)",
        "top-nav-main": "calc(100vh - var(--top-nav-height))",
      },
      keyframes: {
        shake: {
          "10%, 90%": {
            transform: "translate3d(-2px, 0, 0)",
          },
          "20%, 80%": {
            transform: "translate3d(4px, 0, 0)",
          },
          "30%, 50%, 70%": {
            transform: "translate3d(-8px, 0, 0)",
          },
          "40%, 60%": {
            transform: "translate3d(8px, 0, 0)",
          },
        },
        "fade-in": {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
        "fade-in-bounce-left": {
          "0%": {
            opacity: "0",
            transform: "translate3d(-100%, 0%, 0)",
          },
          "33%": {
            opacity: "0.5",
            transform: "translate3d(0%, 0%, 0)",
          },
          "66%": {
            opacity: "0.7",
            transform: "translate3d(-20%, 0%, 0)",
          },
          "100%": {
            opacity: "1",
            transform: "translate3d(0, 0, 0)",
          },
        },
        "fade-in-bounce-up": {
          "0%": {
            opacity: "0",
            transform: "translate3d(0%, 100%, 0)",
          },
          "33%": {
            opacity: "0.5",
            transform: "translate3d(0%, 0%, 0)",
          },
          "66%": {
            opacity: "0.7",
            transform: "translate3d(0%, 20%, 0)",
          },
          "100%": {
            opacity: "1",
            transform: "translate3d(0, 0, 0)",
          },
        },
        "fade-in-bounce-down": {
          "0%": {
            opacity: "0",
            transform: "translate3d(0%, -100%, 0)",
          },
          "33%": {
            opacity: "0.5",
            transform: "translate3d(0%, 0%, 0)",
          },
          "66%": {
            opacity: "0.7",
            transform: "translate3d(0%, -20%, 0)",
          },
          "100%": {
            opacity: "1",
            transform: "translate3d(0, 0, 0)",
          },
        },
        "slide-in-left": {
          "0%": {
            visibility: "visible",
            transform: "translate3d(-100%, 0, 0)",
          },
          "100%": {
            visibility: "visible",
            transform: "translate3d(0, 0, 0)",
          },
        },
        "zoom-in-down": {
          "0%": {
            opacity: "0",
            transform: "scale3d(0.3, 0.3, 0.3) translate3d(0, -100%, 0)",
          },
          "80%": {
            opacity: "0.8",
            transform: "scale3d(1.1, 1.1, 1.1)",
          },
          "100%": {
            opacity: "1",
            transform: "translate3d(0, 0%, 0)",
          },
        },
        "bouncing-loader": {
          to: {
            opacity: "0.1",
            transform: "translateY(-12px)",
          },
        },
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
    },
  },
  plugins: [
    tailwindAnimateConfig, //tailwindTypographyConfig
  ],
};

export default config;
