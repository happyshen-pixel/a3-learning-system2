
export default function handler(req,res){
  res.status(200).json({
    status:"ok",
    version:"final-stable-no-crash"
  });
}
