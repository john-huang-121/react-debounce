import { useState, useEffect } from 'react';

const useDebounce = (cb, delay = 300) => {
    const [debounced, setDebounced] = useState(cb);

    useEffect(() => {
        const id = setTimeout(() => setDebounced(cb), delay)
        return () => clearTimeout(id);
    }, [cb, delay]);

    return debounced;
}

export default useDebounce;