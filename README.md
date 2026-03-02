# Range Slider

A customizable, accessible range slider component for React that allows users to select a minimum and maximum value from a range, ensuring the thumbs never overlap.

## 🚀 Features

- **Double Thumb Selection:** Select a range between a `min` and `max` value.
- **No Overlap Logic:** Automatically prevents the minimum thumb from crossing the maximum thumb.
- **Customizable Step:** Define the increment step for the sliders.
- **Visual Highlight:** The active range between the two thumbs is highlighted.
- **Browser Compatibility:** Includes vendor-specific CSS to ensure thumbs are visible in Chrome, Safari, Edge, and Firefox.

## 📦 Installation

1. Copy `RangeSlider.jsx` and `RangeSlider.css` into your project components folder.
2. Ensure you have React installed.

## 🛠️ Usage

Import the component and pass the required props.

```javascript
import RangeSlider from "./components/RangeSlider";

function App() {
  return (
    <div style={{ padding: "50px" }}>
      <h1>Select Price Range</h1>
      <RangeSlider min={0} max={1000} step={10} />
    </div>
  );
}

export default App;
```
