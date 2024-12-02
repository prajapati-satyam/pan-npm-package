
```markdown
# pancard

**pancard** is a simple and efficient npm package to validate Indian PAN (Permanent Account Number) cards. It checks if the provided PAN number is valid according to the standard format.  

---

## Installation

Install the package using npm:

```bash
npm i pancard
```

---

## Usage in Node.js

Here's how you can use the **pancard** package in your Node.js application:

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

## Using the API for PAN Validation

In addition to local validation, you can use the **PAN Validator API** for advanced validation. The API documentation is available at:
[https://github.com/prajapati-satyam/pan-validator-api](https://github.com/prajapati-satyam/pan-validator-api)

### Example in Node.js
You can combine the npm package with the API for double-checking PAN card validity:

```javascript
import panValid from "pancard";

const pan = "ABCDE1234F";
const result = panValid(pan);

if (result.pass) {
    console.log("Local validation passed. Validating with API...");
    fetch(`https://pan-validator-api.vercel.app/api/${pan}`)
        .then((response) => response.json())
        .then((data) => {
            if (data.pass) {
                console.log("The PAN card is valid!");
            } else {
                console.log("The PAN card is not valid!");
            }
        })
        .catch((error) => {
            console.error("Error during API validation:", error);
        });
} else {
    console.log("Local validation failed. The PAN card is invalid.");
}
```

---

### Example in Python
Here’s how you can validate a PAN card using the API in Python:

```python
import requests

# PAN number to validate
pan = "ABCDE1234F"

# API URL
api_url = f"https://pan-validator-api.vercel.app/api/{pan}"

# Sending a request to the API
response = requests.get(api_url)

if response.status_code == 200:
    result = response.json()
    if result["pass"]:
        print("The PAN card is valid!")
    else:
        print("The PAN card is not valid!")
else:
    print(f"Error: Unable to validate PAN. Status code: {response.status_code}")
```

---

## PAN Validation Rules
- A valid PAN consists of 10 characters in the format: **AAAAA1234A**.
  - **First 5 characters**: Alphabetic (A-Z).
  - **Next 4 characters**: Numeric (0-9).
  - **Last character**: Alphabetic (A-Z).

---

## Contact

For support or inquiries, you can reach me at:

**Email**: [satyamprajapati1979@gmail.com](mailto:satyamprajapati1979@gmail.com)

---

## License

This project is licensed under the MIT License.
```

### Changes Made:
1. **Clarity in Examples**:
   - Highlighted the `pass` property explicitly in both Node.js and Python examples.

Let me know if you need further adjustments!