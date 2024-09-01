import { useQuery } from 'react-query';

const fetchPosts = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    return response.json();
};

function PostsComponent() {
    const { data, error, isLoading, isError, refetch } = useQuery('posts', fetchPosts);

    if (isLoading) return <div>Loading...</div>;

    if (isError) return <div>Error: {error.message}</div>;

    return (
        <div>
            <h1>Posts</h1>
            <button onClick={() => refetch()}>Refetch Posts</button>
            {data.map(post => <div key={post.id}>{post.title}</div>)}
        </div>
    );
}

export default PostsComponent;
