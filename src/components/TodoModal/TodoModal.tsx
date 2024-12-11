import React, { useState, useEffect } from 'react';
import { Loader } from '../Loader';
import { Todo } from '../../types/Todo';
import { User } from '../../types/User';
import { getUser } from '../../api';
type Props = {
  todos: Todo | null;
  onClose: () => void;
};
export const TodoModal: React.FC<Props> = ({ todos, onClose }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    if (todos) {
      getUser(todos.userId).then(setUser);
    }
  }, [todos]);

  const handleCloseModal = () => {
    onClose();
    setUser(null);
  };

  return (
    <div className="modal is-active" data-cy="modal">
      <div className="modal-background" />

      {!user ? (
        <Loader />
      ) : (
        <div className="modal-card">
          <header className="modal-card-head">
            <div
              className="modal-card-title has-text-weight-medium"
              data-cy="modal-header"
            >
              Todo #{todos?.id}
            </div>

            {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
            <button
              type="button"
              className="delete"
              data-cy="modal-close"
              onClick={handleCloseModal}
            />
          </header>

          <div className="modal-card-body">
            <p className="block" data-cy="modal-title">
              {todos?.title}
            </p>

            <p className="block" data-cy="modal-user">
              {todos?.completed ? (
                <strong className="has-text-success">Done</strong>
              ) : (
                <strong className="has-text-danger">Planned</strong>
              )}

              {' by '}

              <a href="mailto:{user?.email}">{user?.name}</a>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
