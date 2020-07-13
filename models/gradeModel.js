export default (mongoose) => {
  const gradeSchema = mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    subject: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    value: {
      type: Number,
      required: true,
      //validate(value) {
      //  if (value < 0) throw new Error('Balance não pode ser menor que 0');
      //},
    },
    lastModified: {
      type: Date,
      default: Date.now(),
    },
  });

  const Grade = mongoose.model('grades', gradeSchema);

  return Grade;
};
