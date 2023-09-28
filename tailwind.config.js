import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        waves_pattern: "url('src/assets/waves-bg.svg')",
      },
      colors: {
        'text': '#00171F',
        'primary': '#7C4670',
        'secondary': '#EBEBEB',
        'accent': '#927A5D'
      },
    },
  },
  plugins: [],
});
