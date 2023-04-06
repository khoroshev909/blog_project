export function getQueryParams(params: Record<string, string | undefined>) {
    const searchParams = new URLSearchParams(window.location.search);
    Object.entries(params).forEach(([name, value]) => {
        if (value) {
            searchParams.set(name, value);
        }
    });
    const result = searchParams.toString();
    return result ? `?${result}` : '';
}

export function addQueryParams(params: Record<string, string | undefined>) {
    window.history.pushState(undefined, '', getQueryParams(params));
}
