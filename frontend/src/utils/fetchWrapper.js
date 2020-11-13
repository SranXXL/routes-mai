const fetchWrapper = async (path) => {
    const response = await fetch(path);

    if (response.ok) {
        const data = await response.json();
        return { status: response.status, data };
    }
    throw Error;
};

export default fetchWrapper;
