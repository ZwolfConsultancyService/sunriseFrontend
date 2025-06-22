// src/pages/LabelItemPage.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import labelDetails from '../page/LabelDetail'; // full label content data (desc, application, best for, etc.)

const LabelItemPage = () => {
  const { group, category, item } = useParams();
  const itemName = item.replace(/-/g, ' ').toUpperCase();

  const currentItem = labelDetails.find(
    (detail) => detail.title.toUpperCase() === itemName
  );

  if (!currentItem) {
    return <div className="p-6 text-red-600">❌ No details found for this item.</div>;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-10 font-sans text-gray-900">
      <h1 className="text-2xl md:text-3xl font-bold mb-4">{currentItem.title}</h1>
      <img
        src={currentItem.image}
        alt={currentItem.title}
        className="w-full max-w-xl rounded shadow mb-6"
      />
      <div className="space-y-4 text-base leading-relaxed">
        <p><strong>Description:</strong> {currentItem.description}</p>
        <p><strong>Applications:</strong> {currentItem.applications}</p>
        <p><strong>Best For:</strong> {currentItem.bestFor}</p>
      </div>
    </div>
  );
};

export default LabelItemPage;
