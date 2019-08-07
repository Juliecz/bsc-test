export default async function fetchData({ url, method = 'GET', headers, body }) {
  return await fetch(
    url,
    {
      method,
      headers: headers,
      body,
    },
  );
}
