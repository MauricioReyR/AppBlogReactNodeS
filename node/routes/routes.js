import express from "express"
import { createBlog, deleteBlog, getAllB, getBlog, updateBlog } from "../controllers/BlogController.js";

const router = express.Router()

router.get('/', getAllB)
router.get('/:id',getBlog)
router.post('/' , createBlog)
router.put('/:id', updateBlog)
router.delete('/:id', deleteBlog)

export default router