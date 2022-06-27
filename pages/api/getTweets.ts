// // Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import type { NextApiRequest, NextApiResponse } from "next"
import { SanityClient } from "next-sanity"
import { Tweet } from '../../typings'

type Data = {
  tweets: Tweet[]
}

export default function handler(req, res) {
    res.status(200).json({ name: 'John Doe' })
}
  
// export default function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {

//   res.status(200).json({ name: 'John Doe' })
// }
  