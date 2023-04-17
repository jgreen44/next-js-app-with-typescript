import { articles } from '../../../data'

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export default function handler(req, res) {
  res.status(200).json(articles)
}
