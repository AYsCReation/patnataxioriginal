import React from 'react'
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
const ContentEditor = ({value, onChange}) => {
    const modules = {
        toolbar: [
          [{ 'header': [1, 2, false] }],
          ['bold', 'italic', 'underline','strike', 'blockquote'],
          [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
          ['link', 'image'],
          ['clean']
        ],
      };
      
      const formats = [
        'header',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet', 'indent',
        'link', 'image'
      ];
  return (
    <div>
       <ReactQuill
          value={value}
          modules={modules}
          formats={formats}
          className='createTextarea'
          onChange={onChange}
        />
    </div>
  )
}

export default ContentEditor
