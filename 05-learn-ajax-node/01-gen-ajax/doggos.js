const DOG_URL = 'https://dog.ceo/api/breeds/image/random';

const doggos = document.querySelector('.doggos');

// An example of a response
// {
//   "status":"success",
//   "message":"https:\/\/images.dog.ceo\/breeds\/affenpinscher\/n02110627_12579.jpg"
// }

function addDoggo() {
  const promise = fetch(DOG_URL);
  // Will be run when the fetch is resolved
  promise
    // First process the response into a useful thing
    .then(function(response) {
      const processingPromise = response.json();
      // console.log(processPromise);
      return processingPromise;
    })
    .then(function(processedResponse) {
      const img = document.createElement('img');
      img.src = processedResponse.message;
      img.alt = 'Cute doggo';
      doggos.appendChild(img);
    });
}

// console.log('This will log first');
const btn = document.querySelector('.add-doggo');
btn.addEventListener('click', addDoggo);
