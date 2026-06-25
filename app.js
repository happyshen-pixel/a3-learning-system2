
async function callAPI(url, body){
  try{
    const res = await fetch(url,{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(body || {})
    });
    return await res.json();
  }catch(e){
    console.error(e);
    return {text:"api error"};
  }
}

async function start(){
  const word = "impact";

  document.getElementById("word").innerText = word;

  const data = await callAPI("/api/sentence",{word});

  document.getElementById("sentence").innerText =
    data?.text || "no data";
}

async function test(){
  const data = await callAPI("/api/reading",{
    words:["impact","data","method"]
  });

  document.getElementById("reading").innerText =
    data?.text || "no data";
}
