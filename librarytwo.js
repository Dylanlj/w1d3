var library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             },
  printPlaylists : function () {
    for(var key in this.playlists){
      var path = this.playlists[key]
      var toLog = `${key}: ${path.name} - ${path.tracks.length} tracks` 
      console.log(toLog) 
    }
  },      

  printPlaylists : function () {

    for(var key in this.playlists){
      var path = this.playlists[key]
      var toLog = `${key}: ${path.name} - ${path.tracks.length} tracks` 
      console.log(toLog) 
    }
  },

  printTracks : function () {
    for(var key in this.tracks){
      var path = this.tracks[key]
      var toLog = `${key}: ${path.name} by ${path.artist} (${path.album})` 
      console.log(toLog) 
    }
  },

  printPlaylist : function (playlistId) {
      var path = this.playlists[playlistId]
      var toLog = `${playlistId}: ${path.name} - ${path.tracks.length} tracks` 
      console.log(toLog) 
      for(var key of path.tracks){
        var path = this.tracks[key]
        var toLog = `${key}: ${path.name} by ${path.artist} (${path.album})` 
        console.log(toLog) 
      };
  },

  addTrackToPlaylist : function (trackId, playlistId) {
    var trackToAdd = this.tracks[trackId].id;
    this.playlists[playlistId].tracks.push(trackToAdd)
  },

  uid : function() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  },

  addTrack : function (name, artist, album) {
    var objectToAdd = {
      id : uid(),
      name : name,
      artist: artist,
      album: album
    }
    this.tracks[objectToAdd.id] = objectToAdd;
  },

  addPlaylist : function (name) {
    var playlistToAdd = {
      id : uid(),
      name : name,
      tracks : [],
    }
    this.playlists[playlistToAdd.id] = playlistToAdd;
  },

}


library.printTracks()
