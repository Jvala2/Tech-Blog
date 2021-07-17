
const addPostHandler = async (event) => {
    event.preventDefault();
//get user input for post details

    const title = document.querySelector('#title').value.trim();
    const postText = document.querySelector('#post_text').value.trim();

    if (title && postText) {

        const response = await fetch('/api/posts', {
          method: 'POST',
          body: JSON.stringify({ title, post_text: postText }),
          headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            window.location.replace('/');
          } else {
            alert('Invalid Post');
          }

    }
};

document
  .querySelector('.new-post-form')
  .addEventListener('submit', addPostHandler);

//make async await function to post a message title and body and push those to backend


// redirect to home page