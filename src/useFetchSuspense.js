import LRU from "lru-cache";
import md5 from "md5";

const cache = new LRU(50);
if (process.env.NODE_ENV === "development") {
  window.useFetchCache = cache;
}

const defaultProcessResponse = response => response.json();

const useFetch = (
  url,
  fetchOptions = {},
  processResponse = defaultProcessResponse
) => {
  // Generate cache key
  const key = `${url}.${md5(JSON.stringify(fetchOptions))}`;
  // Load value from cache or initiate
  const value = cache.get(key) || { status: "new", data: null };

  if (value.status === "resolved") {
    return value.data;
  }

  const promise = fetch(url, fetchOptions).then(response =>
    processResponse(response)
  );

  promise.then(data => {
    value.status = "resolved";
    value.data = data;
    cache.set(key, value);
  });

  throw promise;
};

export default useFetch;
