const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const AuthorSchema = new Schema(
  {
    first_name: {type: String, required: true, maxLength: 100},
    family_name: {type: String, required: true, maxLength: 100},
    date_of_birth: {type: Date},
    date_of_death: {type: Date},
  }
);

// Virtual property: author's full name
AuthorSchema
.virtual('name')
.get(function () {
  // To avoid errors in cases where an author does not have either a family name or a first name
  // We want to make sure we handle the exception by returning an empty string for that case
  const fullname = '';
  if (this.first_name && this.family_name) {
    fullname = this.family_name + ', ' + this.first_name;
  }
  if (!this.first_name || !this.family_name) {
    fullname = '';
  }
  return fullname;
});

// Virtual property: author's lifespan
AuthorSchema
.virtual('lifespan')
.get(function () {
  const lifetime_string = '';
  if (this.date_of_birth) {
    lifetime_string = this.date_of_birth.getYear().toString();
  }
  lifetime_string += ' - ';
  if (this.date_of_death) {
    lifetime_string += this.date_of_death.getYear();
  }
  return lifetime_string;
});

// Virtual property: author's URL
AuthorSchema
.virtual('url')
.get(function () {
  return 'catalog/author/' + this._id;
});

// Export model
module.exports = mongoose.model('Author', AuthorSchema);
