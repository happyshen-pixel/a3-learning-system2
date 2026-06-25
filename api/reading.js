
export default function handler(req,res){
  const body = req.body || {};
  const words = body.words || ["education","science","data"];

  res.status(200).json({
    text:`This passage discusses ${words.join(", ")} in an academic context.`
  });
}
