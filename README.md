
# pancard

**pancard** is a simple and efficient npm package to validate Indian PAN (Permanent Account Number) cards. It checks if the provided PAN number is valid according to the standard format.

---

## Installation

Install the package using npm:

```
npm i pancard
```

---

## Usage in Node.js

Here's how you can use the **pancard** package in your Node.js application:

## ES6

```javascript
// Import the pancard package
import panValid from "pancard";

// Validate a PAN card
const result = panValid("ABCDE1234F");

// Check the validation result
if (result.pass) {
    console.log("The PAN card is valid!");
} else {
    console.log("The PAN card is not valid.");
}
```

---


## PAN Validation Rules
- A valid PAN consists of 10 characters in the format: **AAAAA1234A**.
  - **First 5 characters**: Alphabetic (A-Z).
  - **Next 4 characters**: Numeric (0-9).
  - **Last character**: Alphabetic (A-Z).