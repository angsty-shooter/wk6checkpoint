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

  async createComment(rawComment) {
    try {
      const res = await api.post('api/comments', rawComment)
      this.getComments(AppState.activePost.id)
    } catch (error) {
      logger.error()
    }
  }

  async deleteComment(commentId) {
    try {
      await api.delete(`api/comments/${commentId}`)
      this.getComments()
    } catch (error) {
      logger.error()
    }
  }
}

export const commentService = new CommentService()
