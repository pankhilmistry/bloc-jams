var albumPicasso = {
     title: 'The Colors',
     artist: 'Pablo Picasso',
     label: 'Cubism',
     year: '1881',
     albumArtUrl: 'assets/images/album_covers/01.png',
     songs: [
         { title: 'Blue', duration: '4:26' },
         { title: 'Green', duration: '3:14' },
         { title: 'Red', duration: '5:01' },
         { title: 'Pink', duration: '3:21'},
         { title: 'Magenta', duration: '2:15'}
     ]
 };


 var albumMarconi = {
     title: 'The Telephone',
     artist: 'Guglielmo Marconi',
     label: 'EM',
     year: '1909',
     albumArtUrl: 'assets/images/album_covers/20.png',
     songs: [
         { title: 'Hello, Operator?', duration: '1:01' },
         { title: 'Ring, ring, ring', duration: '5:01' },
         { title: 'Fits in your pocket', duration: '3:21'},
         { title: 'Can you hear me now?', duration: '3:14' },
         { title: 'Wrong phone number', duration: '2:15'}
     ]
 };

var albumNewton = {
     title: 'Equations',
     artist: 'Issac Newton',
     label: 'Spinnin Records',
     year: '1727',
     albumArtUrl: 'assets/images/album_covers/14.png',
     songs: [
         { title: 'Gravity?', duration: '3:08' },
         { title: 'My laws of motion', duration: '4:21' },
         { title: 'Apple of my eye', duration: '3:25'},
         { title: 'Reflections', duration: '6:05' },
         { title: 'Physical cosmology', duration: '4:15'}
     ]
 };

 var createSongRow = function(songNumber, songName, songLength) {
     var template =
        '<tr class="album-view-song-item">'
      + '  <td class="song-item-number" data-song-number="' + songNumber + '">' + songNumber + '</td>'
      + '  <td class="song-item-title">' + songName + '</td>'
      + '  <td class="song-item-duration">' + songLength + '</td>'
      + '</tr>'
      ;
 
     return template;
 };


     // #1
     var albumTitle = document.getElementsByClassName('album-view-title')[0];
     var albumArtist = document.getElementsByClassName('album-view-artist')[0];
     var albumReleaseInfo = document.getElementsByClassName('album-view-release-info')[0];
     var albumImage = document.getElementsByClassName('album-cover-art')[0];
     var albumSongList = document.getElementsByClassName('album-view-song-list')[0];


 var setCurrentAlbum = function(album) {
 
     // #2
     albumTitle.firstChild.nodeValue = album.title;
     albumArtist.firstChild.nodeValue = album.artist;
     albumReleaseInfo.firstChild.nodeValue = album.year + ' ' + album.label;
     albumImage.setAttribute('src', album.albumArtUrl);
 
     // #3
     albumSongList.innerHTML = '';
 
     // #4
     for (var i = 0; i < album.songs.length; i++) {
         albumSongList.innerHTML += createSongRow(i + 1, album.songs[i].title, album.songs[i].duration);
     }
 };
 
var findParentByClassName=function(element,targetClass){
    
    if(element){
        var currentParent=element.parentElement;
<<<<<<< HEAD

=======
        
>>>>>>> CP_27_PlayPause_2_BugFixes
        if(!currentParent){
            alert("No parent found");
        }

        while(currentParent.className!==targetClass && currentParent.className!==null){
            currentParent=currentParent.parentElement;
        }

        if(currentParent.className===targetClass){
            alert("No parent found with that class name");
        }
        return currentParent;
    }
};

var getSongItem = function(element) {
    switch (element.className) {
        case 'album-song-button':
        case 'ion-play':
        case 'ion-pause':
            return findParentByClassName(element, 'song-item-number');
        case 'album-view-song-item':
            return element.querySelector('.song-item-number');
        case 'song-item-title':
        case 'song-item-duration':
            return findParentByClassName(element, 'album-view-song-item').querySelector('.song-item-number');
        case 'song-item-number':
            return element;
        default:
            return;
    }  
};

var clickHandler = function(targetElement) {
<<<<<<< HEAD
    var songItem = getSongItem(targetElement);
=======
    var songItem = getSongItem(targetElement);  
>>>>>>> CP_27_PlayPause_2_BugFixes

    if (currentlyPlayingSong === null) {
         songItem.innerHTML = pauseButtonTemplate;
         currentlyPlayingSong = songItem.getAttribute('data-song-number');
     }
     else if (currentlyPlayingSong === songItem.getAttribute('data-song-number')) {
         songItem.innerHTML = playButtonTemplate;
         currentlyPlayingSong = null;
     }
     else if (currentlyPlayingSong !== songItem.getAttribute('data-song-number')) {
         var currentlyPlayingSongElement = document.querySelector('[data-song-number="' + currentlyPlayingSong + '"]');
         currentlyPlayingSongElement.innerHTML = currentlyPlayingSongElement.getAttribute('data-song-number');
         songItem.innerHTML = pauseButtonTemplate;
         currentlyPlayingSong = songItem.getAttribute('data-song-number');
     }
<<<<<<< HEAD
 }
=======
 };
>>>>>>> CP_27_PlayPause_2_BugFixes

 var songListContainer = document.getElementsByClassName('album-view-song-list')[0];
 var songRows = document.getElementsByClassName('album-view-song-item');
 var playButtonTemplate = '<a class="album-song-button"><span class="ion-play"></span></a>';
 var pauseButtonTemplate = '<a class="album-song-button"><span class="ion-pause"></span></a>';
<<<<<<< HEAD

=======
>>>>>>> CP_27_PlayPause_2_BugFixes
 var currentlyPlayingSong = null;


 window.onload = function() {
     setCurrentAlbum(albumPicasso);
     
     songListContainer.addEventListener('mouseover', function(event) {
         if(event.target.parentElement.className==='album-view-song-item'){
            var songItem = getSongItem(event.target);
<<<<<<< HEAD

            if (songItem.getAttribute('data-song-number') !== currentlyPlayingSong) {
=======
            if (songItem.getAttribute('data-song-number') !== currentlyPlayingSong){
>>>>>>> CP_27_PlayPause_2_BugFixes
                songItem.innerHTML = playButtonTemplate;
            }
         }
     });

     for (var i = 0; i < songRows.length; i++) {
         songRows[i].addEventListener('mouseleave', function(event) {
<<<<<<< HEAD
            // #1
=======
           // #1
>>>>>>> CP_27_PlayPause_2_BugFixes
             var songItem = getSongItem(event.target);
             var songItemNumber = songItem.getAttribute('data-song-number');
 
             // #2
             if (songItemNumber !== currentlyPlayingSong) {
                 songItem.innerHTML = songItemNumber;
             }
         });

         songRows[i].addEventListener('click', function(event) {
             // Event handler call
<<<<<<< HEAD
             clickHandler(event.target);
=======
               clickHandler(event.target);
>>>>>>> CP_27_PlayPause_2_BugFixes
         });
     }

     var albums=[albumPicasso, albumMarconi, albumNewton];
     var index=1;
    
     albumImage.addEventListener("click", function(event){
        setCurrentAlbum(albums[index]);
        index++;
        if(index==albums.length){
            index=0;
        }
     });
 };