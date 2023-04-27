// Setup
const recordCollection = {
    2548: {
      albumTitle: 'Slippery When Wet',
      artist: 'Bon Jovi',
      tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
      albumTitle: '1999',
      artist: 'Prince',
      tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
      artist: 'Robert Palmer',
      tracks: []
    },
    5439: {
      albumTitle: 'ABBA Gold'
    }
  };
  
  // Only change code below this line
  function updateRecords(records, id, prop, value) {
    let tracks = [];
    if (records[id]) {
      if (value.length == 0 || value == "") {
        delete records[id][prop];
      }
      if (prop != "tracks" && value != "" && value.length > 0) {
        records[id][prop] = value;
      }
      if (prop == "tracks" && value != "" && value.length > 0) {
        if (records[id].hasOwnProperty("tracks")) {
          records[id].tracks.push(value);
        } else {
          tracks.push(value);
          records[id].tracks = tracks;
        }
      }
    }
    return record;
  }
  
  // updateRecords(recordCollection, 5439, 'artist', 'ABBA');
  updateRecords(recordCollection, 2548, "tracks", "");  