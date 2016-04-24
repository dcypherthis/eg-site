export function jsonRequestOptions(method, data) {
  return {
    method,
    headers: {
      Accept: `application/json`,
      'Content-Type': `application/json`,
    },
    body: JSON.stringify(data),
  };
}

export function parseJson(res) {
  if (res.status === 204) {
    return null;
  }

  return res.json();
}
