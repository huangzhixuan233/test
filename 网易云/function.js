/*轮播图 */   
   var curImg =0;
   var imgLength = $("imgdiv").getElementsByTagName("li").length;
   for(var i =0;i<10;i++)
   {
      $("buttom"+i).setAttribute("style","background:white");
   }
   $("buttom0").setAttribute("style","background:red");
   var time = setInterval(bannerImg,4000);





   
function buttomclick (j)
{
   clearInterval(time);
   for(var i =0;i<10;i++)
   {
      $("buttom"+i).setAttribute("style","background-color:white");
      $("banner"+i).setAttribute("class","out");
   }
   $("banner"+j).setAttribute("class","on");
   $("buttom"+j).setAttribute("style","background-color:red");
   time = setInterval(bannerImg,4000)
}
function bannerImg()
{
   if(curImg<imgLength-1)
   {
      curImg++;
   }
   else
   {
      curImg = 0;
   }
   $("banner"+curImg).setAttribute("class","on");
   if(curImg==0)
   {
      $("banner"+9).setAttribute("class","out");
   }
   else
   {
      $("banner"+(curImg-1)).setAttribute("class","out");
   }
   for(var i =0;i<10;i++)
   {
      $("buttom"+i).setAttribute("style","background:white");
   }
   $("buttom"+curImg).setAttribute("style","background:red")
   
}
$("nextimg").onclick = function()
   {
      clearInterval(time);
      bannerImg();
      time = setInterval(bannerImg,4000);
   }
$("preimg").onclick = function()
   {
      clearInterval(time);
      if(curImg==0)
      {
          curImg = imgLength-1;
      }
      else
      {
          curImg--;
      }
      $("banner"+curImg).setAttribute("class","on");
         if(curImg==imgLength-1)
            {
                $("banner"+0).setAttribute("class","out");
            }
            else
            {
                $("banner"+(curImg+1)).setAttribute("class","out");
            }

            for(var i = 0 ; i < 10 ; i++)
            {
                $("buttom"+i).setAttribute("style","background-color:white");
            }
            $("buttom"+curImg).setAttribute("style","background-color:red");

            time = setInterval(bannerImg,4000)
}

function $(id)
{
   return document.getElementById(id);
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
