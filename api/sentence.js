
export default function handler(req,res){
  const body = req.body || {};
  const word = body.word || "learning";

  res.status(200).json({
    text:`The academic concept of ${word} is widely used in modern education.`
  });
}
