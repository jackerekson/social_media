const commentContainer = document.querySelector('#comment-container')
const form = document.querySelector('form')

const baseURL = `http://localhost:4004/api/social_media`

const commentCallback = ({ data: comments }) => displayComments(comments)
const errCallback = err => console.log(err)

const getAllPOSTS = () => axios.get(baseURL).then(commentCallback).catch(errCallback)
const createPOST = body => axios.post(baseURL, body).then(commentCallback).catch(errCallback)
const deletePOST = id => axios.delete(`${baseURL}/${id}`).then(commentCallback).catch(errCallback)

const getUsers = () => axios.get(baseURL).then(commentCallback).catch(errCallback)
const createUser = body1 => axios.post(baseURL, body1).then(commentCallback).catch(errCallback)
const deleteUser = id => axios.delete(`${baseURL}/${id}`).then(commentCallback).catch(errCallback)

function submitHandler(e) {
    e.preventDefault()

    let address = document.querySelector('#address')
    let imageURL = document.querySelector('#img')

    let bodyObj = {
        address: address.value, 
        imageURL: imageURL.value
    }

    createPOST(bodyObj)

    address.value = ''
    imageURL.value = ''
}

function submitHandler2(e) {
    e.preventDefault()

    let email = document.querySelector('#email')
    let first_name = document.querySelector('#first_name')
    let last_name = document.querySelector('#last_name')
    let password = document.querySelector('#password')
    let location = document.querySelector('#location')

    let body1Obj = {
        address: email.value, 
        imageURL: first_name.value,
        last_name: last_name.value,
        password: password.value,
        location: location.value,
    }

    createUser(body1Obj)

    email.value = ''
    first_name.value = ''
    last_name.value = ''
    password.value = ''
    location.value = ''

}

function createPostCard(comments) {
    const PostCard = document.createElement('div')
    PostCard.classList.add('post-card')

    PostCard.innerHTML = `<img src=${comments.imageURL} class="post-cover-image"/>
    <p class="comments-address">${comments.address}</p>
    <button onclick="updateHouse(${comments.id}, 'like')">Like</button>
        <p class="likes">$${comments.likes}</p>
    <button onclick="deletePOST(${comments.id})">delete</button>
    `

    commentContainer.appendChild(PostCard)
}

function likes(userId) {
    const totalMinusTwo = names.length - 2
      if(names.length === 0){
      return 'no one likes this'
    } else if(names.length === 1){
      return `${names[0]} likes this`
    } else if(names.length === 2){
      return`${names[0]} and ${names[1]} like this`
    } else if(names.length === 3){
     return `${names[0]}, ${names[1]} and ${names[2]} like this`
    } else if(names.length > 3){
      return`${names[0]}, ${names[1]} and ${totalMinusTwo} others like this`
    }
  }

function displayComments(arr) {
    commentContainer.innerHTML = ``
    for (let i = 0; i < arr.length; i++) {
        createPostCard(arr[i])
    }
}

form.addEventListener('submit', submitHandler)

getAllPOSTS()