export interface SoundMeta {
  label: string;
  ipa: string;
  example: string;
  group: string;
  desc: string;
}

export const SOUND_META: Record<string, SoundMeta> = {
  // Vowels
  'long-e':   { label: 'Long E',    ipa: 'iː',  example: 'beat',    group: 'Vowels',           desc: 'The high front tense vowel, as in "see", "be", "free".' },
  'short-i':  { label: 'Short I',   ipa: 'ɪ',   example: 'bit',     group: 'Vowels',           desc: 'The high front lax vowel, as in "it", "him", "will".' },
  'long-a':   { label: 'Long A',    ipa: 'eɪ',  example: 'bait',    group: 'Vowels',           desc: 'The mid front diphthong, as in "say", "make", "day".' },
  'short-e':  { label: 'Short E',   ipa: 'ɛ',   example: 'bet',     group: 'Vowels',           desc: 'The mid front lax vowel, as in "end", "bed", "said".' },
  'short-a':  { label: 'Short A',   ipa: 'æ',   example: 'bat',     group: 'Vowels',           desc: 'The low front vowel, as in "and", "cat", "hand".' },
  'short-o':  { label: 'Short O',   ipa: 'ɑː',  example: 'bot',     group: 'Vowels',           desc: 'The low back vowel, as in "hot", "father", "calm".' },
  'aw':       { label: 'AW',        ipa: 'ɔː',  example: 'bought',  group: 'Vowels',           desc: 'The mid-low back rounded vowel, as in "law", "saw", "all".' },
  'long-o':   { label: 'Long O',    ipa: 'oʊ',  example: 'boat',    group: 'Vowels',           desc: 'The mid back diphthong, as in "go", "home", "know".' },
  'long-u':   { label: 'Long U',    ipa: 'uː',  example: 'boot',    group: 'Vowels',           desc: 'The high back tense vowel, as in "you", "true", "move".' },
  'short-u':  { label: 'Short U',   ipa: 'ʌ',   example: 'but',     group: 'Vowels',           desc: 'The mid-back stressed vowel, as in "up", "love", "cup".' },
  'schwa':    { label: 'Schwa',     ipa: 'ə',   example: 'about',   group: 'Vowels',           desc: 'The unstressed mid central vowel, as in "about", "balloon", "sofa".' },
  'r-schwa':  { label: 'R-Schwa',  ipa: 'ɚ',   example: 'better',  group: 'Vowels',           desc: 'The unstressed r-colored central vowel, as in "better", "color", "brother".' },
  'r-vowel':  { label: 'R-Vowel',  ipa: 'ɝ',   example: 'bird',    group: 'Vowels',           desc: 'The stressed r-colored vowel, as in "bird", "nurse", "purple".' },
  'long-i':   { label: 'Long I',    ipa: 'aɪ',  example: 'bite',    group: 'Vowels',           desc: 'The low front diphthong, as in "my", "time", "right".' },
  'ow':       { label: 'OW',        ipa: 'aʊ',  example: 'bout',    group: 'Vowels',           desc: 'The back diphthong, as in "out", "now", "how".' },
  'short-oo': { label: 'Short OO',  ipa: 'ʊ',   example: 'foot',    group: 'Vowels',           desc: 'The high back lax vowel, as in "book", "put", "could".' },
  'oi':       { label: 'OI',        ipa: 'ɔɪ',  example: 'boy',     group: 'Vowels',           desc: 'The back-front diphthong, as in "oil", "join", "voice".' },
  // R-controlled
  'ar':       { label: 'AR',        ipa: 'ɑːr', example: 'car',     group: 'R-Controlled',     desc: 'The r-colored low back vowel, as in "car", "star", "far".' },
  'or':       { label: 'OR',        ipa: 'ɔːr', example: 'for',     group: 'R-Controlled',     desc: 'The r-colored mid back vowel, as in "for", "more", "four".' },
  'air':      { label: 'AIR',       ipa: 'ɛr',  example: 'care',    group: 'R-Controlled',     desc: 'The r-colored mid front vowel, as in "care", "there", "share".' },
  'ear':      { label: 'EAR',       ipa: 'ɪr',  example: 'here',    group: 'R-Controlled',     desc: 'The r-colored high front vowel, as in "here", "year", "near".' },
  'oor':      { label: 'OOR',       ipa: 'ʊɚ',  example: 'poor',    group: 'R-Controlled',     desc: 'The r-colored high back vowel, as in "poor", "cure", "tour".' },
  // Stops
  'p':        { label: '/p/',       ipa: 'p',   example: 'pat',     group: 'Stops',            desc: 'Voiceless bilabial stop, as in "pen", "spin", "tip".' },
  'b':        { label: '/b/',       ipa: 'b',   example: 'bat',     group: 'Stops',            desc: 'Voiced bilabial stop, as in "bed", "cab".' },
  't':        { label: '/t/',       ipa: 't',   example: 'top',     group: 'Stops',            desc: 'Voiceless alveolar stop, as in "ten", "sit".' },
  'd':        { label: '/d/',       ipa: 'd',   example: 'dog',     group: 'Stops',            desc: 'Voiced alveolar stop, as in "den", "bad".' },
  'k':        { label: '/k/',       ipa: 'k',   example: 'cat',     group: 'Stops',            desc: 'Voiceless velar stop, as in "key", "sky", "back".' },
  'g':        { label: '/g/',       ipa: 'ɡ',   example: 'get',     group: 'Stops',            desc: 'Voiced velar stop, as in "go", "big".' },
  // Fricatives
  'f':        { label: '/f/',       ipa: 'f',   example: 'fish',    group: 'Fricatives',       desc: 'Voiceless labiodental fricative, as in "fan", "off".' },
  'v':        { label: '/v/',       ipa: 'v',   example: 'van',     group: 'Fricatives',       desc: 'Voiced labiodental fricative, as in "van", "of".' },
  'th':       { label: '/θ/',       ipa: 'θ',   example: 'think',   group: 'Fricatives',       desc: 'Voiceless dental fricative, as in "thin", "bath", "math".' },
  'dh':       { label: '/ð/',       ipa: 'ð',   example: 'this',    group: 'Fricatives',       desc: 'Voiced dental fricative, as in "the", "them", "bathe".' },
  's':        { label: '/s/',       ipa: 's',   example: 'sit',     group: 'Fricatives',       desc: 'Voiceless alveolar fricative, as in "sit", "pass".' },
  'z':        { label: '/z/',       ipa: 'z',   example: 'zip',     group: 'Fricatives',       desc: 'Voiced alveolar fricative, as in "zoo", "buzz".' },
  'sh':       { label: '/ʃ/',       ipa: 'ʃ',   example: 'ship',    group: 'Fricatives',       desc: 'Voiceless postalveolar fricative, as in "ship", "wish".' },
  'zh':       { label: '/ʒ/',       ipa: 'ʒ',   example: 'measure', group: 'Fricatives',       desc: 'Voiced postalveolar fricative, as in "measure", "vision".' },
  'h':        { label: '/h/',       ipa: 'h',   example: 'hat',     group: 'Fricatives',       desc: 'Voiceless glottal fricative, as in "hat", "ahead".' },
  // Affricates
  'ch':       { label: '/tʃ/',      ipa: 'tʃ',  example: 'chat',    group: 'Affricates',       desc: 'Voiceless postalveolar affricate, as in "chip", "much".' },
  'j':        { label: '/dʒ/',      ipa: 'dʒ',  example: 'jump',    group: 'Affricates',       desc: 'Voiced postalveolar affricate, as in "jump", "edge".' },
  // Nasals
  'm':        { label: '/m/',       ipa: 'm',   example: 'map',     group: 'Nasals',           desc: 'Bilabial nasal, as in "map", "him".' },
  'n':        { label: '/n/',       ipa: 'n',   example: 'nap',     group: 'Nasals',           desc: 'Alveolar nasal, as in "nap", "on".' },
  'ng':       { label: '/ŋ/',       ipa: 'ŋ',   example: 'sing',    group: 'Nasals',           desc: 'Velar nasal, as in "sing", "ring", "think".' },
  // Liquids & Glides
  'l':        { label: '/l/',       ipa: 'l',   example: 'lip',     group: 'Liquids & Glides', desc: 'Alveolar lateral approximant, as in "lip", "well".' },
  'r':        { label: '/r/',       ipa: 'r',   example: 'red',     group: 'Liquids & Glides', desc: 'Alveolar approximant, as in "red", "car".' },
  'w':        { label: '/w/',       ipa: 'w',   example: 'wet',     group: 'Liquids & Glides', desc: 'Labial-velar approximant, as in "wet", "away".' },
  'y':        { label: '/j/',       ipa: 'j',   example: 'yes',     group: 'Liquids & Glides', desc: 'Palatal approximant, as in "yes", "use", "beyond".' },
};

export const GROUP_ORDER = [
  'Vowels', 'R-Controlled', 'Stops', 'Fricatives', 'Affricates', 'Nasals', 'Liquids & Glides',
];
