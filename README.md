# Firebase Asynchronous Data Access Error

This repository demonstrates a common error encountered when working with Firebase's asynchronous data retrieval methods.  The problem arises from attempting to access data before the asynchronous operation has completed, resulting in `undefined` values and subsequent errors.

The `bug.js` file showcases the problematic code, while `bugSolution.js` provides a corrected version using promises or `async/await` for proper asynchronous flow control.

## How to reproduce

1. Clone this repository.
2. Set up your Firebase project and configure the necessary credentials.
3. Install the Firebase JavaScript SDK (`npm install firebase`).
4. Run `bug.js`. Observe the error.
5. Run `bugSolution.js`. Observe the correct handling of asynchronous operations.