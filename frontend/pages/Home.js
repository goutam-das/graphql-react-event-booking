import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

const GET_ALL_USERS = gql`
    query {
        allUsers {
            id
        }
    }
`;


const Home = () => {
    const { loading, error, data } = useQuery(GET_ALL_USERS);
    console.log({ loading, error, data });
    if (loading) return <p>Loading ...</p>;
    return <h1>Coming Soon...</h1>;
}

export default Home;