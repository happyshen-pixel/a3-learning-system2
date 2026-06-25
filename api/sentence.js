
export default function handler(req,res){
  const {word} = req.body || {};
  res.status(200).json({
    text:`The concept of ${word} is widely used in academic research.`
  });
}
