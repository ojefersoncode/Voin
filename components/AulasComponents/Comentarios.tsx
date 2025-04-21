'use client';

import { useState } from 'react';
import { Button } from '../../components/ui/button';

export default function Comentarios() {
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState<string[]>([]);

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (comment.trim()) {
      setComments([...comments, comment]);
      setComment('');
    }
  };

  return (
    <div className="w-full max-w-4xl px-2 mt-6">
      <form onSubmit={handleCommentSubmit} className="w-full">
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Escreva seu comentário..."
          className="w-full p-4 border border-gray-500 resize-none rounded-lg dark:bg-black dark:bg-muted/10 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-900"
          rows={4}
        />
        <Button
          variant="outline"
          type="submit"
          className="px-4 py-2 mt-3 text-sm bg-red-600 text-gray-100 dark:text-gray-300 rounded-lg hover:bg-red-400 hover:text-gray-50 max-w-xl"
        >
          Enviar Comentário
        </Button>
      </form>

      <br />

      <div className="py-2 border p-2">
        <h2 className="flex items-center w-full text-xl max-md:text-lg font-medium text-gray-900 dark:text-gray-200">
          Comentários
        </h2>
      </div>

      <div className=" mb-4 border">
        {comments.length === 0 ? (
          <p className="text-gray-600 dark:text-gray-400 text-center p-2">
            Nenhum comentário ainda. Seja o primeiro!
          </p>
        ) : (
          comments.map((comment, index) => (
            <div
              key={index}
              className=" bg-white dark:bg-black rounded-lg shadow-md"
            >
              <div className="flex w-full items-center gap-2 p-3 bg-muted/40">
                <span className="text-sm">Jeferson</span>
                <span className="text-xs">15min</span>
              </div>

              <p className="text-sm py-2 px-4 font-light text-gray-800 dark:text-gray-200">
                {comment}
              </p>

              <hr className="flex w-full pt-1" />
            </div>
          ))
        )}
      </div>
    </div>
  );
}
