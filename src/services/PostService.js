import { AppState } from '../AppState.js'
import { logger } from '../utils/Logger.js'
import { api } from './AxiosService.js'

class PostService {
  async getPost() {
    try {
      const res = await api.get('creatorId')
      AppState.posts = res.data
    } catch (error) {
      logger.error()
    }
  }
}

export const postService = new PostService()
