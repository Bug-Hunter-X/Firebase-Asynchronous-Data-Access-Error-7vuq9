The solution involves using promises or `async/await` to ensure that the code waits for the Firebase operation to complete before accessing the data. This prevents accessing the data before it's fully fetched.

```javascript
// Corrected Code (using async/await)
async function getData() {
  try {
    const snapshot = await db.collection('myCollection').doc('myDoc').get();
    if (snapshot.exists) {
      const myData = snapshot.data();
      console.log(myData.someField); 
    } else {
      console.log('No such document!');
    }
  } catch (error) {
    console.error('Error getting document:', error);
  }
}

getData();
```

```javascript
// Corrected Code (using promises)
db.collection('myCollection').doc('myDoc').get().then((snapshot) => {
  if (snapshot.exists) {
    const myData = snapshot.data();
    console.log(myData.someField); 
  } else {
    console.log('No such document!');
  }
}).catch((error) => {
  console.error('Error getting document:', error);
});
```