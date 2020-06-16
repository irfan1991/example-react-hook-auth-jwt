import React, { Component, useState } from "react";
import ArticleDataService from "../services/article.service";
import AuthService from "../services/auth.service";


// export default class AddArticle extends Component {
//   constructor(props) {
//     super(props);
//     this.onChangeTitle = this.onChangeTitle.bind(this);
//     this.onChangeDescription = this.onChangeDescription.bind(this);
//     this.saveArticle = this.saveArticle.bind(this);
//     this.newArticle = this.newArticle.bind(this);

//     this.state = {
//       id: null,
//       title: "",
//       description: "", 
//       published: false,
//       userId : AuthService.getCurrentUser().id,
//       submitted: false
//     };
//   }

//   onChangeTitle(e) {
//     this.setState({
//       title: e.target.value
//     });
//   }

//   onChangeDescription(e) {
//     this.setState({
//       description: e.target.value
//     });
//   }

//   saveArticle() {
//     var data = {
//       title: this.state.title,
//       description: this.state.description,
//       userId : this.state.userId
//     };

//     ArticleDataService.create(data)
//       .then(response => {
//         this.setState({
//           id: response.data.id,
//           title: response.data.title,
//           description: response.data.description,
//           published: response.data.published,
//           userId: response.data.userId,
//           submitted: true
//         });
//         console.log(response.data);
//       })
//       .catch(e => {
//         console.log(e);
//       });
//   }

//   newArticle() {
//     this.setState({
//       id: null,
//       title: "",
//       description: "",
//       published: false,
//       userId : AuthService.getCurrentUser().id,
//       submitted: false
//     });
//   }

//   render() {
//     return (
//       <div className="submit-form">
//         {this.state.submitted ? (
//           <div>
//             <h4>You submitted successfully!</h4>
//             <button className="btn btn-success" onClick={this.newArticle}>
//               Add
//             </button>
//           </div>
//         ) : (
//           <div>
//             <div className="form-group">
//               <label htmlFor="title">Title</label>
//               <input
//                 type="text"
//                 className="form-control"
//                 id="title"
//                 required
//                 value={this.state.title}
//                 onChange={this.onChangeTitle}
//                 name="title"
//               />
//             </div>

//             <div className="form-group">
//               <label htmlFor="description">Description</label>
//               <input
//                 type="text"
//                 className="form-control"
//                 id="description"
//                 required
//                 value={this.state.description}
//                 onChange={this.onChangeDescription}
//                 name="description"
//               />
//             </div>

//             <button onClick={this.saveArticle} className="btn btn-success">
//               Submit
//             </button>
//           </div>
//         )}
//       </div>
//     );
//   }

// }


const AddArticle = () => {

  const initialArticleState = {
    id: null,
    title: "",
    description: "", 
    published: false,
    userId : AuthService.getCurrentUser().id,

  };

  const [article , setArticle]  = useState(initialArticleState);
  const [submitted , setSubmitterd] = useState(false);

  const handleInputChange = event => {
      const {name , value} = event.target;
      setArticle({...article, [name] :  value});
  };

  const saveArticle = () => {
    var data = {
      title : article.title,
      description : article.description,
      userId : AuthService.getCurrentUser().id,
    };

    ArticleDataService.create(data).then(
      response => {
        setArticle({
          id : response.data.id,
          title : response.data.title,
          description : response.data.description,
          published : response.data.published

        });

        setSubmitterd(true);
        console.log(response.data);
      }).catch( e => {
        console.log(e);
      });
  };

  const newArticle = () => {
    setArticle(initialArticleState);
    setSubmitterd(false);

  };

  return(
    <div className="submit-form">
    {submitted ? (
      <div>
        <h4>You submitted successfully!</h4>
        <button className="btn btn-success" onClick={newArticle}>
          Add
        </button>
      </div>
    ) : (
      <div>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            required
            value={article.title}
            onChange={handleInputChange}
            name="title"
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description</label>
          <input
            type="text"
            className="form-control"
            id="description"
            required
            value={article.description}
            onChange={handleInputChange}
            name="description"
          />
        </div>

        <button onClick={saveArticle} className="btn btn-success">
          Submit
        </button>
      </div>
    )}
  </div>
  );
};

export default AddArticle;