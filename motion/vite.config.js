import react from '@vitejs/plugin-react';
import path from 'path'; // Import the path module

export default {
  plugins: [react()],
  resolve: {
    alias: {
      // Specify the project root directory manually
      '/@images/': path.resolve(__dirname, './src/images'),
    },
  },
};
