import React, { useContext } from 'react';
import axios from 'axios';


const BASE_URL = "https://localhost:44352/api";

const AddPost = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = {
            title: event.target.title.value,
            content: event.target.content.value

        }
        axios.post(`${BASE_URL}/Articles`, data)
        .then(response => console.log(response))
        .catch((err) => console.log(err.response));
    }
    return(
        <div>
        <form onSubmit={handleSubmit}>
        <label htmlFor="title">Article Title:</label> <br />
        <input type="text" id="title" placeholder="Enter Article title" />
        <br />
        <br />
        <label htmlFor="content">Article content:</label> <br />
        <input  className="input2" type="text" id="content" placeholder="Enter Article Content" />
        <br />
        <button type='submit'> Submit </button>
        </form>
        {/* <button onClick={() => history.replace('/posts')}> Cancel </button> */}
        </div>
    );
}

export default AddPost;