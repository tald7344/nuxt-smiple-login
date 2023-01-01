import { Session } from "~~/model/Session";

export async function registerWithEmail(name: string, username: string, email: string, password: string) {
  try {
    const res = await $fetch<Session>('/api/auth/register', {
      method: 'POST',
      body: { username, name, email, password }
    });
    if (res) {
      useState('user').value = res
      await useRouter().push('/dashboard')
    }

  } catch (e) {
    console.log('error : ', e.toString());
  }
}