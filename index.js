const Lautfm = require('lautfm')
const laut = new Lautfm();
let $ = require('jquery');
let audioPlayer = $('audio').get(0);
let filter = {
    by: 'letter', // filter by letter
    term: 'h'     // stationname starting with 'e'
  }

  let append = "";
  laut.getStations(filter)
    .then(stations => {
        console.log(stations);
        stations.forEach(station => {
            append = `
            <li class="list-group-item" ondblclick="streamStation(station.stream_url, this)">
                <img class="img-circle media-object pull-left" src="${station.images.station_120x120}" width="32" height="32">
                <div class="media-body">
                    <strong>${station.display_name}</strong>
                    <p>${station.description}</p>
                </div>
            </li>  
            `;
        
        $('#station-list').append(append);    
        });

    })
    .catch(err => console.error(err))


    function streamStation(streamURL,li){
        $('.list-group-item').removeClass('active');
        $(li).addClass('active'); 
        audioPlayer.src = streamURL;
        audioPlayer.load();
        audioPlayer.play();
    }