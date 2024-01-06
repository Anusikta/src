import { useState, useEffect } from "react";
const useAnu = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            fetch(url)
            .then(res => {
                if(!res.ok) {
                    throwError('Could not fetch');
                }
                return res.json();
            })
            .then(d => {
                setData(d);
                setIsPending(false);
                setError(null);
            })
            .catch(err => {
                setIsPending(false);
                setError(err.message);
            })
        },3000);
    }, [url])

    return {data, isPending, error}
}

export default useAnu;