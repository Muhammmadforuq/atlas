/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        inter:['Inter', 'sans-serif']
      },
      // backgroundImage:""
      colors:{
        brand:{
          black:"#101828",
          atlas:{
            600:"#244086",
            900:"#0D1E47"
          },
          gray:{
            200:"#EAECF0",
            300:"#D0D5DD",
            400:"#475467",
            500:"#667085",
            700:"#344054",
            800:"#1D2939",
            900:"#101828"
          },
          skyBlue:{
            100:"#2977B7",
            200:"#12B0FA",
          }
        },
      },
      boxShadow:{
        base:"0px 1px 2px rgba(16, 24, 40, 0.05)"
      },
      backgroundImage:{
        hero:"url('../assets/image/back.svg')",
        "heroBlue":"url('../assets/image/hero-blue.png')",
      },
      boxShadow:{
        featureShadow:"0px 12px 84px rgba(29, 41, 63, 0.119946)"
      },
      spacing:{
        "55":"55%",
        "45":"45%",
      },  
    },
  },
  plugins: [],
}

