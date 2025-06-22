// src/pages/LabelCategoryPage.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import labelCategoryDetails from '../data/labelCategoryDetails';

const LabelCategoryPage = () => {
  const { category } = useParams(); // this will match the slug key, e.g., "rapier-label"

  const currentCategory = labelCategoryDetails[category];

  if (!currentCategory) {
    return (
      <div className="p-6 text-red-600">
        ❌ No details found for: <strong>{category}</strong>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-10 font-sans text-gray-900">
      <h1 className="text-2xl md:text-3xl font-bold mb-4">{currentCategory.title}</h1>
      
      {currentCategory.image && (
        <img
          src={currentCategory.image}
          alt={currentCategory.title}
          className="w-full max-w-xl rounded shadow mb-6"
        />
      )}

      <p className="text-lg text-gray-700 mb-4">{currentCategory.intro}</p>

      {currentCategory.features && (
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Key Features:</h2>
          <ul className="list-disc pl-6 space-y-1">
            {currentCategory.features.map((feature, idx) => (
              <li key={idx}>{feature}</li>
            ))}
          </ul>
        </div>
      )}

      {currentCategory.materials && (
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Materials:</h2>
          <ul className="list-disc pl-6 space-y-1">
            {currentCategory.materials.map((material, idx) => (
              <li key={idx}>{material}</li>
            ))}
          </ul>
        </div>
      )}

      {currentCategory.productionTypes && (
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Production Types:</h2>
          <ul className="list-disc pl-6 space-y-1">
            {currentCategory.productionTypes.map((type, idx) => (
              <li key={idx}>{type}</li>
            ))}
          </ul>
        </div>
      )}

      {currentCategory.advantages && (
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Advantages:</h2>
          <ul className="list-disc pl-6 space-y-1">
            {currentCategory.advantages.map((point, idx) => (
              <li key={idx}>{point}</li>
            ))}
          </ul>
        </div>
      )}

      {currentCategory.applications && (
        <p className="mb-2">
          <strong>Applications:</strong> {currentCategory.applications}
        </p>
      )}

      {currentCategory.bestFor && (
        <p className="mb-2">
          <strong>Best For:</strong> {currentCategory.bestFor}
        </p>
      )}

      {currentCategory.visualAppeal && (
        <p className="mb-2">
          <strong>Visual Appeal:</strong> {currentCategory.visualAppeal}
        </p>
      )}
    </div>
  );
};

export default LabelCategoryPage;
