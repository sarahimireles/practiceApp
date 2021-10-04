import React from 'react';

class GetInfo extends React.Component {

    componentDidMount() {
        const apiUrl = 'https://jsonplaceholder.typicode.com/photos';
        fetch(apiUrl)
        .then((response) => response.json())
        // .then((data) => console.log('This is your data', data));
    }

    render() {
        return <h1>my Component has Mounted, Check the browser 'console' </h1>;
    }

}
export default GetInfo;
