import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    backgroundImage:{
      'img_bg_hero': "url('..assets/bg-Herr_Von_Muellerhoff.jpg')"
    },
    extend: {
      'primary-blue' : '#106EB0',
      'primary-orange' : '#EC7000',
      'primary-gray' : '#33303E',
      'secound-gray' : '#4E4B59',
      'gray-phone' : '#F4F4F4',
      'txt-gray' : '#7A7786',
      'opacity-gray' : 'rgba(100, 80, 57, 0.1)',

    
    },
  },
  plugins: [],
};
export default config;
