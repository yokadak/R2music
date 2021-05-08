
//过滤歌单歌曲的详情信息
export function getPlayListSongInfo(theSong){
  return new Asong({
    id: theSong.id,
    name: theSong.name,
    singer: getSingerName(theSong.ar),
    singerId: getSingerId(theSong.ar),
    album: theSong.al.name,
    albumId: theSong.al.id,
    image: theSong.al.picUrl
  })
}
