import Books from "../models/mernbook.model.js";

const BookController = {

    // create
    create : async(req , res) => {
        try {
            const newBook = await Books.create(req.body);
            res.json(newBook)
        } catch (error) {
            console.log(error)
            res.json(error)
        }
    },

    // read all
    readAll : async(req ,res) => {
        try {
            const AllBooks = await Books.find();
            res.json(AllBooks)
        } 
        catch (error) {
            console.log(error)
            res.json(error)
        }
    },

    // read by one
    readOne : async(req,res) => {
        try {
            const getOneBook = await Books.findById(req.params.id);
            res.json(getOneBook)
        }
        catch (error) {
            console.log(error)
            res.json(error)
        }
    },

    // Edit a book
    update : async(req , res) => {
        const options = {
            new: true,
            runValidators: true
        }
        try {
            const updatedBook = await Books.findByIdAndUpdate(req.params.id, req.body, options);
            res.json(updatedBook);
        } catch (error) {
            console.log(error);
            res.json(error);
        }
    },

    //Delete a Book
    deleteBook : async(req , res) =>{
        try {
            const deletedBook = await Books.findByIdAndDelete(req.params.id);
            res.json(deletedBook);
        } catch (error) {
            console.log(error);
            res.status(400).json(error);
        }

    }
        
}
 


export default BookController