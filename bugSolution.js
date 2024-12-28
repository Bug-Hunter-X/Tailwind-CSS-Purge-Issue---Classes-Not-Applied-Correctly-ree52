```javascript
// ... your Tailwind CSS configuration ...
module.exports = {
  // ... other configuration options ...
  purge: {
    content: ['./src/**/*.html', './src/**/*.js', './src/**/*.jsx', './src/**/*.ts', './src/**/*.tsx'], //Include all relevant file types
    options: {
      safelist: ['w-full', 'h-full'],//add any classes you need to always include
    }
  },
  // ... rest of the configuration ...
}
```