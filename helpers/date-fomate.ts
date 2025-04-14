export function DateFormate(timestamp: string | number | Date): string {
    const now = new Date();
    const date = new Date(timestamp);
    const seconds = Math.floor((now.getTime() - date.getTime()) / 1000);

    const intervals: [number, string][] = [
        [31536000, 'year'],
        [2592000, 'month'],
        [604800, 'week'],
        [86400, 'day'],
        [3600, 'hour'],
        [60, 'minute'],
        [1, 'second'],
    ];

    for (const [secondsPerUnit, unit] of intervals) {
        const interval = Math.floor(seconds / secondsPerUnit);
        if (interval >= 1) {
            return `${interval} ${unit}${interval > 1 ? 's' : ''} ago`;
        }
    }

    return 'just now';
}
