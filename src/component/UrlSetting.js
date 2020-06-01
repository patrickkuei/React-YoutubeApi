function UrlSetting() {
  /* 設定api網址 */
  const youtubeApi = new URL("https://www.googleapis.com/youtube/v3/videos");
  const parameters = new URLSearchParams({
    part: "snippet,contentDetails",
    chart: "mostPopular",
    maxResults: "50",
    regionCode: "TW",
    key: "AIzaSyCuO1gJqTpIqC8TOSZWAFS-o3tn-I4yuAw",
  });

  youtubeApi.search = parameters;
  const url = youtubeApi.href;

  return url;
}

export default UrlSetting;
