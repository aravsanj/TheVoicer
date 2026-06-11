import soundsData from './sounds.json';

export interface SoundMeta {
  id: string;
  ipa: string;
  /** Respelling abbreviation used in words.json (uppercase = stressed, lowercase = unstressed) */
  key: string;
  label: string;
  examples: string[];
  group: string;
  desc: string;
}

export const SOUND_META: Record<string, SoundMeta> = Object.fromEntries(
  soundsData.sounds.map(s => [s.id, s as SoundMeta])
);

export const GROUP_ORDER: string[] = soundsData.groupOrder;
