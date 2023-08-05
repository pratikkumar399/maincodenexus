// import React, { useState } from 'react';
// import { storageRef, db } from '../firebase';

// const FormComponent = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     image: null,
//     type: '',
//     category: '',
//     subsections: [],
//   });

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleImageChange = (event) => {
//     const file = event.target.files[0];
//     setFormData({ ...formData, image: file });
//   };

//   const handleAddSubsection = () => {
//     const subsection = { heading: '', items: [] };
//     setFormData({ ...formData, subsections: [...formData.subsections, subsection] });
//   };

//   const handleSubsectionHeadingChange = (event, index) => {
//     const { value } = event.target;
//     const subsections = [...formData.subsections];
//     subsections[index].heading = value;
//     setFormData({ ...formData, subsections });
//   };

//   const handleAddItem = (index) => {
//     const item = '';
//     const subsections = [...formData.subsections];
//     subsections[index].items.push(item);
//     setFormData({ ...formData, subsections });
//   };

//   const handleItemChange = (event, sectionIndex, itemIndex) => {
//     const { value } = event.target;
//     const subsections = [...formData.subsections];
//     subsections[sectionIndex].items[itemIndex] = value;
//     setFormData({ ...formData, subsections });
//   };

//   const handleSubmit = async(event) => {
//     event.preventDefault();
//     console.log(formData);
//     // Create a reference to the storage location
//     const imageRef = storageRef.child('courses/' + Date.now());

//     // Upload the file to the storage location
//     const snapshot = await imageRef.put(formData.image);

//     // Get the image URL
//     const imageURL = await snapshot.ref.getDownloadURL();

//     try {
//         const collectionRef = db.collection('courses');

//         const data = {
//             name: formData.name,
//             type: formData.type,
//             category: formData.category,
//             image: imageURL,
//             syllabus: formData.subsections
//         };

//         await collectionRef.add(data);

//         console.log('Data added to the subcollection successfully');
//       } catch (error) {
//         console.error('Error adding data to the subcollection:', error);
//       }

//   };

//   return (
//     <div>
//       <h1 className="text-center display-5 mt-4 mb-4">Add Course</h1>
//       <form onSubmit={handleSubmit} noValidate className="mt-5">
//         <div className="container-lg w-75 font-weight-bold bg-light card border-primary mb-3 p-5">
//           <div className="form-group">
//             <label htmlFor="name" className="mt-2 h5">Name:</label>
//             <input
//               required
//               type="text"
//               className="form-control form-control-lg"
//               id="name"
//               name="name"
//               value={formData.name}
//               onChange={handleInputChange}
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="image" className="mt-2 h5">Image:</label>
//             <input
//               required
//               type="file"
//               accept="image/*"
//               className="form-control form-control-lg"
//               id="image"
//               name="image"
//               onChange={handleImageChange}
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="type" className="mt-2 h5">Type:</label>
//             <input
//               required
//               type="text"
//               className="form-control form-control-lg"
//               id="type"
//               name="type"
//               value={formData.type}
//               onChange={handleInputChange}
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="category" className="mt-2 h5">Category:</label>
//             <input
//               required
//               type="text"
//               className="form-control form-control-lg"
//               id="category"
//               name="category"
//               value={formData.category}
//               onChange={handleInputChange}
//             />
//           </div>
//           <div className="form-group">
//             <button
//               type = "button"
//               className="btn btn-primary w-100 mt-4"
//               onClick={handleAddSubsection}
//             >
//               Add Subsection
//             </button>
//           </div>
//           {formData.subsections.map((subsection, index) => (
//             <div key={index} className="form-group mt-4">
//               <label htmlFor={`subsection-heading-${index}`} className="mt-2 h5">Subsection Heading:</label>
//               <input
//                 required
//                 type="text"
//                 className="form-control form-control-lg"
//                 id={`subsection-heading-${index}`}
//                 value={subsection.heading}
//                 onChange={(event) => handleSubsectionHeadingChange(event, index)}
//               />
//               <button
//                 type = "button"
//                 className="btn btn-primary w-100 mt-4"
//                 onClick={() => handleAddItem(index)}
//               >
//                 Add Item
//               </button>
//               {subsection.items.map((item, itemIndex) => (
//                 <div key={itemIndex} className="form-group mt-4">
//                   <label htmlFor={`item-${index}-${itemIndex}`} className="mt-2 h5">Item {itemIndex}:</label>
//                   <input
//                     required
//                     type="text"
//                     className="form-control form-control-lg"
//                     id={`item-${index}-${itemIndex}`}
//                     value={item}
//                     onChange={(event) => handleItemChange(event, index, itemIndex)}
//                   />
//                 </div>
//               ))}
//             </div>
//           ))}
//           <div className="form-group mt-4">
//             <button type="submit" className="btn btn-success btn-lg w-100">
//               Submit
//             </button>
//           </div>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default FormComponent;



import React, { useState } from 'react';
import { storageRef, db } from '../firebase';

const FormComponent = () => {
  const [formData, setFormData] = useState({
    name: '',
    image: null,
    pdf: null,
    type: '',
    category: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setFormData({ ...formData, image: file });
  };

  const handlePdfChange = (event) => {
    const file = event.target.files[0];
    setFormData({ ...formData, pdf: file });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formData);

    // Create references to the storage locations
    const imageRef = storageRef.child(`courses/images/${Date.now()}`);
    const pdfRef = storageRef.child(`courses/pdfs/${Date.now()}`);

    // Upload the image and PDF files to the storage locations
    const imageSnapshot = await imageRef.put(formData.image);
    const pdfSnapshot = await pdfRef.put(formData.pdf);

    // Get the download URLs of the uploaded files
    const imageURL = await imageSnapshot.ref.getDownloadURL();
    const pdfURL = await pdfSnapshot.ref.getDownloadURL();

    try {
      const collectionRef = db.collection('courses');

      const data = {
        name: formData.name,
        type: formData.type,
        category: formData.category,
        image: imageURL,
        syllabus: pdfURL,
      };

      await collectionRef.add(data);

      console.log('Data added to the subcollection successfully');
    } catch (error) {
      console.error('Error adding data to the subcollection:', error);
    }
  };

  return (
    <div>
      <h1 className="text-center display-5 mt-4 mb-4">Add Course</h1>
      <form onSubmit={handleSubmit} noValidate className="mt-5">
        <div className="container-lg w-75 font-weight-bold bg-light card border-primary mb-3 p-5">
          <div className="form-group">
            <label htmlFor="name" className="mt-2 h5">
              Name:
            </label>
            <input
              required
              type="text"
              className="form-control form-control-lg"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="image" className="mt-2 h5">
              Image:
            </label>
            <input
              required
              type="file"
              accept="image/*"
              className="form-control form-control-lg"
              id="image"
              name="image"
              onChange={handleImageChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="pdf" className="mt-2 h5">
              PDF:
            </label>
            <input
              required
              type="file"
              accept=".pdf"
              className="form-control form-control-lg"
              id="pdf"
              name="pdf"
              onChange={handlePdfChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="type" className="mt-2 h5">
              Type:
            </label>
            <input
              required
              type="text"
              className="form-control form-control-lg"
              id="type"
              name="type"
              value={formData.type}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="category" className="mt-2 h5">
              Category:
            </label>
            <input
              required
              type="text"
              className="form-control form-control-lg"
              id="category"
              name="category"
              value={formData.category}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group mt-4">
            <button type="submit" className="btn btn-success btn-lg w-100">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FormComponent;
