class Library {
  constructor (name, creator) {
  this.name = name;
  this.creator = creator;
  this.playlists = [];
  }
}

// tester library
const testLibrary = new Library("The Name", "Coolio")
console.log(testLibrary)

class Playlist {
  constructor (name) {
    this.name = name;
    this.tracks = [];
    // this.rating = []; overallRating(this.tracks.rating)
    this.duration = [];
  }

// attempt to push number of tracks as number as a total to list in either playlist or library
  // numberOfTracks(track) {
  //   let sumTracks = 0;
  //   this.tracks.forEach((track) => {
  //     sumTracks += track;
  //   })
  //   this.tracks.push(sumTracks)
  // }

  overallRating() {
    let sumRating = 0;
    this.tracks.forEach((track) => {
        sumRating += track.rating;
      });
      return sumRating;
  }

// this needs work
  totalDuration() {
    let sumLength = 0
    this.tracks.forEach((track) => {
      sumLength += track.length;
    })
    return sumLength;
    duration.push(sumLength)

  }


}

const testPlaylist = new Playlist("Best Playlist");
console.log(testPlaylist);


class Track {
  constructor (title, rating, length) {
    this.title = title;
    this.rating = rating;
    this.length = length;
  }
}

//tester tracks
const roygbiv = new Track("Roygbiv", 5, 2.5);
const ritournelle = new Track("La Ritournelle", 4, 7.5)
// console.log(roygbiv, ritournelle)
testPlaylist.tracks.push(roygbiv, ritournelle);
testLibrary.playlists.push(testPlaylist);
console.log(testPlaylist);
console.log(testLibrary)