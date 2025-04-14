export function DateFormate(timestamp: string | number | Date): string {
    const now = new Date();
    const date = new Date(timestamp);
    const seconds = Math.floor((now.getTime() - date.getTime()) / 1000);
  
    const intervals: [number, string, string, string][] = [
      [31536000, 'سنة', 'سنتين', 'سنوات'],
      [2592000, 'شهر', 'شهرين', 'أشهر'],
      [604800, 'أسبوع', 'أسبوعين', 'أسابيع'],
      [86400, 'يوم', 'يومين', 'أيام'],
      [3600, 'ساعة', 'ساعتين', 'ساعات'],
      [60, 'دقيقة', 'دقيقتين', 'دقائق'],
      [1, 'ثانية', 'ثانيتين', 'ثوانٍ'],
    ];
  
    for (const [secondsPerUnit, singular, dual, plural] of intervals) {
      const interval = Math.floor(seconds / secondsPerUnit);
      if (interval >= 1) {
        if (interval === 1) return `قبل ${singular}`;
        if (interval === 2) return `قبل ${dual}`;
        return `قبل ${interval} ${plural}`;
      }
    }
  
    return 'الآن';
  }
  