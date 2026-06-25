
/* SAFE FETCH (never crash UI) */
async function safeFetch(url, body){
  try{
    const res = await fetch(url,{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body: JSON.stringify(body || {})
    });

    const data = await res.json();
    return data || {};
  }catch(e){
    console.error("API error:",e);
    return {text:"system error (safe fallback)"};
  }
}

/* SAFE STATE (fix conversation_id crash) */
const SAFE_STATE = {
  conversation_id: "default-session",
  messages: []
};

/* START */
async function start(){
  try{
    const word = "impact";
    document.getElementById("word").innerText = word;

    const data = await safeFetch("/api/sentence",{word});

    document.getElementById("sentence").innerText =
      data?.text || "no sentence generated";
  }catch(e){
    console.error(e);
  }
}

/* TEST */
async function test(){
  try{
    const data = await safeFetch("/api/reading",{
      words:["impact","data","method"]
    });

    document.getElementById("reading").innerText =
      data?.text || "no reading generated";
  }catch(e){
    console.error(e);
  }
}
