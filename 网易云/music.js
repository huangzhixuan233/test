function $(id){
  return document.getElementById(id);
}
function Searchtext(){
  if(window.event.keyCode==13){
    searchMusic();
  }
}
var songid = new Array();
function searchMusic(){//查询歌曲
      var str = document.getElementById("inputsearch").value;
      if(!str){
        alert("搜索框不能为空！")
      }else{
        axios.get('http://localhost:3000/search?keywords=' + str)
        .then(response => {
            var songs=response.data.result.songs;
            setSongslist(songs);
        })
      }
}
function setSongslist(songs){
      let info="";
      var songlen=songs.length;
      songid=[];
      info+=`<tr>
                <th></th>
                <th>歌名</th>
                <th>歌手</th>
            </tr>`;
      for(let i=0;i<songlen;i++){
        songid.push(songs[i].id);
        if(i%2==0){
          info+=`<tr>
            <td><a href="#" id=song${i} style="width:24px;height:24px" onclick="playmusic(${i});"><img src="/网易云/images/小播.png"></img></a></td>
            <td class="td1">${songs[i].name}</td>
            <td class="td1">${songs[i].artists[0].name}</td>
            </tr>`;
        }
        if(i%2!=0){
          info+=`<tr>
            <td><a href="#" id=song${i} style="width:24px;height:24px" onclick="playmusic(${i});"><img src="/网易云/images/小播.png"></img></a></td>
            <td class="td2">${songs[i].name}</td>
            <td class="td2">${songs[i].artists[0].name}</td>
            </tr>`;
        }
      }
      document.getElementById('songlist').innerHTML=info; 
}
function playmusic(i){
      var songurl;
      var id=songid[i];
      axios.get('http://localhost:3000/song/url?id='+id)
      .then(response =>{
        songurl=response.data.data[0].url
        var audio=document.getElementById('song');
        audio.src=songurl;
      });
      
}