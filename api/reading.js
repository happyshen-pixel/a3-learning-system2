
export default function handler(req,res){
  const {words} = req.body || {};
  res.status(200).json({
    text:`This passage discusses ${words.join(", ")} in an academic context.`
  });
}
