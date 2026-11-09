export type SeparatorTone = 'neutral' | 'emerald' | 'gold';

export function getSeparatorClasses(tone: SeparatorTone = 'neutral'): {
  line: string;
  ambient: string;
} {
  switch (tone) {
    case 'emerald':
      return {
        line: 'from-transparent via-[#10B981]/30 to-transparent',
        ambient: 'from-transparent via-[#10B981]/[0.04] to-transparent',
      };
    case 'gold':
      return {
        line: 'from-transparent via-[#E5A93C]/25 to-transparent',
        ambient: 'from-transparent via-[#E5A93C]/[0.03] to-transparent',
      };
    case 'neutral':
    default:
      return {
        line: 'from-transparent via-white/15 to-transparent',
        ambient: 'from-transparent via-white/[0.02] to-transparent',
      };
  }
}
