import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        presentation: "url('src/assets/presentation-bg.svg')"
      },
      colors: {
        'body': '#00171F',
        'primary': {
                    50: '#BD89B2',
                    900: '#7C4670'
                  },
        'secondary': '#EBEBEB',
        'accent': {
                    50: '#DFD6CD',
                    900: '#927A5D'
                  }
      },
      fontFamily: {
        body: ["Poppins-Regular"],
        subtitles: ["Poppins-semiBold"],
        titles: ["Poppins-Bold"],
      },
    },
  },
  plugins: [],
});
