const episodes = [
  { id: 's06e01', title: 'The Red Woman' },
  { id: 's06e02', title: 'Home' },
  { id: 's06e03', title: 'Oathbreaker' },
  { id: 's06e04', title: 'Book of the Stranger' },
  { id: 's06e05', title: 'The Door' },
  { id: 's06e06', title: 'Blood of My Blood' },
  { id: 's06e07', title: 'The Broken Man' },
  { id: 's06e08', title: 'No One' },
  { id: 's06e09', title: 'Battle of the Bastards' },
];

const finaleEpisode = { id: 's06e10', title: 'The Winds of Winter' };

function addToPlaylist(playlist, episode){
  var copyPlaylist = playlist.slice(0, playlist.length)
  return [...copyPlaylist, episode]
}

function removeFromPlaylist(playlist, episode){
  var copyPlaylist = playlist.slice(0, playlist.length)
  var index = playlist.indexOf(episode)
  copyPlaylist.splice(index, 1)
  return copyPlaylist
}

function getNextEpisodeInPlaylist(playlist){
  return playlist[0]
}

function bingeWatch(playlist){
  var copyPlaylist = playlist.slice(0, playlist.length)
  if (copyPlaylist.length === 0){
    return 'Please let there be more!'
  } else {
    return bingeWatch(copyPlaylist.slice(1, copyPlaylist.length))
  }
}
