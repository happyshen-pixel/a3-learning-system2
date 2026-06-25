
async function safeFetch(url,data){
  try{
    const res = await fetch(url,{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(data)
    });
    return await res.json();
  }catch(e){
    return {text:"API error"};
  }
}

async function start(){
  const word="impact";
  document.getElementById("word").innerText=word;

  const data = await safeFetch("/api/sentence",{word});
  document.getElementById("sentence").innerText=data.text;
}

async function test(){
  const data = await safeFetch("/api/reading",{words:["impact","data","method"]});
  document.getElementById("reading").innerText=data.text;
}
