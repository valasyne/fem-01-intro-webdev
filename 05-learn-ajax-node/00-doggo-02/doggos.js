const BREEDS_URL = 'https://dog.ceo/api/breeds/list/all';
// console.log(BREEDS_URL);
const breed_select = document.querySelector('.breed-select');

function getBreeds() {
  const promise = fetch(BREEDS_URL);
  promise
    .then(function (response) {
      const processingPromise = response.json();
      // console.log(processingPromise);
      return processingPromise;
    })
    .then(function (processedResponse) {
      const msg = processedResponse.message;
      const breeds = Object.keys(msg).slice(0, 10);
      // document.createElement('label')
      console.log(breeds);
      //console.log(breeds.length);
      for (let i = 0; i < breeds.length; i++) {
        console.log(i);
        const option = document.createElement('option');
        option.value = breeds[i];
        option.innerText = breeds[i];
        console.log(option)
        breed_select.appendChild(option)
      }

    });
}
const btn = document.querySelector('.btn-action');
btn.addEventListener('click', getBreeds);
