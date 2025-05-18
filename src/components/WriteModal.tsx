import React, { useState, useEffect } from 'react';
import '../styles.css';

interface WriteModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (title: string) => void;
  initialTitle?: string;
}

export default function WriteModal({ isOpen, onClose, onSubmit, initialTitle }: WriteModalProps) {
  const [title, setTitle] = useState('');

  useEffect(() => {
    if (initialTitle) {
      setTitle(initialTitle);
    }
  }, [initialTitle]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim()) {
      onSubmit(title);
      setTitle('');
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>{initialTitle ? '글 수정' : '글쓰기'}</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">제목</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="제목을 입력하세요"
              required
            />
          </div>
          <div className="modal-buttons">
            <button type="submit" className="submit-button">
              {initialTitle ? '수정' : '작성'}
            </button>
            <button type="button" onClick={onClose} className="cancel-button">
              취소
            </button>
          </div>
        </form>
      </div>
    </div>
  );
} 