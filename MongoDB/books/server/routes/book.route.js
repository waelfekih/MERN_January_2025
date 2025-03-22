import { Router } from "express";

import BookController from "../controllers/book.controller.js";

const router = Router()

router.route("/books")
    .post(BookController.create)
    .get(BookController.readAll)

router.route("/books/:id")
    .get(BookController.readOne)
    .put(BookController.update)
    .delete(BookController.deleteBook)



export default router
