import React from "react";

export type NotePreviewProps = {
  title: string;
  content: string;
};

const NotePreview: React.FC<NotePreviewProps> = ({ title, content }) => (
  <div className="note-preview">
    <h2>{title}</h2>
    <div dangerouslySetInnerHTML={{ __html: content }} />
  </div>
);

export default NotePreview; 