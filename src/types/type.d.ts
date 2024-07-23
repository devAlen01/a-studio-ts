interface Release {
  id: number;
  code: string;
  ordinal: number;
  names: {
    ru: string;
    en: string;
    alternative: null | string;
  };
}

interface Franchise {
  franchise: {
    id: string;
    name: string;
  };
  releases: Release[];
}

interface Poster {
  small: {
    url: string;
    raw_base64_file: null;
  };
  medium: {
    url: string;
    raw_base64_file: null;
  };
  original: {
    url: string;
    raw_base64_file: null;
  };
}

interface Hls {
  fhd: string;
  hd: string;
  sd: string;
}

interface List2 {
  episode: number;
  name?: string;
  uuid: string;
  created_timestamp: number;
  preview: string;
  skips: Skips;
  hls: Hls;
}

interface Player {
  alternative_player: null;
  host: string;
  is_rutube: boolean;
  episodes: {
    first: number;
    last: number;
    string: string;
  };
  list: List2[];

  rutube: {};
}

interface TorrentQuality {
  string: string;
  type: string;
  resolution: string;
  encoder: string;
  lq_audio: null;
}

interface Torrent {
  torrent_id: number;
  episodes: {
    first: number;
    last: number;
    string: string;
  };
  quality: TorrentQuality;
  leechers: number;
  seeders: number;
  downloads: number;
  total_size: number;
  size_string: string;
  url: string;
  magnet: string;
  uploaded_timestamp: number;
  hash: string;
  metadata: null;
  raw_base64_file: null;
}

interface Team {
  voice: string[];
  translator: string[];
  editing: string[];
  decor: string[];
  timing: string[];
}

interface Status {
  string: string;
  code: number;
}

interface Type {
  full_string: string;
  code: number;
  string: string;
  episodes: number;
  length: number;
}

interface Season {
  string: string;
  code: number;
  year: number;
  week_day: number;
}

interface Blocked {
  copyrights: boolean;
  geoip: boolean;
  geoip_list: any[];
}

interface AnimeData {
  id: number;
  code: string;
  names: {
    ru: string;
    en: string;
    alternative: null;
  };
  franchises: Franchise[];
  announce: null;
  status: Status;
  posters: Poster;
  updated: number;
  last_change: number;
  type: Type;
  genres: string[];
  team: Team;
  season: Season;
  description: string;
  in_favorites: number;
  blocked: Blocked;
  player: Player;
  torrents: {
    episodes: {
      first: number;
      last: number;
      string: string;
    };
    list: Torrent[];
  };
}

interface FeedAnime {
  title: AnimeData;
  el: AnimeData;
}

interface Pagination {
  pages: number;
  current_page: number;
  items_per_page: number;
  total_items: number;
}

interface AnimeFeedData {
  list: FeedAnime[];
}

interface ScheduleAnime {
  day: number;
  list: AnimeData[];
}

interface Team {
  voice: string[];
  translator: string[];
  editing: string[];
  decor: string[];
  timing: [];
}

interface AnimeList {
  list: AnimeData[];
  pagination?: Pagination;
}

// ?
