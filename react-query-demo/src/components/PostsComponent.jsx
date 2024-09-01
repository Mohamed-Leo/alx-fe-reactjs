import { useQuery } from 'react-query'

function PostsComponent() {
    const { isLoading, error, data } = useQuery('repoData', () =>
    fetch('https://jsonplaceholder.typicode.com/posts').then(res =>
        res.json()
    )
)

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>An error has occurred: {error.message}</div>

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