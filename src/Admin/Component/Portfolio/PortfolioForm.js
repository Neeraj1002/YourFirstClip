import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';


// Validation schema
const validationSchema = Yup.object({
  title: Yup.string().required('Title is required'),
  description: Yup.string().required('Description is required'),
  youtubeLink: Yup.string()
    .url('Please enter a valid URL')
    .required('YouTube Link is required'),
  type: Yup.string().required('Portfolio type is required'),
  isLive: Yup.boolean(),
});

const PortfolioForm = ({ portfolio, onSave, loadPortfolios, onCancel, isViewOnly = false }) => {
  const formik = useFormik({
    initialValues: {
      title: portfolio?.title || '',
      description: portfolio?.description || '',
      youtubeLink: portfolio?.videoId 
      ? `https://www.youtube.com/watch?v=${portfolio.videoId}` 
      : '',      type: portfolio?.type || 'TVC',
      isLive: portfolio?.isLive || false,
    },
    validationSchema,
    onSubmit: (values) => {
      // Send full YouTube link as is to the backend
      onSave(values);
    },
    
  });
  
  // Helper function to render inputs
  const renderInput = (name, label, type = 'text', as = 'input') => (
    <div className="mb-4">
      <label htmlFor={name} className="block text-gray-700 font-semibold mb-1">
        {label}
      </label>
      {React.createElement(as, {
        id: name,
        name,
        type,
        onChange: formik.handleChange,
        onBlur: formik.handleBlur,
        value: formik.values[name],
        disabled: isViewOnly,
        className: `w-full p-2 border ${
          formik.touched[name] && formik.errors[name]
            ? 'border-red-500'
            : 'border-gray-300'
        } rounded mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
          isViewOnly ? 'bg-gray-100 cursor-not-allowed' : ''
        }`,
        rows: as === 'textarea' ? 4 : undefined,
      })}
      {formik.touched[name] && formik.errors[name] && (
        <div className="text-red-500 text-sm mt-1">{formik.errors[name]}</div>
      )}
    </div>
  );

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="bg-white p-6 rounded-lg shadow-md mx-auto"
    >
      <h2 className="text-[42px] font-bold mb-6 text-gray-800">
        {isViewOnly
          ? 'View Portfolio'
          : portfolio
          ? 'Edit Portfolio'
          : 'Add New Portfolio'}
      </h2>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="md:col-span-2">{renderInput('title', 'Title')}</div>
        <div className="md:col-span-2">{renderInput('youtubeLink', 'YouTube Link')}</div>

        <div className="md:col-span-1">
          <label htmlFor="type" className="block text-gray-700 font-semibold mb-1">
            Type
          </label>
          <select
            id="type"
            name="type"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.type}
            disabled={isViewOnly}
            className={`w-full p-2 border ${
              formik.touched.type && formik.errors.type
                ? 'border-red-500'
                : 'border-gray-300'
            } rounded mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              isViewOnly ? 'bg-gray-100 cursor-not-allowed' : ''
            }`}
          >
            <option value="REELS">Reels</option>
            <option value="TVC">TVC</option>
            <option value="SOCIAL_MEDIA_ADS">Social Media Ads</option>
            <option value="SHORT_FILMS">Short Films</option>
            <option value="DOCUMENTARY">Documentary</option>
            <option value="MUSIC_VIDEO">Music Video</option>
            <option value="CORPORATE_FILMS">Corporate Films</option>
            <option value="VLOGS">Vlogs</option>
            <option value="PODCAST">Podcast</option>
            <option value="BRANDED_CONTENT">Branded Content</option>
            <option value="TRAINING_VIDEO">Training Video</option>
            <option value="YOUTUBE_INFLUENCERS_EDIT">YouTube Influencers Edit</option>
          </select>
          {formik.touched.type && formik.errors.type && (
            <div className="text-red-500 text-sm mt-1">{formik.errors.type}</div>
          )}
        </div>

        <div className="md:col-span-1 flex items-center">
          <input
            type="checkbox"
            name="isLive"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            checked={formik.values.isLive}
            disabled={isViewOnly}
            className={`mr-2 focus:ring-blue-500 ${
              isViewOnly ? 'cursor-not-allowed' : ''
            }`}
          />
          <label htmlFor="isLive" className="text-gray-700 font-semibold">
            Live
          </label>
        </div>

        <div className="md:col-span-4">
          {renderInput('description', 'Description', 'text', 'textarea')}
        </div>
        {/* Buttons */}
      {!isViewOnly && (
        <div className="flex justify-start space-x-4 mt-6">
          <button
            type="button"
            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
            onClick={onCancel}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Save
          </button>
        </div>
      )}
      </div>
    </form>
  );
};

export default PortfolioForm;
