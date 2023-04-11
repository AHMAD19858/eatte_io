module.exports = {
  darkMode: 'class',
  
  theme: {
    extend: {
      colors: {
        "primary-color": "var(--primary)",
        "font-color": "var(--font)",
        "second-font-color": "var(--second-font)",
        "background-color": "var(--background)",
        "dark-background-color": "var(--dark_background)",
		  "dashboard-font-color":"var(--dashboard-font-color)"
      },
      fontFamily: {
        'montse': ['Montserrat']

      },
      animation: {
				fade: "fade 0.4s ease-in-out",
				slideDown: "slideDown 1s ease-in",
				spin:"spin 1s linear infinite"
			},
      keyframes: {
				fade: {
					"0%": {
						scale: 0,
						opacity: 0,
					},
					"100%": {
						opacity: 1,
						scale: 1,
					},
				},
				slideDown: {
					"0%": {
						transform: "translateY(-70px)",
						opacity: 0,
					},
					"100%": {
						transform: "translateY(0)",
						opacity: 1,
					},
				},
			},
    }
  }
}
