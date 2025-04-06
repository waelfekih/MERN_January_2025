import {model, Schema} from 'mongoose';
const BooksSchema = new Schema(
    {
        title: {
            type: String,
            required: [true, "Title is required!"],
            minlength: [2, "Title must be at least 2 characters long!"],
            maxlength: [255, "Title must be less than 255 characters long"]
        },
        author: {
            type: String,
            required: [true, "Author is required!"],
            minlength: [5, "Author must be at least 5 characters long!"],
            maxlength: [255, "Author must be less than 255 characters long"]
        },
        pages: {
            type: Number,
            required: [true, "Pages are required!"],
            min: [1, "Book must be at least 1 page length"]
        },
        isAvailable: {
            type: Boolean,
            default: false
        }
    },
    { timestamps: true }
);
const Books = model("Books", BooksSchema);
export default Books;