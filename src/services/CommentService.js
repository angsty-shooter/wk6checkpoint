import { AppState } from '../AppState.js'
import { logger } from '../utils/Logger.js'
import { api } from './AxiosService.js'

class CommentService {
  async getCommentId(id) {
    try {
      const res = await api.get('comments/' + id)
      AppState.activeComment = res.data
    } catch (error) {
      logger.error()
    }
  }
}

export const commentService = new CommentService()
