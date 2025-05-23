import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// DJ Moral theme colors
        		dj: {
					dark: '#0E0A2A',
					purple: '#6E59A5',
					electric: '#8B5CF6',
					pink: '#D946EF',
					blue: '#0EA5E9',
					light: '#D6BCFA'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(10px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'fade-out': {
					'0%': { opacity: '1', transform: 'translateY(0)' },
					'100%': { opacity: '0', transform: 'translateY(10px)' }
				},
				'scale-in': {
					'0%': { transform: 'scale(0.95)', opacity: '0' },
					'100%': { transform: 'scale(1)', opacity: '1' }
				},
				'pulse-glow': {
					'0%, 100%': { boxShadow: '0 0 20px rgba(139, 92, 246, 0.7)' },
					'50%': { boxShadow: '0 0 30px rgba(217, 70, 239, 0.9)' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				'wave': {
					'0%': { transform: 'scaleY(1)' },
					'50%': { transform: 'scaleY(0.5)' },
					'100%': { transform: 'scaleY(1)' }
				},
				'text-shimmer': {
					'0%': { backgroundPosition: '-200% 0' },
					'100%': { backgroundPosition: '200% 0' }
				},
				'rotate': {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(360deg)' }
				},
				'neon-flash': {
					'0%, 18%, 22%, 25%, 53%, 57%, 100%': {
						textShadow: '0 0 4px #fff, 0 0 11px #fff, 0 0 19px #fff, 0 0 40px #8B5CF6, 0 0 80px #8B5CF6, 0 0 90px #8B5CF6, 0 0 100px #8B5CF6, 0 0 150px #8B5CF6'
					},
					'20%, 24%, 55%': {
						textShadow: 'none'
					}
				},
				'spotlight-move': {
					'0%': { 
						transform: 'translate(-50%, -50%) scale(1)',
						opacity: '0.6'
					},
					'50%': { 
						transform: 'translate(-45%, -45%) scale(1.1)',
						opacity: '0.8'
					},
					'100%': { 
						transform: 'translate(-50%, -50%) scale(1)',
						opacity: '0.6'
					}
				},
				'grain': {
					'0%, 100%': { transform: 'translate(0, 0)' },
					'10%': { transform: 'translate(-5%, -10%)' },
					'30%': { transform: 'translate(3%, -15%)' },
					'50%': { transform: 'translate(12%, 9%)' },
					'70%': { transform: 'translate(9%, 4%)' },
					'90%': { transform: 'translate(-1%, 7%)' }
				},
				'text-gradient-animation': {
					'0%': { backgroundPosition: '0% 50%' },
					'50%': { backgroundPosition: '100% 50%' },
					'100%': { backgroundPosition: '0% 50%' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.6s ease-out',
				'fade-out': 'fade-out 0.6s ease-out',
				'scale-in': 'scale-in 0.5s ease-out',
				'pulse-glow': 'pulse-glow 2s infinite',
				'float': 'float 5s ease-in-out infinite',
				'wave': 'wave 1.2s ease-in-out infinite',
				'text-shimmer': 'text-shimmer 4s ease-in-out infinite',
				'spin-slow': 'rotate 12s linear infinite',
				'neon-flash': 'neon-flash 2.5s infinite alternate',
				'orbit': 'orbit 20s linear infinite',
				'spotlight-move': 'spotlight-move 8s ease-in-out infinite',
				'grain': 'grain 1.5s steps(6) infinite',
				'text-gradient': 'text-gradient-animation 5s ease infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
