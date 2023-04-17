import { articles } from '../../../data'

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export default function handler({ query: { id } }, res) {
  const filtered = articles.filter((article) => article.id === id)

  if (filtered.length > 0) {
    return res.status(200).json(filtered[0])
  } else {
    return res
      .status(404)
      .json({ message: `Article with the id of ${id} is not found` })
  }
}
