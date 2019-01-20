import workerpool from "workerpool";
import LRU from "lru-cache";
import md5 from "md5";

const pool = workerpool.pool();
const cache = new LRU(50);
if (process.env.NODE_ENV === "development") {
  window.useWorkerCache = cache;
}

const useWorker = (func, args) => {
  const key = `${func.name}.${md5(JSON.stringify(args))}`;
  const value = cache.get(key) || { status: "new", data: null };

  if (value.status === "resolved") {
    return value.data;
  }

  const promise = pool.exec(func, args);

  promise.then(result => {
    value.status = "resolved";
    value.data = result;
    cache.set(key, value);
  });

  throw promise;
};

export default useWorker;
