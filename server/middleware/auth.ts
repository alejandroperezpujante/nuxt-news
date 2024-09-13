import type { Session, User } from "lucia";

export default defineEventHandler(async (event) => {
	const sessionId = getCookie(event, auth.sessionCookieName) ?? null;
	if (!sessionId) {
		event.context.session = null;
		event.context.user = null;
		return;
	}

	const { session, user } = await auth.validateSession(sessionId);
	if (session && session.fresh) {
		appendResponseHeader(
			event,
			"Set-Cookie",
			auth.createSessionCookie(session.id).serialize()
		);
	}
	if (!session) {
		appendResponseHeader(event, "Set-Cookie", auth.createBlankSessionCookie().serialize());
	}
	event.context.session = session;
	event.context.user = user;
})

declare module "h3" {
	interface H3EventContext {
		user: User | null;
		session: Session | null;
	}
}
