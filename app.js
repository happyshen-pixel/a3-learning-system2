
async function start(){
  const word="impact";
  document.getElementById("word").innerText=word;

  const res = await fetch("/api/sentence",{
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify({word})
  });

  const data = await res.json();
  document.getElementById("sentence").innerText=data.text;
}

async function test(){
  const res = await fetch("/api/reading",{
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify({words:["impact","data","method"]})
  });

  const data = await res.json();
  document.getElementById("reading").innerText=data.text;
}
