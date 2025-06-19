import mongoose from 'mongoose';

const todoSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true
  },
  completed: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true // ✅ Correct option
});

const Todo = mongoose.model('Todo', todoSchema);

export default Todo;
