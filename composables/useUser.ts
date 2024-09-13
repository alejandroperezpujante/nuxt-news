import type { User } from "lucia";

export default function (): Ref<User | null> {
	const user = useState<User | null>('user', () => null)
	return user
}
