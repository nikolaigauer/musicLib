class Library {
  constructor (name, creator) {
  this.name = name;
  this.creator = creator;
  this.playlists = [];
  }
}

const testLibrary = new Library("The Name", "Coolio")
console.log(testLibrary)

class Playlist {
  constructor (name) {
    this.name = name;
    this.tracks = [];
  }
  // overallRating () => {
  //   let sum = 0;

  // }
  totalDuration() {
    this.tracks.forEach(() => {
      sumOfLength += track.length;
    })
    return sumOfLength;
  }
}

class Track {
  constructor (title, rating, length) {
    this.title = title;
    this.rating = rating;
    this.length = length;
  }
}