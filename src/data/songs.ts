export interface Song {
  id: string;
  title: string;
  artist: string;
  url: string;
  duration: string;
  genre: string;
  description: string;
}

export const songs: Song[] = [
  {
    id: "track-1",
    title: "Aari Aari",
    artist: "DJ Moral",
    url: "/songs/song1.mp3",
    duration: "04:13",
    genre: "Bhangra / Dance",
    description: "High-energy edit of Aari Aari featuring heavy bass lines, clean synth melodies, and live bhangra rhythms."
  },
  {
    id: "track-2",
    title: "Ishq Jalakar",
    artist: "DJ Moral",
    url: "/songs/song2.mp3",
    duration: "05:05",
    genre: "Bollywood Remix",
    description: "Driving Bollywood electronic mix combining emotional vocal cuts with standard high-energy mainstage club drops."
  },
  {
    id: "track-3",
    title: "Kay Sera Sera",
    artist: "DJ Moral",
    url: "/songs/song3.mp3",
    duration: "05:46",
    genre: "Afro House Edit",
    description: "Unique Afro House Edit of the classic Kay Sera Sera featuring organic percussion, smooth acoustic pads, and deep grooves."
  },
  {
    id: "track-4",
    title: "Lut Le Gaya",
    artist: "DJ Moral",
    url: "/songs/song4.mp3",
    duration: "03:52",
    genre: "Bollywood Club",
    description: "Club-ready edit of Lut Le Gaya with pumping progressive bass rhythms and energetic vocal chops."
  },
  {
    id: "track-5",
    title: "Main Aur Tu",
    artist: "DJ Moral",
    url: "/songs/song5.mp3",
    duration: "03:30",
    genre: "Progressive Mix",
    description: "Uplifting melodic house progression featuring warm vocal harmonies and driving synthesizer builds."
  },
  {
    id: "track-6",
    title: "Uff Teri Adaa",
    artist: "DJ Moral",
    url: "/songs/song6.mp3",
    duration: "05:51",
    genre: "Commercial House",
    description: "Smooth, energetic deep-house edit of Uff Teri Adaa, built for beach clubs, warmups, and lounges."
  },
  {
    id: "track-7",
    title: "Vaari Jaavan",
    artist: "DJ Moral",
    url: "/songs/song7.mp3",
    duration: "06:17",
    genre: "Melodic House",
    description: "Stunning, emotional melodic edit of Vaari Jaavan. Soft chords, driving bass sweeps, and rich atmospheric drops."
  },
  {
    id: "track-8",
    title: "Aabaad Barbaad",
    artist: "DJ Moral",
    url: "/songs/song8.mp3",
    duration: "03:30",
    genre: "Bollywood Remix",
    description: "Dynamic and high-energy edit of Aabaad Barbaad, featuring driving club beats and clean vocal arrangements."
  }
];
