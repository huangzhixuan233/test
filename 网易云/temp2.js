function getcookie() 
{
    //获取传递过来的localStorage
    console.log(window.localStorage.getItem('ID'))
}
axios.get('http://localhost:3000/top/artists?offset=0&limit=30')
        .then(result => {
            var list = result.data.artists;
            console.log(list);
            setlist(list)
        }
    )
function setlist(list)
{
    var info='';
    info += `<table>`;
    for(var i=0;i<list.length;i++)
    {
        if(i%10==0)
        {
            info +=`<tr>`
        }
        let name = list[i].name;
        let id = list[i].id;
        let pic = list[i].picUrl;
        info +=`<td><div class="artist_div"><img src="${pic}" class="artistimg"><br><h4>${name}<h4></div></td>`
        if(i%10==9)
        {
            info +=`</tr>`
        }

    }
    info += `</table>`;
    document.getElementById('Artist').innerHTML=info;
}


