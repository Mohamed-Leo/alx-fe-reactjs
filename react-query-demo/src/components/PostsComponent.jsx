import { useQuery } from 'react-query'

function PostsComponent() {
    const { isLoading, error, data } = useQuery('fetchPosts', () =>
    fetch('https://jsonplaceholder.typicode.com/posts').then(res =>
        res.json()
    )
)

    const isError = error ? error : false;

    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>An error has occurred: {error.message}</div>

    return (
        <div>
            {
                data.map(post => (
                    <div key={post.id}>
                        <h2>{post.title}</h2>
                    </div>
                ))
            }
        </div>
    )
}

export default PostsComponent