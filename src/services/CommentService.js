import { AppState } from '../AppState.js'
import { logger } from '../utils/Logger.js'
import { api } from './AxiosService.js'

class CommentService {
  async getComments(id) {
    try {
      // FIXME post/:id/comments
      const res = await api.get(`api/blogs/${id}/comments`)
      AppState.comments = res.data
    } catch (error) {
      logger.error()
    }
  }
}

export const commentService = new CommentService()
