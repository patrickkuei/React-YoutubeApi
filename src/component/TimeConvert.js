/* 將影片時間轉成MMSS */
//refer from https://gist.github.com/Fauntleroy/5167736
const TimeConvert = (yt_duration) => {
  const time_extractor = /([0-9]*H)?([0-9]*M)?([0-9]*S)?$/;
  const extracted = time_extractor.exec(yt_duration);
  const hours = parseInt(extracted[1], 10) || 0;
  const minutes = parseInt(extracted[2], 10) || 0;
  const seconds = parseInt(extracted[3], 10) || 0;
  return hours * 3600 * 1000 + minutes * 60 * 1000 + seconds * 1000;
};
export default TimeConvert;
