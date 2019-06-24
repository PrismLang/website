import isBrowser from "./isBrowser";

export default async () => {
    if (!isBrowser()) return;

    let response = await window.fetch("https://api.github.com/repos/PrismLang/binaries", {
        method: "GET",
        headers: {
            "Accept": "application/json",
            "User-Agent": window.navigator.userAgent,
        },
    }).then(res => res.json()).catch(() => {});

    return response.pushed_at;
};
