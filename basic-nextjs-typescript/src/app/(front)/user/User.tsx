import { User } from '@/types/user'
type Props = {}

async function fetchUsers(): Promise<User[]> {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    if (!response.ok) {
        throw new Error('Failed to fetch users')
    }
    return response.json() as Promise<User[]>
}

export default async function UserPage({}: Props) {
  const users = await fetchUsers()
  return (
    <>
        <h1>User Lists</h1>
        <ul className="list-disc list-inside">
            {users.map(user => (
                <li key={user.id}>{user.name} ({user.email})</li>
            ))}
        </ul>
    </>
  )
}