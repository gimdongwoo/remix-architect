// @ts-ignore
import body from '@public/robots.txt';

export const loader = () => {
  return new Response(body, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain',
    },
  });
};
