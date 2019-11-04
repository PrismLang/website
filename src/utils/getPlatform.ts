export default () => {
    if (!window.navigator.platform) return;

    if (window.navigator.platform.toLowerCase().startsWith("linux")) return "Linux";
    if (window.navigator.platform.toLowerCase().startsWith("mac")) return "macOS";
    if (window.navigator.platform.toLowerCase().startsWith("win")) return "Windows";
};
