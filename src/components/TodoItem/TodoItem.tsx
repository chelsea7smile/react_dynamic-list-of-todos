import React from 'react';
import { Todo } from '../../types/Todo';
import classNames from 'classnames';

type Props = {
  todo: Todo;
  isSelected: boolean;
  onSelect: (todo: Todo) => void;
};

export const TodoItem: React.FC<Props> = ({ todo, isSelected, onSelect }) => {
  return (
    <tr
      data-cy="todo"
      key={todo.id}
      className={classNames({
        'has-background-info-light': isSelected,
      })}
    >
      <td className="is-vcentered">{todo.id}</td>
      <td className="is-vcentered">
        {todo.completed && (
          <span className="icon" data-cy="iconCompleted">
            <i className="fas fa-check" />
          </span>
        )}
      </td>
      <td className="is-vcentered is-expanded">
        <p className={todo.completed ? 'has-text-success' : 'has-text-danger'}>
          {todo.title}
        </p>
      </td>
      <td className="has-text-right is-vcentered">
        <button
          data-cy="selectButton"
          className="button"
          type="button"
          onClick={() => onSelect(todo)}
        >
          <span className="icon">
            <i
              className={classNames('far', {
                'far fa-eye-slash': isSelected,
                'fa-eye': !isSelected,
              })}
            />
          </span>
        </button>
      </td>
    </tr>
  );
};
