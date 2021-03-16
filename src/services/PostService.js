import { AppState } from '../AppState.js'
import { logger } from '../utils/Logger.js'
import { api } from './AxiosService.js'

class PostService {
  async getPosts() {
    try {
      const res = await api.get('api/blogs')
      AppState.posts = res.data
    } catch (error) {
      logger.error()
    }
  }

  async getPostId(id) {
    try {
      const res = await api.get('api/blogs/' + id)
      AppState.activePost = res.data
    } catch (error) {
      logger.error()
    }
  }

  async createPost(rawPost) {
    try {
      const res = await api.post('api/blogs', rawPost)
      this.getPosts()
    } catch (error) {
      logger.error()
    }
  }

  async deletePost(id) {
    try {
      await api.delete(`api/blogs/${id}`)
      this.getPosts()
    } catch (error) {
      logger.error()
    }
  }
}

export const postService = new PostService()
