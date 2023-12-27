import { useEffect, useState } from "react";

export const useDebounce = (callback: Function, delay: number = 1000) => {
  const [timer, setTimer] = useState<number | null>(null);

  const debounce = (func: Function) => {
    return function (this: any, ...args: any[]) {
      const context = this;
      if (timer) clearTimeout(timer);
      const localTimer = setTimeout(() => {
        setTimer(null);
        func.apply(context, args);
      }, delay);
      setTimer(localTimer);
    };
  };

  const handleSearch = debounce(callback);

  return { handleSearch };
};

export default useDebounce;
