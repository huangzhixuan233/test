function $(id)
{
    return document.getElementsByTagName(id);
}
axios.get('http://localhost:3000/personalized?limit=8')
        .then(result => {
            var list = result.data.result;
            setlist(list)
        }
    )
function setlist(list)
{
    var info='';
    info += `<table>`;
    for(var i=0;i<list.length;i++)
    {
        if(i%4==0)
        {
            info +=`<tr>`
        }
        let name = list[i].name;
        let id = list[i].id;
        let pic = list[i].picUrl;
        info +=`<td class="Recommendlisttd"><div class="Recommendlisttd"><a href="../网易云/temp2.html" onclick="getcookie(${id});" class="listhref"><img src="${pic}" class="Recommendlistimg"><br><h4>${name}</h4></a></div></td>`
        if(i%4==3)
        {
            info +=`</tr>`
        }

    }
    info += `</table>`;
    document.getElementById('Recommendlist').innerHTML=info;
}
function getcookie(id)
{
    location.href = 'temp2.html'
    //设置localStorage
    window.localStorage.setItem('ID',id);
}
