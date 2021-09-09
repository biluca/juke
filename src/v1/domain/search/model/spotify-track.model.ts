export class SpotifyTrack {
  id: string;
  name: string;
  album: string;
  popularity: string;
  duration_ms: number;
  href: string;
  preview_url: string;
  uri: string;

  static sortByPopularity(a, b) {
    return a.popularity < b.popularity ? 1 : -1;
  }

}
