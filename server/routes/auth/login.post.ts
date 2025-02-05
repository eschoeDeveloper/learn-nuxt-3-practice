import { getUserByEmail } from '~/server/models/user';

export default defineEventHandler(async (event) => {
  const body = readBody<{ email: string; password: string }>(event);
  const { email, password } = await body;

  if (!email || !password) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Email Address And Password Not Matched',
    });
  }

  const userWithPassword = getUserByEmail(email);

  if (!userWithPassword) {
    throw createError({
      statusCode: 401,
      statusMessage: 'Bad Credentials',
    });
  }

  const verified = verifyPassword(password, userWithPassword.password);

  if (!verified) {
    throw createError({
      statusCode: 401,
      statusMessage: 'Bad Credentials',
    });
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { password: _password, ...userWithoutPassword } = userWithPassword;

  setCookie(event, '__user', JSON.stringify(userWithoutPassword));

  return {
    user: userWithoutPassword,
  };
});
