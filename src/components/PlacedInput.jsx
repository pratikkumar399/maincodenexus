// import React, { useState } from 'react';
// import { storageRef, db } from '../firebase';

// const PlacedInput = () => {
//   const [formData, setFormData] = useState({
//     image: null,
//     name: '',
//     package: '',
//     designation: '',
//   });

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleImageChange = (event) => {
//     const file = event.target.files[0];
//     setFormData({ ...formData, image: file });
//   };

//   const handleSubmit = async(event) => {
//     event.preventDefault();
//     console.log(formData);

//     // Create a reference to the storage location
//     const imageRef = storageRef.child('placed/' + Date.now());

//     // Upload the file to the storage location
//     const snapshot = await imageRef.put(formData.image);

//     // Get the image URL
//     const imageURL = await snapshot.ref.getDownloadURL();

//     try {
//         const collectionRef = db.collection('placed');

//         const data = {
//             name: formData.name,
//             package: formData.package,
//             designation: formData.designation,
//             image: imageURL,
//         };

//         await collectionRef.add(data);

//         console.log('Data added to the subcollection successfully');
//       } catch (error) {
//         console.error('Error adding data to the subcollection:', error);
//       }
//   };

//   return (
//     <div>
//       <h1 className="text-center display-5 mt-4 mb-4">Add Component</h1>
//       <form onSubmit={handleSubmit} noValidate className="mt-5">
//         <div className="container-lg w-75 font-weight-bold bg-light card border-primary mb-3 p-5">
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
//             <label htmlFor="package" className="mt-2 h5">Package:</label>
//             <input
//               required
//               type="text"
//               className="form-control form-control-lg"
//               id="package"
//               name="package"
//               value={formData.package}
//               onChange={handleInputChange}
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="designation" className="mt-2 h5">Designation:</label>
//             <input
//               required
//               type="text"
//               className="form-control form-control-lg"
//               id="designation"
//               name="designation"
//               value={formData.designation}
//               onChange={handleInputChange}
//             />
//           </div>
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

// export default PlacedInput;







import React, { useState } from 'react';
import { storageRef, db } from '../firebase';

const PlacedInput = () => {
  const [formData, setFormData] = useState({
    image: null,
    name: '',
    package: '',
    designation: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setFormData({ ...formData, image: file });
  };

  const handleSubmit = async(event) => {
    event.preventDefault();
    console.log(formData);

    // Create a reference to the storage location
    const imageRef = storageRef.child('brands/' + Date.now());

    // Upload the file to the storage location
    const snapshot = await imageRef.put(formData.image);

    // Get the image URL
    const imageURL = await snapshot.ref.getDownloadURL();

    try {
        const collectionRef = db.collection('brands');

        const data = {
            image: imageURL,
        };

        await collectionRef.add(data);

        console.log('Data added to the subcollection successfully');
      } catch (error) {
        console.error('Error adding data to the subcollection:', error);
      }
  };

  return (
    <div>
      <h1 className="text-center display-5 mt-4 mb-4">Add Component</h1>
      <form onSubmit={handleSubmit} noValidate className="mt-5">
        <div className="container-lg w-75 font-weight-bold bg-light card border-primary mb-3 p-5">
          <div className="form-group">
            <label htmlFor="image" className="mt-2 h5">Image:</label>
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
            <label htmlFor="name" className="mt-2 h5">Name:</label>
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
            <label htmlFor="package" className="mt-2 h5">Package:</label>
            <input
              required
              type="text"
              className="form-control form-control-lg"
              id="package"
              name="package"
              value={formData.package}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="designation" className="mt-2 h5">Designation:</label>
            <input
              required
              type="text"
              className="form-control form-control-lg"
              id="designation"
              name="designation"
              value={formData.designation}
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

export default PlacedInput;