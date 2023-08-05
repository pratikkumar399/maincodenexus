import React, { useState } from 'react';
import { db } from "../firebase"
import 'firebase/storage';
import { storageRef } from '../firebase';

const ImageCard = () => {
  const [image, setImage] = useState(null);
  const [name, setName] = useState('');
  const [sessions, setSessions] = useState(0);
  const [star, setStar] = useState(0);
  const [type, setType] = useState('');
  const [category, setCategory] = useState('');

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    switch (name) {
      case 'image':
        setImage(files[0]);
        break;
      case 'name':
        setName(value);
        break;
      case 'sessions':
        setSessions(parseInt(value, 10));
        break;
      case 'star':
        setStar(parseFloat(value));
        break;
      case 'type':
        setType(value);
        break;
      case 'category':
        setCategory(value);
        break;
      default:
        break;
    }
  };

  const submitData = async() => {
    // Create a reference to the storage location
    const imageRef = storageRef.child('courses/' + image.name);

    // Upload the file to the storage location
    const snapshot = await imageRef.put(image);

    // Get the image URL
    const imageURL = await snapshot.ref.getDownloadURL();

    console.log(imageURL);
    // Set the image URL in the state
    // setImage(imageURL);

    try {
      const collectionRef = db.collection('courses')

      const data = {
        image : imageURL,
        name,
        sessions,
        star,
        type,
        category,
        // Add more key-value pairs as needed
      };

      await collectionRef.add(data);

      console.log('Data added to the subcollection successfully');
    } catch (error) {
      console.error('Error adding data to the subcollection:', error);
    }
  }

  return (
    <div className="image-card">
      <div>
        <label htmlFor="image">Image:</label>
        <input
          type="file"
          id="image"
          name="image"
          accept="image/*"
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="sessions">Sessions:</label>
        <input
          type="number"
          id="sessions"
          name="sessions"
          value={sessions}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="star">Star Rating:</label>
        <input
          type="number"
          step="0.1"
          id="star"
          name="star"
          value={star}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="type">Type:</label>
        <input
          type="text"
          id="type"
          name="type"
          value={type}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="category">Category:</label>
        <input
          type="text"
          id="category"
          name="category"
          value={category}
          onChange={handleInputChange}
        />
      </div>
      <button onClick={submitData}>submit data</button>
    </div>
  );
};

export default ImageCard;
