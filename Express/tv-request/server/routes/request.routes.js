import { Router } from "express";
import { tvShows } from "../server.js";

const router = Router();

//Route with every tv show
router.route("/tvShows")
    .get((req,res) => {
        res.json(tvShows);
    })
//Route includes a year
router.route("/tvShows/:yearCreated")
    .get((req,res) => {
        console.log(req.params.yearCreated)
        const getShowByYear = tvShows.find(tvShow => tvShow.yearCreated == req.params.yearCreated);
        res.json(getShowByYear)
    })

//DELETE Route by title parameter
router.route("/tvShows/:tvShow")
    .delete((req,res) => {
        const showTitle = req.params.tvShow
        const showToDelete = tvShows.find(s => s.tvShow == showTitle)
        tvShows.splice(showToDelete + 1)
        res.json(tvShows)
    })

// PATCH Route
router.route("/tvShows/:title")
    .patch((req , res) => {
        const { title } = req.params;
        const updatedStarring = req.body;
        if (!Array.isArray(updatedStarring)) {
            return res.status(400).json({ error: "The request body must be an array." });
        }
    
        const show = tvShows.find(show => show.tvShow.toLowerCase() === title.toLowerCase());
    
        if (!show) {
            return res.status(404).json({ error: "TV show not found." });
        }
    
        show.starring = updatedStarring;
        res.json({ message: "Starring list updated successfully.", tvShow: show });
    });
    
export default router ;
